import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { alexandria } from "@/lib/fonts";
import { getLocaleFromLang } from "@/lib/locale";
import { ShariahContent } from "./shariah-content";

interface ShariahKsaPageProps {
  searchParams: Promise<{
    lang?: string;
  }>;
}

export async function generateMetadata({
  searchParams,
}: ShariahKsaPageProps): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale = getLocaleFromLang(lang, "en");
  const messages = (await import(`@/locales/${locale}-shariah.json`)).default;

  return {
    title: messages.shariah.metadata.title,
    description: messages.shariah.metadata.description,
  };
}

export default async function ShariahCompliantKsaPage({
  searchParams,
}: ShariahKsaPageProps) {
  const { lang } = await searchParams;
  const locale = getLocaleFromLang(lang, "en");
  const messages = (await import(`@/locales/${locale}-shariah.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div
        className={`${locale === "ar" ? `arabic-fonts ${alexandria.className} [--font-sans:var(--font-alexandria)] [--font-inter:var(--font-alexandria)]` : ""}`}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <ShariahContent />
      </div>
    </NextIntlClientProvider>
  );
}