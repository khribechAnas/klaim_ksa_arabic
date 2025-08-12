import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Klaim AI",
  description:
    "Privacy Policy for KLAIM Holdings Limited - Learn how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto py-12 px-6 max-w-6xl">
      <div className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-balance mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            Last updated: July 6, 2023
          </p>
        </header>

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Introduction
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              Welcome to the privacy policy of KLAIM Holdings Limited (referred
              to as the &quot;Company&quot;, &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot; throughout this Privacy Policy). We value your
              privacy and are committed to protecting your personal data. This
              Privacy Policy will provide you about details on how we handle
              your personal data when you access our website (regardless of the
              location from which you access our website) and inform you about
              your privacy rights and the legal protections in place to ensure
              your privacy.
            </p>
            <p>
              Please refer the Glossary to understand some of the terms used in
              this Privacy Policy.
            </p>
          </div>
        </section>

        {/* Important Information Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Important Information and our Identity
          </h2>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Purpose of this Privacy Policy
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                This Privacy Policy aims to give you information on how the
                Company collects and processes your personal data when you use
                this website, including any data you may provide through this
                website.
              </p>
              <p>
                Please note that this website is not intended for children and
                we do not knowingly collect data relating to children.
              </p>
              <p>
                It is important that you read this Privacy Policy together with
                any other privacy policy or fair processing policy that we may
                provide on specific occasions when we collect or process your
                personal data or information. This is to ensure that we fully
                provide you with the necessary information for you to have a
                complete understanding of how and why we are collecting or
                processing your data. This Privacy Policy complements other
                notices and privacy policies and is not intended to override
                them.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Controller
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                The Company is the controller and is responsible for your
                personal data.
              </p>
              <p>
                If you have any inquiries regarding this Privacy Policy,
                including any requests to exercise your legal rights, please be
                free to contact us using the contact information set out below.
              </p>

              <div className="bg-accent/50 rounded-lg p-6 mt-6">
                <h4 className="text-lg font-medium text-foreground mb-4">
                  Contact Information
                </h4>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>Full name of legal entity:</strong> KLAIM Holdings
                    Limited
                  </p>
                  <p>
                    <strong>Email address:</strong>{" "}
                    <a
                      href="mailto:dataprivacy@klaim.ai"
                      className="text-primary hover:underline"
                    >
                      dataprivacy@klaim.ai
                    </a>
                  </p>
                  <p>
                    <strong>Postal address:</strong> Dubai - JLT Cluster F -
                    Indigo Icon Tower 2705
                  </p>
                  <p>
                    <strong>Phone number:</strong>{" "}
                    <a
                      href="tel:+97148764096"
                      className="text-primary hover:underline"
                    >
                      +971 (0)4 876 4096
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Changes to the Privacy Policy and your obligation to inform us of
              changes
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                We keep our privacy policy under regular review. This version
                was last reviewed and updated on 6 July 2023.
              </p>
              <p>
                It is important that the personal data we hold about you is
                accurate and up-to-date. Therefore, please inform us promptly if
                your personal data changes during your relationship with us.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Third-Party links
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                On this website, you may encounter links to third-party
                websites, plug-ins, and applications. Clicking on those links or
                enabling such connections may allow third parties to collect or
                share data about you. We do not control these third-party
                websites and are not responsible for their privacy statements.
                When you leave our website, we recommend that you carefully read
                the privacy policy of every website you visit.
              </p>
            </div>
          </div>
        </section>

        {/* Data Collection Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            The data we collect about you
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-6">
            <p>
              Personal data, or personal information, refers to any information
              that can directly or indirectly identify an individual. It
              excludes data where the identity has been removed such as
              anonymous data.
            </p>
            <p>
              We may collect, use, store, and transfer various types of personal
              data about you which we have categorized as follows:
            </p>
          </div>

          <div className="grid gap-4 md:gap-6">
            {[
              {
                title: "Identity Data",
                description:
                  "includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth, and gender;",
              },
              {
                title: "Contact Data",
                description:
                  "includes billing address, delivery address, email address, and telephone numbers;",
              },
              {
                title: "Financial Data",
                description: "includes bank account and payment card details;",
              },
              {
                title: "Transaction Data",
                description:
                  "includes details about payments to and from you and other details of products and services you have purchased from us;",
              },
              {
                title: "Technical Data",
                description:
                  "includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website;",
              },
              {
                title: "Profile Data",
                description:
                  "includes your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses;",
              },
              {
                title: "Usage Data",
                description:
                  "includes information about how you use our website, products, and services; and",
              },
              {
                title: "Marketing and Communications Data",
                description:
                  "includes your preferences in receiving marketing from us and our third parties and your communication preferences.",
              },
            ].map((item, index) => (
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
            <p>
              We also collect, use and share Aggregated Data such as anonymized
              statistical or demographic information. Aggregated Data could be
              derived from your personal data but is not considered personal
              data under the law as this data will not directly or indirectly
              reveal your identity. For example, we may aggregate your Usage
              Data to determine the percentage of users accessing a specific
              website feature. However, if we combine or connect Aggregated Data
              with your personal data in a manner that can directly or
              indirectly identify you, we treat the combined data as personal
              data and handle it in accordance with this Privacy Policy.
            </p>
          </div>

          <div className="mb-8 mt-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              If you fail to provide Personal Data
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                In situations where we are required by law, or have a
                contractual obligation to collect personal data from you, and
                you fail to provide the requested data, we may be unable to
                fulfill the contract we have or are trying to enter into with
                you. For example, if we need necessary information to provide
                you with goods or services, we may have to cancel a product or
                service you have with us. However, if such a situation arises,
                we will notify you accordingly.
              </p>
            </div>
          </div>
        </section>

        {/* Data Collection Methods Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            How is your personal data collected?
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-6">
            <p>
              We use different methods to collect data from and about you
              including through:
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">
                Direct interactions
              </h4>
              <p className="text-base text-muted-foreground">
                You may provide us with your personal data by filling out forms
                or corresponding with us via post, phone, email, or other means
                of communication.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">
                Automated technologies or interactions
              </h4>
              <p className="text-base text-muted-foreground">
                When you interact with our website, we automatically collect
                Technical Data about your equipment, browsing activities
                actions, and patterns. We collect this personal data by using
                cookies, server logs, and other similar technologies.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">
                Third parties or publicly available sources
              </h4>
              <p className="text-base text-muted-foreground mb-4">
                We may receive personal data about you from various third
                parties as set out below.
              </p>
              <div className="space-y-3 ml-4">
                <div>
                  <h5 className="font-medium text-foreground">
                    Technical Data from the following parties:
                  </h5>
                  <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>Analytics providers;</li>
                    <li>Advertising networks; and</li>
                    <li>Search information providers.</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  Contact, Financial and Transaction Data from providers of
                  technical, payment, and delivery services.
                </p>
                <p className="text-sm text-muted-foreground">
                  Identity and Contact Data from data brokers or aggregators.
                </p>
                <p className="text-sm text-muted-foreground">
                  Identity and Contact Data from publicly available sources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Usage Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            How we use your Personal Data
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              We will only use your personal data when permitted by law. The
              most common circumstances under which we use your personal data
              are as follows:
            </p>
          </div>

          <div className="space-y-6 mt-6">
            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Contractual Necessity
              </h4>
              <p className="text-sm text-muted-foreground">
                We use your personnel data when it is necessary to fulfill the
                contract we are about to enter into or have entered into with
                you;
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Legitimate Interests
              </h4>
              <p className="text-sm text-muted-foreground">
                We may use your personnel data when it is necessary for our
                Legitimate Interests or the legitimate interests of a third
                party, provided that your interests and fundamental rights do
                not override those interests; or
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Legal Obligation
              </h4>
              <p className="text-sm text-muted-foreground">
                We may use your personnel data to comply with a legal
                obligation.
              </p>
            </div>
          </div>

          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed mt-6">
            <p>
              In general, we do not rely on your consent as a legal basis for
              processing your personal data. However, we will seek your consent
              before sending you direct marketing communications from third
              parties via email or text message. You have the right to withdraw
              consent for marketing purposes at any time by contacting us.
            </p>
          </div>

          <div className="mb-8 mt-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Purposes for which we will use your Personal Data
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                In the table, we have provided a description of how we intend to
                use your personal data along with the legal bases on which we
                rely for each purpose. We have also indicated our Legitimate
                Interests where applicable.
              </p>
              <p>
                Please note that we may process your personal data for more than
                one lawful ground, depending on the specific purpose for which
                we are using your data. If you require further details regarding
                the specific legal ground we rely on for processing your
                personal data when multiple grounds are mentioned in the table
                below, please reach out to us.
              </p>
            </div>
          </div>

          {/* Data Processing Table */}
          <div className="overflow-x-auto mt-8">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-accent/50">
                  <th className="border border-border p-4 text-left font-medium text-foreground">
                    Purpose/Activity
                  </th>
                  <th className="border border-border p-4 text-left font-medium text-foreground">
                    Type of data
                  </th>
                  <th className="border border-border p-4 text-left font-medium text-foreground">
                    Lawful basis for processing including basis of Legitimate
                    Interest
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To register you as a new customer.
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    Identity;
                    <br />
                    Contact;
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    Performance of a contract with you.
                  </td>
                </tr>

                <tr className="bg-accent/20">
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To process and deliver your order including:
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Manage payments, fees and charges;</li>
                      <li>Collect and recover money owed to us.</li>
                    </ul>
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    Identity;
                    <br />
                    Contact;
                    <br />
                    Financial;
                    <br />
                    Transaction;
                    <br />
                    Marketing and Communications.
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    Performance of a contract with you;
                    <br />
                    <br />
                    Necessary for our Legitimate Interests (to recover debts due
                    to us).
                  </td>
                </tr>

                <tr>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To manage our relationship with you which will include:
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>
                        Notifying you about changes to our terms or privacy
                        policy;
                      </li>
                      <li>Asking you to leave a review or take a survey.</li>
                    </ul>
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    Identity;
                    <br />
                    Contact;
                    <br />
                    Profile;
                    <br />
                    Marketing and Communications.
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    Performance of a contract with you;
                    <br />
                    <br />
                    Necessary to comply with a legal obligation;
                    <br />
                    <br />
                    Necessary for our Legitimate Interests (to keep our records
                    updated and to study how customers use our
                    products/services).
                  </td>
                </tr>

                <tr className="bg-accent/20">
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To enable you to participate in a prize draw, competition or
                    complete a survey.
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    Identity;
                    <br />
                    Contact;
                    <br />
                    Profile;
                    <br />
                    Usage;
                    <br />
                    Marketing and Communications.
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    Performance of a contract with you;
                    <br />
                    <br />
                    Necessary for our Legitimate Interests (to study how
                    customers use our products/services, to develop them and
                    grow our business).
                  </td>
                </tr>

                <tr>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To administer and protect our business and website
                    (including troubleshooting, data analysis, testing, system
                    maintenance, support, reporting and hosting of data).
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    Identity;
                    <br />
                    Contact;
                    <br />
                    Technical.
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    Necessary for our Legitimate Interests (for running our
                    business, provision of administration and IT services,
                    network security, to prevent fraud and in the context of a
                    business reorganization or group restructuring exercise);
                    <br />
                    <br />
                    Necessary to comply with a legal obligation.
                  </td>
                </tr>

                <tr className="bg-accent/20">
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To deliver relevant website content and advertisements to
                    you and measure or understand the effectiveness of the
                    advertising we serve to you.
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    Identity;
                    <br />
                    Contact;
                    <br />
                    Profile;
                    <br />
                    Usage;
                    <br />
                    Marketing and Communications;
                    <br />
                    Technical.
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    Necessary for our Legitimate Interests (to study how
                    customers use our products/services, to develop them, to
                    grow our business and to inform our marketing strategy).
                  </td>
                </tr>

                <tr>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To use data analytics to improve our website,
                    products/services, marketing, customer relationships and
                    experiences.
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    Technical;
                    <br />
                    Usage.
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    Necessary for our Legitimate Interests (to define types of
                    customers for our products and services, to keep our website
                    updated and relevant, to develop our business and to inform
                    our marketing strategy).
                  </td>
                </tr>

                <tr className="bg-accent/20">
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To make suggestions and recommendations to you about goods
                    or services that may be of interest to you.
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    Identity;
                    <br />
                    Contact;
                    <br />
                    Technical;
                    <br />
                    Usage;
                    <br />
                    Profile;
                    <br />
                    Marketing and Communications.
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    Necessary for our Legitimate Interests (to develop our
                    products/services and grow our business).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Marketing Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Marketing
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-6">
            <p>
              We strive to provide you with choices regarding certain personal
              data uses, particularly around marketing and advertising.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Promotional offers from us
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                In order to provide you with relevant products, services, and
                offers, We may analyse your Identity, Contact, Technical, Usage
                and Profile Data to understand your preferences and interests.
                This is how we determine which products, services and offers are
                likely to be of interest to you (referred to as marketing). You
                will receive marketing communications from us if you have
                requested information from us or purchased from us and you have
                not opted out of receiving that marketing.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Third-party marketing
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                We will obtain your explicit opt-in consent before sharing your
                personal data with any third party for marketing purposes.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Opting out
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                You may have the option that we or third parties cease sending
                you marketing messages at any time by contacting us or the third
                party directly.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Cookies
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                A cookie is a small text file which is placed on your device
                when you access our website. We use cookies and other online
                tracking devices to make your online experience more efficient
                and enjoyable. You may set your browser settings to reject all
                or some browser cookies, or to receive alerts when websites set
                or access cookies. If you disable or refuse cookies, please note
                that some parts of this website may become inaccessible or not
                function properly.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Change of purpose
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                We will only use your personal data for the purposes for which
                it was initially collected, unless we reasonably consider that
                we need to use it for another purpose that is compatible with
                the original purpose. If you wish to get an explanation as to
                how the processing for the new purpose is compatible with the
                original purpose, please contact us.
              </p>
              <p>
                If we need to use your personal data for an unrelated purpose,
                we will notify you and explain the legal basis which allows us
                to do so.
              </p>
              <p>
                Please note that we may process your personal data without your
                knowledge or consent, in compliance with the above rules, where
                it is required or permitted by law.
              </p>
            </div>
          </div>
        </section>

        {/* Disclosures Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Disclosures of your Personal Data
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              We may share your personal data with the following parties for the
              purposes outlined in the table set out in the &quot;Purposes for
              which we will use your Personal Data&quot; section:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Internal Third Parties;</li>
              <li>External Third Parties;</li>
              <li>
                third parties involved in the sale, transfer or merger of parts
                of our business or assets. If a change of control occurs in our
                business, the new owners may use your personal data in the same
                manner as described in this Privacy Policy;
              </li>
              <li>
                any other third party if we have a legal obligation to disclose
                or share your personal data, or to protect the rights, property
                and safety of the Company, our personnel or others; and
              </li>
              <li>
                any other third party when required by a court, regulator or
                government agency, such as complying with a search warrant or
                court order or applicable law or regulation.
              </li>
            </ul>
            <p>
              We require all third parties to respect the security of your
              personal data and to treat it in accordance with the law. We do
              not allow our third party service providers to use your personal
              data for their own purposes, and only permit them to process your
              personal data for specified purposes and all in accordance with
              our instructions.
            </p>
          </div>
        </section>

        {/* Cross-Border Transfers Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Cross-Border Transfers
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>We do not transfer your personal data outside the UAE</p>
            <p>
              Whenever we transfer your personal data out of the UAE, we ensure
              that it receives a similar degree of protection by ensuring at
              least one of the following safeguards is implemented:
            </p>
            <p>
              Please feel free to contact us if you would like further
              information about the specific mechanism we use when transferring
              your personal data out of the UAE.
            </p>
          </div>
        </section>

        {/* Data Security Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Data Security
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              We have implemented appropriate security measures to prevent your
              personal data from being accidentally lost, used, or accessed in
              an unauthorized way, altered, or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors, and other third parties who have a business need to
              know. They will only process your personal data on our
              instructions, and they are bound by confidentiality obligations.
            </p>
            <p>
              However, it is important to note that no transmission of data over
              the internet is guaranteed to be completely secure. It may be
              possible for unauthorized third parties to intercept or access
              transmissions or private communications unlawfully. While we
              strive to protect your personal data, we cannot ensure or warrant
              the security of any personal data you transmit to us. Any such
              transmission is done at your own risk. If you believe that the
              security of your interaction with us has been compromised, please
              contact us.
            </p>
            <p>
              We have established procedures to deal with any suspected personal
              data breaches, and where legally required, we will notify you and
              the applicable regulatory authority of such breaches.
            </p>
          </div>
        </section>

        {/* Data Retention Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Data Retention
          </h2>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              How long will my personal data be used?
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                We will only retain your personal data for as long as reasonably
                necessary to fulfill the purposes we collected it for, including
                satisfying any legal, regulatory, tax, accounting, or reporting
                requirements. We may retain your personal data for an extended
                period in the event of a complaint or if we reasonably believe
                there is a prospect of litigation in respect to our relationship
                with you.
              </p>
              <p>
                To determine the appropriate retention period for personal data,
                we consider the quantity, nature, and sensitivity of the
                personal data, the potential risk of harm associated with
                unauthorized use or disclosure of your personal data, the
                purposes for which we process your personal data and whether we
                can achieve those purposes through other means, and any
                applicable legal, regulatory, tax, accounting, or other
                requirements.
              </p>
              <p>
                In some circumstances, you can request the deletion of your
                data: see Your Legal Rights at section 9 below for further
                information.
              </p>
              <p>
                In some circumstances, we will anonymize your personal data (so
                that it can no longer be associated with you) for research or
                statistical purposes, in which case we may use this anonymized
                information indefinitely without further notice to you.
              </p>
              <p>
                Whilst we continue to process your personal data we ensure that
                it is treated in accordance with this Privacy Policy. Otherwise,
                we securely erase your information once it is no longer needed.
              </p>
            </div>
          </div>
        </section>

        {/* Your Legal Rights Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Your Legal Rights
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-8">
            <p>
              Under certain circumstances, you have rights under data protection
              laws in relation to your personal data. The various rights are not
              absolute and each is subject to certain exceptions or
              qualifications. We will grant your request only to the extent that
              it follows from our assessment of your request that we are allowed
              and required to do so under data protection laws. Nothing in this
              privacy policy is intended to provide you with rights beyond or in
              addition to your rights as a data subject under data protection
              laws. You have the right to:
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Request access to your personal data
              </h4>
              <p className="text-sm text-muted-foreground">
                (commonly known as a &quot;data subject access request&quot;).
                This enables you to receive a copy of the personal data we hold
                about you and to check that we are lawfully processing it;
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Request correction of the personal data
              </h4>
              <p className="text-sm text-muted-foreground">
                that we hold about you. This enables you to have any incomplete
                or inaccurate data we hold about you corrected, though we may
                need to verify the accuracy of the new data you provide to us;
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Request erasure of your personal data
              </h4>
              <p className="text-sm text-muted-foreground">
                This enables you to request the deletion or removal of your
                personal data where there is no good reason for us continuing to
                process it. You also have the right to ask us to delete or
                remove your personal data where you have successfully exercised
                your right to object to processing (see below), where we may
                have processed your information unlawfully or where we are
                required to erase your personal data to comply with local law.
                Please note that we may not always be able to comply with your
                request of erasure for specific legal reasons which will be
                notified to you, if applicable, at the time of your request;
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Object to processing of your personal data
              </h4>
              <p className="text-sm text-muted-foreground">
                where we are relying on a Legitimate Interest (or those of a
                third party) and there is something about your particular
                situation that leads you to object to the processing as it
                impacts your fundamental rights and freedoms. You also have the
                right to object when we process your personal data for direct
                marketing purposes. In some cases, we may demonstrate compelling
                legitimate grounds to process your information which override
                your rights and freedoms;
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Request restriction of processing
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                of your personal data. This enables you to ask us to suspend the
                processing of your personal data in the following scenarios:
              </p>
              <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                <li>
                  where you want us to establish the data&apos;s accuracy;
                </li>
                <li>
                  where our use of the data is unlawful but you do not want us
                  to erase it;
                </li>
                <li>
                  where you need us to hold the data even if we no longer
                  require it as you need it to establish, exercise or defend
                  legal claims; or
                </li>
                <li>
                  you have objected to our use of your data but we need to
                  verify whether we have overriding legitimate grounds to use
                  it;
                </li>
              </ul>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Request the transfer of your personal data
              </h4>
              <p className="text-sm text-muted-foreground">
                to yourself or to a third party. We will provide to you, or a
                third party you have chosen, your personal data in a structured,
                commonly used, machine-readable format. Note that this right
                only applies to automated information which you initially
                provided consent for us to use or where we used the information
                to perform a contract with you; and
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Withdraw consent at any time
              </h4>
              <p className="text-sm text-muted-foreground">
                when we are relying on consent to process your personal data.
                However, this will not affect the lawfulness of any processing
                carried out before you withdraw your consent. If you withdraw
                your consent, we may not be able to provide certain products or
                services to you. We will advise you if this is the case at the
                time you withdraw your consent.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              If you wish to exercise any of the rights set out above, please
              contact us.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              No fee usually required
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                You will not ordinarily have to pay a fee to access your
                personal data (or to exercise any of the other rights). However,
                we may charge a reasonable fee if your request is clearly
                unfounded, repetitive or excessive. Alternatively, we could
                refuse to comply with your request in these circumstances.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              What we may need from you
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                We may need to request specific information from you to help us
                confirm your identity and ensure your right to access your
                personal data (or to exercise any of your other rights). This is
                a security measure to ensure that personal data is not disclosed
                to any person who has no right to receive it. We may also
                contact you to ask you for further information in relation to
                your request to expedite our response.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Time limit to respond
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                We make every effort to respond to all legitimate requests
                within one month. Occasionally it could take us longer if your
                request is particularly complex or you have made a number of
                requests. In this case, we will notify you and keep you updated.
              </p>
            </div>
          </div>
        </section>

        {/* Glossary Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Glossary
          </h2>

          <div className="space-y-6">
            <div className="border border-border rounded-lg p-6">
              <h4 className="font-medium text-foreground mb-3">
                Legitimate Interest
              </h4>
              <p className="text-sm text-muted-foreground">
                means the interest of our business in conducting and managing
                our operations to enable us to provide you with the best
                service/product and the best and most secure experience. We make
                sure we consider and balance any potential impact on you (both
                positive and negative) and your rights before we process your
                personal data for our Legitimate Interests. We do not use your
                personal data for activities where our interests are overridden
                by the impact on you (unless we have your consent or are
                otherwise required or permitted to by law). If you would like
                further information on how we assess our Legitimate Interests
                against any potential impact on you in respect of specific
                activities, please contact us.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h4 className="font-medium text-foreground mb-3">
                Performance of Contract
              </h4>
              <p className="text-sm text-muted-foreground">
                means processing your data where it is necessary for the
                performance of a contract to which you are a party or to take
                steps at your request before entering into such a contract.
              </p>
            </div>

            <div className="border border-border rounded-lg p-6">
              <h4 className="font-medium text-foreground mb-3">
                Comply with a legal obligation
              </h4>
              <p className="text-sm text-muted-foreground">
                means processing your personal data where it is necessary for
                compliance with a legal obligation that we are subject to.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16 pt-8 border-t border-border">
          <div className="bg-accent/30 rounded-xl p-8 text-center">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Questions about this Privacy Policy?
            </h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this Privacy Policy or how we
              handle your personal data, please don&apos;t hesitate to contact
              us.
            </p>
            <a
              href="mailto:dataprivacy@klaim.ai"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Contact Data Privacy Team
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
