import { redirect } from "next/navigation";

/**
 * Legacy URL: send visitors to the KSA policy by default.
 * Regional policies live at /privacy/uae and /privacy/ksa.
 */
export default function PrivacyIndexPage() {
  redirect("/privacy/ksa");
}
