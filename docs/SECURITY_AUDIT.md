# Security Audit Report

**Date:** March 4, 2025  
**Scope:** klaim-website codebase (Next.js 15, API routes, forms, dependencies)

---

## Executive Summary

The application has **critical** exposure of API keys and other secrets in version-controlled CI/CD config. Several **medium** and **low** issues were identified around input validation, rate limiting, and hardening. No SQL or direct command injection was found; API routes proxy to external services with JSON bodies. XSS surface is limited and currently uses safe patterns (ReactMarkdown without raw HTML, Shiki for code, static CSS).

---

## Critical Findings

### 1. Secrets in version control (CRITICAL)

**Location:** `.ci-cd/dev.yaml`, `.ci-cd/preview.yaml`, `.ci-cd/prod.yaml`

**Issue:** Build arguments include:

- `KLAIM_X_API_KEY`
- `SALES_UAE_API_KEY`
- `NEXT_PUBLIC_POSTHOG_KEY` (and in prod, a different key)

These files are under version control. Anyone with repo access (or if the repo is ever leaked) can use these keys to call your Sales UAE and Klaim X APIs and impersonate the application.

**Recommendation:**

1. **Immediately rotate** `KLAIM_X_API_KEY` and `SALES_UAE_API_KEY` (and any other keys present in those files) in the respective backends.
2. Remove all secret values from YAML. Use your platform’s secret store (e.g. Vercel env vars, GitHub Actions secrets, Kubernetes secrets) and pass them as build args at pipeline runtime, not from the repo.
3. Add `.ci-cd/*.yaml` to `.gitignore` if they must hold placeholders, or better: keep only non-secret config in repo and inject secrets in CI.

---

## High / Medium Findings

### 2. No rate limiting on public API routes (MEDIUM)

**Location:** `src/app/api/contact/route.ts`, `src/app/api/newsletter/route.ts`, `src/app/api/campaign/route.ts`

**Issue:** POST endpoints have no rate limiting. Attackers can:

- Spam contact/newsletter/campaign submissions (abuse, spam, DoS of downstream `SALES_UAE_API_*`).
- Enumerate or probe the API without throttling.

**Recommendation:** Add rate limiting (e.g. by IP or by identifier) using Vercel Edge Config, Upstash Redis, or middleware (e.g. `@upstash/ratelimit`). Apply to `/api/contact`, `/api/newsletter`, and `/api/campaign`.

---

### 3. Weak email validation (MEDIUM)

**Location:** All three API routes and `src/lib/api.ts`

**Issue:** Validation is only `email.includes('@')`. This allows invalid or malformed addresses (e.g. `@`, `a@`, very long strings) and makes abuse easier.

**Recommendation:** Use a strict pattern or a small validation library (e.g. `validator.isEmail()` or a regex aligned with RFC 5322). Normalize and trim, and enforce a max length (e.g. 254).

---

### 4. No input length limits (MEDIUM)

**Location:** Same API routes

**Issue:** `name`, `company`, `phone`, `message` are not length-limited. Very large payloads can:

- Cause high memory/CPU (DoS).
- Be forwarded to Sales UAE API and cause issues there.

**Recommendation:** Enforce maximum lengths (e.g. name 200, company 300, phone 50, message 5000) and reject with 400 when exceeded. Optionally enforce a total body size in Next.js route config.

---

### 5. Referer used for sector (LOW)

**Location:** `getSectorFromRequest()` in `contact/route.ts` and `campaign/route.ts`

**Issue:** Sector is derived from `Referer` path. Referer can be spoofed. Impact is limited to mis-tagging leads (wrong sector), not authentication or authorization.

**Recommendation:** Prefer passing sector from the client (e.g. hidden field or query) when the page is known, and treat Referer as a hint only. Optionally validate that Referer origin is your site.

---

## Low / Informational

### 6. No explicit security headers

**Location:** `next.config.ts`

**Issue:** No `headers()` for X-Frame-Options, X-Content-Type-Options, CSP, etc.

**Recommendation:** Add security headers in `next.config.ts`:

```ts
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    },
  ];
}
```

Add Content-Security-Policy (CSP) gradually to avoid breaking analytics/embeds.

---

### 7. Message content forwarded with `<br/>` (LOW)

**Location:** Contact and campaign routes

**Issue:** `message` is sent to the backend with `\n` replaced by `<br/>`. If the downstream system ever renders that as HTML, it could introduce stored XSS there. Your Next.js app does not render it.

**Recommendation:** Confirm with the Sales UAE API owner that they do not render description as HTML. If they do, send plain text or a safe format and let them do the formatting.

---

### 8. Markdown and HTML rendering (informational)

**Locations:** `src/components/ui/markdown.tsx`, `src/components/ui/code-block.tsx`, `src/components/spotlight-card.tsx`

**Findings:**

- **ReactMarkdown** (including blog and reasoning UI): Used without `rehype-raw`, so raw HTML in markdown is not rendered. Safe for XSS from markdown content.
- **CodeBlockCode:** Uses Shiki `codeToHtml()` and `dangerouslySetInnerHTML`. Input is code from markdown blocks; Shiki escapes code content. Acceptable if markdown source is trusted or sanitized.
- **spotlight-card:** `dangerouslySetInnerHTML` is used for a **static** CSS string (template literal). No user input; safe.

