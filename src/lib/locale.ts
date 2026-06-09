export type AppLocale = "en" | "ar";

/** Resolves locale from ?lang= query param; defaults to `defaultLocale` when absent. */
export function getLocaleFromLang(
  lang: string | null | undefined,
  defaultLocale: AppLocale = "en",
): AppLocale {
  if (defaultLocale === "ar") {
    return lang === "en" ? "en" : "ar";
  }
  return lang === "ar" ? "ar" : "en";
}

export const HEALTH_DEFAULT_LOCALE: AppLocale = "ar";
