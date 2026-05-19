"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import enTranslations from "@/locales/en.json";
import arTranslations from "@/locales/ar.json";

export function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const locale = searchParams.get("lang") === "ar" ? "ar" : "en";
  const messages = locale === "ar" ? arTranslations.navbar : enTranslations.navbar;
  const labels = {
    en: messages.languageEnglish,
    ar: messages.languageArabic,
  };

  const navigate = (target: "en" | "ar") => {
    if (target === locale) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());

    if (target === "ar") {
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
              "bg-secondary text-primary-foreground shadow-[inset_0_1px_1px_rgba(255,255,255,0.24),0_1px_2px_rgba(16,24,40,0.10)] dark:text-secondary-foreground"
          )}
        >
          {labels[target]}
        </button>
      ))}
    </div>
  );
}
