"use client";

import { useTranslations } from "next-intl";

/**
 * Renders a string that may contain <email>...</email> or <link>...</link> markers
 * as JSX with appropriate anchor elements.
 */
function renderRichText(
  text: string,
  renderEmail: (email: string) => React.ReactNode,
  renderLink: (label: string) => React.ReactNode,
): React.ReactNode {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const emailStart = remaining.indexOf("<email>");
    const linkStart = remaining.indexOf("<link>");

    let nextStart = -1;
    let isEmail = false;
    let isLink = false;

    if (emailStart !== -1 && (linkStart === -1 || emailStart < linkStart)) {
      nextStart = emailStart;
      isEmail = true;
    } else if (linkStart !== -1) {
      nextStart = linkStart;
      isLink = true;
    }

    if (nextStart === -1) {
      parts.push(remaining);
      break;
    }

    if (nextStart > 0) {
      parts.push(remaining.slice(0, nextStart));
    }

    if (isEmail) {
      const endTag = "</email>";
      const endIdx = remaining.indexOf(endTag, nextStart);
      if (endIdx === -1) {
        parts.push(remaining.slice(nextStart));
        break;
      }
      const email = remaining.slice(nextStart + "<email>".length, endIdx);
      parts.push(<span key={key++}>{renderEmail(email)}</span>);
      remaining = remaining.slice(endIdx + endTag.length);
    } else if (isLink) {
      const endTag = "</link>";
      const endIdx = remaining.indexOf(endTag, nextStart);
      if (endIdx === -1) {
        parts.push(remaining.slice(nextStart));
        break;
      }
      const label = remaining.slice(nextStart + "<link>".length, endIdx);
      parts.push(<span key={key++}>{renderLink(label)}</span>);
      remaining = remaining.slice(endIdx + endTag.length);
    }
  }

  return parts;
}

