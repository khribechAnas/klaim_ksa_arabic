import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const activeLocale = locale ?? "en";

  // Validate that the incoming `locale` parameter is valid
  if (!["en", "ar"].includes(activeLocale)) notFound();

  return {
    messages: (await import(`./src/locales/${activeLocale}.json`)).default,
    locale: activeLocale,
  };
});
