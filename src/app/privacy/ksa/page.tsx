import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { alexandria } from "@/lib/fonts";
import { getLocaleFromLang } from "@/lib/locale";
import { PrivacyContent } from "./privacy-content";

interface PrivacyKsaPageProps {
  searchParams: Promise<{
    lang?: string;
  }>;
}

export async function generateMetadata({
  searchParams,
}: PrivacyKsaPageProps): Promise<Metadata> {
  const { lang } = await searchParams;
  const locale = getLocaleFromLang(lang, "en");
  const messages = (await import(`@/locales/${locale}-privacy.json`)).default;

  return {
    title: messages.privacy.metadata.title,
    description: messages.privacy.metadata.description,
  };
}

export default async function PrivacyPolicyKsaPage({
  searchParams,
}: PrivacyKsaPageProps) {
  const { lang } = await searchParams;
  const locale = getLocaleFromLang(lang, "en");
  const messages = (await import(`@/locales/${locale}-privacy.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div
        className={`${locale === "ar" ? `arabic-fonts ${alexandria.className} [--font-sans:var(--font-alexandria)] [--font-inter:var(--font-alexandria)]` : ""}`}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <PrivacyContent />
      </div>
    </NextIntlClientProvider>
  );
}