**Recommendation:** If you later allow user-generated or third-party markdown, keep `rehype-raw` disabled or sanitize HTML (e.g. rehype-sanitize) and continue to validate/sanitize code block content.

---

### 9. CSRF (informational)

**Location:** POST `/api/contact`, `/api/newsletter`, `/api/campaign`

**Finding:** Next.js API routes do not add CSRF tokens by default. Browsers’ same-origin policy and cookie SameSite reduce risk for same-origin form submissions. Cross-site POSTs are possible if an attacker lures a user to a page that submits to your API.

**Recommendation:** For stronger protection, use SameSite cookies for any session and consider CSRF tokens or double-submit cookie for state-changing APIs. Rate limiting (see above) also reduces impact of cross-site abuse.

---

### 10. Dependency audit

**Action:** `yarn npm audit --all` was run; no output was reported. Run `yarn audit` (or `npm audit`) regularly and fix high/critical issues. Prefer Dependabot or Renovate for dependency updates.

---

## Positive Notes

- Server-side API keys (`SALES_UAE_API_KEY`, etc.) are read from `process.env` in API routes and not exposed to the client.
- No `eval()` or `new Function()` on user input.
- No raw SQL or string-concatenated queries.
- API error responses return generic messages; no stack traces or internal URLs leaked to the client.
- Required env vars are checked at startup in API route modules.

---

## Checklist (remediation)

- [ ] Rotate all keys present in `.ci-cd/*.yaml` and remove those values from the repo.
- [ ] Move build-time secrets to a secret manager / CI secrets; do not commit them.
- [ ] Add rate limiting to `/api/contact`, `/api/newsletter`, `/api/campaign`.
- [ ] Harden email validation and add input length limits on all three APIs.
- [ ] Add security headers in `next.config.ts`.
- [ ] (Optional) Pass sector from client or validate Referer origin.
- [ ] Run `yarn audit` (or equivalent) in CI and treat high/critical as failing.

---

## Incident: Container logs – attack attempts (March 2025)

Container logs showed three related attack patterns:

### 1. OpenGraph “Image size cannot be determined”

**Cause:** `opengraph-image.tsx` built the image URL using the **Host** header (`protocol + host`). Attackers sent requests with a forged `Host` (e.g. `Host: 147.45.41.25`). The app then tried to load the image from `https://147.45.41.25/agent-template-og.png`. That server returned a non-image or an image without dimensions, so Next.js threw “Image size cannot be determined.”

**Impact:** Host-header abuse → server-side request to attacker-controlled URL (SSRF), and possible use of your server as an image-fetch proxy or to trigger downstream bugs.

**Fix applied:** The OG image URL is now taken only from a fixed origin (env: `NEXT_PUBLIC_SITE_URL` or `VERCEL_URL`, fallback `https://klaim.ai`). The Host header is no longer used for this route.

### 2. Command-injection payload in logs (“Command failed: echo … | base64 -d | /bin/sh”)

**What it is:** The decoded base64 is a shell script that:

- Parses a URL from an argument and connects to it (e.g. `147.45.41.25`) via `nc`/`wget`/`curl`/`python3`/`perl`.
- Sends an HTTP request to that host (reverse shell / callback to attacker).

So this is an attempted **remote code execution (RCE)** via command injection: run `echo <payload> | base64 -d | /bin/sh` so the server executes the script and calls back to the attacker.

**Why it appears in your logs:** Either:

- Some part of the stack (e.g. image pipeline or a dependency) passed user-controlled input (e.g. URL or Host) into a shell command, and the attacker’s Host/URL contained or triggered this payload; or
- The payload was sent in a request (header/body) and ended up inside an error message that was logged.

The app code does not call `exec`/`spawn`; if the command actually ran, the source is likely a dependency or Next.js internals when handling the malicious Host/URL (e.g. during image fetch/processing).

**Recommendation:** After fixing the Host header (above), re-deploy and monitor. If “Command failed” with similar payloads continues, audit dependencies (e.g. image-related libs) and Next.js version for known RCE/command-injection issues.

### 3. “RCE_RES” error with hex payload

**What it is:** The hex string decodes to JSON containing:

- Platform info (e.g. `linux`, `root`, kernel, Azure).
- **Environment variables**, including `SALES_UAE_API_KEY`, internal IPs, Kubernetes service names, paths.

So this looks like **exfiltrated data** from a successful or simulated RCE (env dump sent to the attacker’s scanner).

**Interpretation:**

- If the attacker actually achieved RCE (e.g. via the command-injection path above), that JSON could be real exfiltrated data.
- The `SALES_UAE_API_KEY` value in the payload matches the one previously committed in `.ci-cd/*.yaml`, so the attacker may have reused a known leaked key in a “proof” payload even without RCE.

**Action:** Treat as potential compromise:

1. **Rotate immediately** `SALES_UAE_API_KEY` (and any other secrets that appear in the payload or in repo history).
2. Keep the Host-header fix deployed so the OG route no longer fetches from attacker-controlled hosts.
3. If you use a WAF or log aggregator, add alerts for “RCE_RES” and for “Command failed” plus base64/shell patterns.

---

_This report reflects a static code audit and incident review. For production, consider a penetration test and dependency scanning in CI._
