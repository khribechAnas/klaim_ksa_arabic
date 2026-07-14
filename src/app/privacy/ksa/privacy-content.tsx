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

export function PrivacyContent() {
  const t = useTranslations("privacy");

  // Load arrays/objects via t.raw()
  const contentsItems = t.raw("contents.items") as string[];
  const introParagraphs = t.raw("intro.paragraphs") as string[];
  const section1Subsections = t.raw("section1.subsections") as Array<{
    title: string;
    paragraphs: string[];
  }>;
  const section2Intro = t.raw("section2.intro") as string[];
  const section2DataTypes = t.raw("section2.dataTypes") as Array<{
    title: string;
    description: string;
  }>;
  const section3Methods = t.raw("section3.methods") as Array<{
    title: string;
    description: string;
    list?: string[];
    techDataTitle?: string;
    techDataList?: string[];
    additionalPoints?: string[];
  }>;
  const legalBasisItems = t.raw("section4.legalBasis.items") as Array<{
    label: string;
    text: string;
  }>;
  const tableHeaders = t.raw("section4.table.headers") as string[];
  const tableRows = t.raw("section4.table.rows") as Array<{
    purpose: string[];
    dataType: string[];
    legalBasis: string[];
  }>;
  const directMarketingParagraphs = t.raw(
    "section4.marketing.directMarketing.paragraphs",
  ) as string[];
  const optingOutParagraphs = t.raw(
    "section4.marketing.optingOut.paragraphs",
  ) as string[];
  const section5Paragraphs = t.raw("section5.paragraphs") as string[];
  const section6Paragraphs = t.raw("section6.paragraphs") as string[];
  const section7Paragraphs = t.raw("section7.paragraphs") as string[];
  const notificationMethods = t.raw("section7.notificationMethods") as string[];
  const notificationItems = t.raw("section7.notificationItems") as string[];
  const section8Paragraphs = t.raw("section8.subsection.paragraphs") as string[];
  const section9Intro = t.raw("section9.intro") as string[];
  const section9Rights = t.raw("section9.rights") as Array<{
    title: string;
    description: string;
    extra?: string;
    list?: string[];
  }>;
  const section9Subsections = t.raw("section9.subsections") as Array<{
    title: string;
    paragraphs: string[];
  }>;
  const section11Paragraphs = t.raw("section11.paragraphs") as string[];
  const section12Paragraphs = t.raw("section12.paragraphs") as string[];
  const section13Paragraphs = t.raw("section13.paragraphs") as string[];

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

        {/* Table of Contents */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("contents.title")}
          </h2>
          <div className="space-y-2 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {contentsItems.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </section>

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("intro.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {introParagraphs.map((paragraph, index) => (
              <p key={index}>
                {renderRichText(paragraph, renderEmailLink, renderKlaimLink)}
              </p>
            ))}
          </div>
        </section>

        {/* Important Information Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section1.title")}
          </h2>

          {section1Subsections.map((subsection, sIndex) => (
            <div key={sIndex} className="mb-8">
              <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
                {subsection.title}
              </h3>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                {subsection.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Data Collection Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section2.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-6">
            {section2Intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-4 md:gap-6">
            {section2DataTypes.map((item, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed mt-6">
            <p>{t("section2.outro")}</p>
          </div>
        </section>

        {/* Data Collection Methods Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section3.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-6">
            <p>{t("section3.intro")}</p>
          </div>

          <div className="space-y-6">
            {section3Methods.map((method, index) => (
              <div key={index}>
                <h4 className="text-lg font-medium text-foreground mb-3">
                  {method.title}
                </h4>
                <p className="text-base text-muted-foreground mb-4">
                  {method.description}
                </p>
                {method.list && (
                  <ul className="list-disc ml-6 space-y-2 text-sm text-muted-foreground">
                    {method.list.map((item, lIndex) => (
                      <li key={lIndex}>{item}</li>
                    ))}
                  </ul>
                )}
                {method.techDataTitle && (
                  <div className="space-y-3 ml-4">
                    <div>
                      <h5 className="font-medium text-foreground">
                        {method.techDataTitle}
                      </h5>
                      {method.techDataList && (
                        <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-muted-foreground">
                          {method.techDataList.map((item, lIndex) => (
                            <li key={lIndex}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    {method.additionalPoints?.map((point, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-sm text-muted-foreground"
                      >
                        {point}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Data Usage Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section4.title")}
          </h2>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              {t("section4.legalBasis.title")}
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>{t("section4.legalBasis.intro")}</p>
              <ul className="list-disc ml-6 space-y-2">
                {legalBasisItems.map((item, index) => (
                  <li key={index}>
                    <strong>{item.label}</strong> {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              {t("section4.purposes.title")}
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>{t("section4.purposes.intro")}</p>
            </div>
          </div>

          {/* Data Processing Table */}
          <div className="overflow-x-auto mt-8">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-accent/50">
                  {tableHeaders.map((header, index) => (
                    <th
                      key={index}
                      className="border border-border p-4 text-left font-medium text-foreground"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 1 ? "bg-accent/20" : ""}
                  >
                    <td className="border border-border p-4 text-sm text-muted-foreground">
                      {row.purpose.map((line, lIndex) => (
                        <span key={lIndex}>
                          {lIndex > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </td>
                    <td className="border border-border p-4 text-sm text-primary">
                      {row.dataType.map((line, lIndex) => (
                        <span key={lIndex}>
                          {lIndex > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </td>
                    <td className="border border-border p-4 text-sm text-muted-foreground">
                      {row.legalBasis.map((line, lIndex) => (
                        <span key={lIndex}>
                          {lIndex > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">
                {t("section4.marketing.directMarketing.title")}
              </h4>
              {directMarketingParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base text-muted-foreground ${index > 0 ? "mt-2" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">
                {t("section4.marketing.thirdPartyMarketing.title")}
              </h4>
              <p className="text-base text-muted-foreground">
                {t("section4.marketing.thirdPartyMarketing.description")}
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">
                {t("section4.marketing.optingOut.title")}
              </h4>
              {optingOutParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-base text-muted-foreground ${index > 0 ? "mt-2" : ""}`}
                >
                  {renderRichText(paragraph, renderEmailLink, renderKlaimLink)}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Disclosures Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section5.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section5Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* International Transfers Section */}
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

        {/* Data Security Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section7.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section7Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <ul className="list-disc ml-6 space-y-2">
              {notificationMethods.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p>{t("section7.notificationIncludes")}</p>
            <ul className="list-disc ml-6 space-y-2">
              {notificationItems.map((item, index) => (
                <li key={index}>
                  {renderRichText(item, renderEmailLink, renderKlaimLink)}
                </li>
              ))}
            </ul>
            <p>{t("section7.outro")}</p>
          </div>
        </section>

        {/* Data Retention Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section8.title")}
          </h2>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              {t("section8.subsection.title")}
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              {section8Paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Your Legal Rights Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section9.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-8">
            {section9Intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-6">
            {section9Rights.map((right, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2">
                  {right.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {right.description}
                </p>
                {right.extra && (
                  <p className="text-sm text-muted-foreground mt-2">
                    {right.extra}
                  </p>
                )}
                {right.list && (
                  <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1 mt-2">
                    {right.list.map((item, lIndex) => (
                      <li key={lIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>{t("section9.outro")}</p>
          </div>

          {section9Subsections.map((subsection, sIndex) => (
            <div key={sIndex} className="mt-8">
              <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
                {subsection.title}
              </h3>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
                {subsection.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Contact Details Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section10.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>{t("section10.intro")}</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                {t("section10.emailLabel")}{" "}
                <a
                  href={`mailto:${t("section10.email")}`}
                  className="text-primary hover:underline"
                >
                  {t("section10.email")}
                </a>
              </li>
              <li>
                {t("section10.postalLabel")} {t("section10.postalAddress")}
              </li>
              <li>
                {t("section10.phoneLabel")}{" "}
                <a
                  href={`tel:${t("section10.phoneHref")}`}
                  className="text-primary hover:underline"
                >
                  {t("section10.phone")}
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Complaints Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section11.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section11Paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Changes Section */}
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

        {/* Third-party Links Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {t("section13.title")}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            {section13Paragraphs.map((paragraph, index) => (
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