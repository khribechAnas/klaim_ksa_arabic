"use client";

import { useTranslations } from "next-intl";

export function ShariahContent() {
  const t = useTranslations("shariah");

  const sections = t.raw("sections") as Array<{
    title: string;
    description: string;
  }>;

  return (
    <main className="container mx-auto py-12 px-6 max-w-6xl">
      <div className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-balance mb-6">
            {t("header.title")}
          </h1>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            {t("header.description")}
          </p>
        </header>

        {/* Card Sections */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 bg-accent/30"
            >
              <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
                {section.title}
              </h3>
              <p className="text-base text-muted-foreground font-medium leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Banner */}
        <section className="mt-16 pt-8 border-t border-border">
          <div className="bg-accent/30 rounded-xl p-8 text-center">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              {t("contactBanner.title")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t("contactBanner.description")}
            </p>
            <a
              href={`mailto:${t("contactBanner.email")}`}
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {t("contactBanner.buttonText")}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}