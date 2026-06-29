"use client";

import { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { getLocaleFromLang, HEALTH_DEFAULT_LOCALE } from "@/lib/locale";

function LanguageToggleContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isHealthPage = pathname === "/health";
  const locale = getLocaleFromLang(
    searchParams.get("lang"),
    isHealthPage ? HEALTH_DEFAULT_LOCALE : "en",
  );
  const labels = {
    en: "English",
    ar: "عربي",
  };

  const navigate = (target: "en" | "ar") => {
    if (target === locale) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());

    if (isHealthPage) {
      if (target === "en") {
        params.set("lang", "en");
      } else {
        params.delete("lang");
      }
    } else if (target === "ar") {
      params.set("lang", "ar");
    } else {
      params.delete("lang");
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  };

  return (
    <div
      className="inline-flex h-8 items-center gap-1 rounded-full border border-input bg-background p-1 shadow-xs"
      aria-label="Change language"
    >
      {(["en", "ar"] as const).map((target) => (
        <button
          key={target}
          type="button"
          onClick={() => navigate(target)}
          aria-pressed={locale === target}
          className={cn(
            "cursor-pointer h-6 min-w-8 rounded-full px-2 text-[11px] font-medium leading-none text-primary/60 transition-all hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
            locale === target &&
              "bg-secondary text-primary-foreground shadow-[inset_0_1px_1px_rgba(255,255,255,0.24),0_1px_2px_rgba(16,24,40,0.10)] dark:text-secondary-foreground",
          )}
        >
          {labels[target]}
        </button>
      ))}
    </div>
  );
}

export function LanguageToggle() {
  return (
    <Suspense fallback={null}>
      <LanguageToggleContent />
    </Suspense>
  );
}
