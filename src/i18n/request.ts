import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const activeLocale = locale ?? "en";

  if (!["en", "ar"].includes(activeLocale)) notFound();

  return {
    messages: (await import(`../locales/${activeLocale}.json`)).default,
    locale: activeLocale,
  };
});