export function TermsContent() {
  const t = useTranslations("terms");

  // Load arrays/objects via t.raw()
  const section1Paragraphs = t.raw("section1.paragraphs") as string[];
  const section2Items = t.raw("section2.items") as Array<{
    label: string;
    text: string;
  }>;
  const section3Paragraphs = t.raw("section3.paragraphs") as string[];
  const section4Paragraphs = t.raw("section4.paragraphs") as string[];
  const section5Items = t.raw("section5.items") as string[];
  const section6Paragraphs = t.raw("section6.paragraphs") as string[];
  const section7Paragraphs = t.raw("section7.paragraphs") as string[];
  const section8Paragraphs = t.raw("section8.paragraphs") as string[];
  const section9Paragraphs = t.raw("section9.paragraphs") as string[];
  const section10Paragraphs = t.raw("section10.paragraphs") as string[];
  const section11Paragraphs = t.raw("section11.paragraphs") as string[];
  const section12Paragraphs = t.raw("section12.paragraphs") as string[];
  const section13Items = t.raw("section13.items") as string[];
  const section13Paragraphs = t.raw("section13.paragraphs") as string[];
  const section14Paragraphs = t.raw("section14.paragraphs") as string[];
  const section15Paragraphs = t.raw("section15.paragraphs") as string[];
  const section16Paragraphs = t.raw("section16.paragraphs") as string[];
  const section17Paragraphs = t.raw("section17.paragraphs") as string[];
  const section18Paragraphs = t.raw("section18.paragraphs") as string[];
  const section19Paragraphs = t.raw("section19.paragraphs") as string[];
  const section20ConsumerItems = t.raw("section20.consumerItems") as string[];
  const section20BusinessItems = t.raw("section20.businessItems") as string[];
  const section21Paragraphs = t.raw("section21.paragraphs") as string[];
  const section21Items = t.raw("section21.items") as string[];
  const section22Paragraphs = t.raw("section22.paragraphs") as string[];
  const section23Paragraphs = t.raw("section23.paragraphs") as string[];

  const renderEmailLink = (email: string) => (
    <a href={`mailto:${email}`} className="text-primary hover:underline">
      {email}
    </a>
  );

  const renderKlaimLink = (label: string) => (
    <a href="https://klaim.ai/#contact" className="text-primary hover:underline">
      {label}
    </a>
  );

  const renderPrivacyPolicyLink = (label: string) => (
    <a href="/docs/Privacy_Policy.pdf" className="text-primary hover:underline">
      {label}
    </a>
  );

  return (
    <main className="container mx-auto py-12 px-6 max-w-6xl">
      <div className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-balance mb-6">
            {t("header.title")}
          </h1>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            {t("header.lastUpdated")}
          </p>
        </header>

        {/* Important Notice */}
        <section className="mb-12">
          <div className="bg-accent/50 rounded-lg p-6 mb-8">
            <p className="text-lg font-medium text-foreground text-center">
              {t("notice.text")}
            </p>
          </div>
        </section>

        {/* What&apos;s in these terms Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section1.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section1Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Definitions Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section2.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>{t("section2.intro")}</p>
            <ul className="list-disc ml-6 space-y-2">
              {section2Items.map((item, index) => (
                <li key={index}>
                  <strong>{item.label}</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who we are Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section3.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section3Paragraphs.map((paragraph, index) => (
              <p key={index}>
                {renderRichText(paragraph, renderEmailLink, renderKlaimLink)}
              </p>
            ))}
          </div>
        </section>

        {/* Accept terms Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section4.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section4Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Other terms Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section5.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>{t("section5.intro")}</p>
            <ul className="list-disc ml-6 space-y-2">
              {section5Items.map((item, index) => (
                <li key={index}>
                  {renderRichText(item, renderEmailLink, renderPrivacyPolicyLink)}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Changes to terms Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section6.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section6Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Changes to site Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section7.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section7Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Suspend or withdraw site Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section8.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section8Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Transfer agreement Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section9.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section9Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Geographic restrictions Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section10.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section10Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Account security Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section11.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section11Paragraphs.map((paragraph, index) => (
              <p key={index}>
                {renderRichText(paragraph, renderEmailLink, renderKlaimLink)}
              </p>
            ))}
          </div>
        </section>

        {/* Intellectual property Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section12.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section12Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* No text or data mining Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section13.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>{t("section13.intro")}</p>
            <ul className="list-disc ml-6 space-y-2">
              {section13Items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {section13Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Linking rules Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section14.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section14Paragraphs.map((paragraph, index) => (
              <p key={index}>
                {renderRichText(paragraph, renderEmailLink, renderKlaimLink)}
              </p>
            ))}
          </div>
        </section>

        {/* Trade marks Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section15.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section15Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Do not rely on information Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section16.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section16Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Third party links Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section17.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section17Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Viruses Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section18.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section18Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Must not introduce viruses Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section19.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section19Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Liability Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section20.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>{t("section20.intro")}</p>
            <ul className="list-disc ml-6 space-y-2">
              {section20ConsumerItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{t("section20.businessIntro")}</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>{section20BusinessItems[0]}</li>
              <li>
                {section20BusinessItems[1]}
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>{section20BusinessItems[2]}</li>
                  <li>{section20BusinessItems[3]}</li>
                </ul>
              </li>
              <li>
                {section20BusinessItems[4]}
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>{section20BusinessItems[5]}</li>
                  <li>{section20BusinessItems[6]}</li>
                  <li>{section20BusinessItems[7]}</li>
                  <li>{section20BusinessItems[8]}</li>
                  <li>{section20BusinessItems[9]}</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Personal information Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section21.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section21Paragraphs.map((paragraph, index) => (
              <p key={index}>
                {renderRichText(paragraph, renderEmailLink, renderPrivacyPolicyLink)}
              </p>
            ))}
            <ul className="list-disc ml-6 space-y-2">
              {section21Items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>
              {renderRichText(
                t.raw("section21.outro") as string,
                renderEmailLink,
                renderKlaimLink,
              )}
            </p>
          </div>
        </section>

        {/* Governing law Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section22.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section22Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Service warranty Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section23.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section23Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Contact Section */}
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