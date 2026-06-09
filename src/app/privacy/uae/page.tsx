import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy (UAE) - Klaim AI",
  description:
    "Privacy Policy for KLAIM in the United Arab Emirates — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyKsaPage() {
  return (
    <main className="container mx-auto py-12 px-6 max-w-6xl">
      <div className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-balance mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            Last updated: 3 March 2025
          </p>
        </header>

        {/* Table of Contents */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            CONTENTS
          </h2>
          <div className="space-y-2 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>1. Important information and who we are</p>
            <p>2. The types of personal data we collect about you</p>
            <p>3. How is your personal data collected?</p>
            <p>4. How we use your personal data</p>
            <p>5. Disclosures of your personal data</p>
            <p>6. International transfers</p>
            <p>7. Data security</p>
            <p>8. Data retention</p>
            <p>9. Your legal rights</p>
            <p>10. Contact details</p>
            <p>11. Complaints</p>
            <p>
              12. Changes to the privacy policy and your duty to inform us of
              changes
            </p>
            <p>13. Third-party links</p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            KLAIM.AI PRIVACY POLICY
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              This privacy policy sets out how KLAIM uses and protects your
              personal data.
            </p>
            <p>
              Klaim collects and uses your personal data to provide and improve
              its services. This includes information like your name, contact
              details, and how you use the website. Data is collected directly
              from you, through your interactions with the site, and from third
              parties.
            </p>
            <p>
              Your data is used for things like account setup, service delivery,
              customer support, marketing (with your consent), and legal
              compliance. Klaim may share your data with trusted partners and
              service providers but only for specific purposes.
            </p>
            <p>
              You have rights over your data, including access, correction,
              deletion, and objection to certain uses. Klaim takes data security
              seriously and will notify you promptly if a data breach occurs.
            </p>
            <p>
              For any privacy-related questions or requests, you can contact
              Klaim at{" "}
              <a
                href="mailto:dataprivacy@klaim.ai"
                className="text-primary hover:underline"
              >
                dataprivacy@klaim.ai
              </a>
            </p>
          </div>
        </section>

        {/* Important Information Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            1. Important information and who we are
          </h2>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Privacy policy
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                This privacy policy gives you information about how KLAIM
                collects and uses your personal data through your use of this
                website, including any data you may provide when you register
                with us.
              </p>
              <p>
                This website is not intended for children, anyone under the age
                of 21, and we do not knowingly collect data relating to
                children.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Controller
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                The KLAIM Group (the &quot;Group&quot;) is made up of different
                legal entities, details of which can be found here. This privacy
                policy is issued on behalf of the Group so when we mention
                &quot;Klaim&quot;, &quot;we&quot;, &quot;us&quot; or
                &quot;our&quot; in this privacy policy, we are referring to the
                relevant company in the Group responsible for processing your
                data. Klaim Technologies DMCC is the controller and responsible
                for this website.
              </p>
              <p>
                If you have any questions about this privacy policy, including
                any requests to exercise your legal rights (paragraph 9), please
                contact us using the information set out in the contact details
                section (paragraph 10).
              </p>
            </div>
          </div>
        </section>

        {/* Data Collection Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            2. The types of personal data we collect about you
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-6">
            <p>
              Personal data means any information about an individual from which
              that person can be identified.
            </p>
            <p>
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together as follows:
            </p>
          </div>

          <div className="grid gap-4 md:gap-6">
            {[
              {
                title: "Identity Data",
                description:
                  "includes first name, last name, any previous names, username or similar identifier, marital status, title, date of birth and gender.",
              },
              {
                title: "Contact Data",
                description:
                  "includes business address, email address and telephone numbers.",
              },
              {
                title: "Financial Data",
                description: "includes bank account and payment card details;",
              },
              {
                title: "Technical Data",
                description:
                  "includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, device ID and other technology on the devices you use to access this website.",
              },
              {
                title: "Transaction Data",
                description:
                  "includes details about payments to and from you and other details of products and services you have purchased from us;",
              },
              {
                title: "Profile Data",
                description:
                  "includes your username and password, preferences, and feedback.",
              },
              {
                title: "Usage Data",
                description:
                  "includes information about how you interact with and use our website and services.",
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
              We also collect, use and share aggregated data such as statistical
              or demographic data which is not personal data as it does not
              directly (or indirectly) reveal your identity. For example, we may
              aggregate individuals&apos; Usage Data to calculate the percentage
              of users accessing a specific website feature to analyse general
              trends in how users are interacting with our website to help
              improve the website and our service offering.
            </p>
          </div>
        </section>

        {/* Data Collection Methods Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            3. How is your personal data collected?
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
                Your interactions with us
              </h4>
              <p className="text-base text-muted-foreground mb-4">
                You may give us your personal data by filling in online forms or
                by corresponding with us by post, phone, email or otherwise.
                This includes personal data you provide when you:
              </p>
              <ul className="list-disc ml-6 space-y-2 text-sm text-muted-foreground">
                <li>apply for our services;</li>
                <li>create an account on our website;</li>
                <li>subscribe to our publications;</li>
                <li>request marketing to be sent to you;</li>
                <li>enter a survey; or</li>
                <li>give us feedback or contact us.</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">
                Automated technologies or interactions
              </h4>
              <p className="text-base text-muted-foreground">
                As you interact with our website, we will automatically collect
                Technical Data about your equipment, browsing actions and
                patterns. We collect this personal data by using cookies, server
                logs and other similar technologies
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">
                Cookies
              </h4>
              <p className="text-base text-muted-foreground">
                We use cookies and similar technologies to enhance your
                experience on our website. These tools help us understand how
                visitors interact with the site, improve performance,
                personalize content, and deliver relevant advertisements.
                Cookies also support essential functions such as login
                authentication and security.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">
                Third parties or publicly available sources
              </h4>
              <p className="text-base text-muted-foreground mb-4">
                We will receive personal data about you from various third
                parties and public sources as set out below:
              </p>
              <div className="space-y-3 ml-4">
                <div>
                  <h5 className="font-medium text-foreground">
                    Technical Data is collected from the following parties:
                  </h5>
                  <ul className="list-disc ml-6 mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>analytics providers;</li>
                    <li>advertising networks; and</li>
                    <li>search information providers.</li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  Contact, Financial and Transaction Data is collected from
                  providers of technical, payment and delivery services.
                </p>
                <p className="text-sm text-muted-foreground">
                  Identity and Contact Data is collected from data brokers.
                </p>
                <p className="text-sm text-muted-foreground">
                  Identity and Contact Data is collected from publicly available
                  sources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Usage Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            4. How we use your personal data
          </h2>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Legal basis
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                The law requires us to have a legal basis for collecting and
                using your personal data. We rely on one or more of the
                following legal bases:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Performance of a contract with you:</strong> Where we
                  need to perform the contract we are about to enter or have
                  entered with you.
                </li>
                <li>
                  <strong>Legitimate interests:</strong> We may use your
                  personal data where it is necessary to conduct our business
                  and pursue our legitimate interests, for example to prevent
                  fraud and enable us to give you the best and most secure
                  customer experience. We make sure we consider and balance any
                  potential impact on you and your rights (both positive and
                  negative) before we process your personal data for our
                  legitimate interests. We do not use your personal data for
                  activities where our interests are overridden by the impact on
                  you (unless we have your consent or are otherwise required or
                  permitted to by law).
                </li>
                <li>
                  <strong>Legal obligation:</strong> We may use your personal
                  data where it is necessary for compliance with a legal
                  obligation that we are subject to. We will identify the
                  relevant legal obligation when we rely on this legal basis.
                </li>
                <li>
                  <strong>Consent:</strong> We rely on consent only where we
                  have obtained your active agreement to use your personal data
                  for a specified purpose, for example if you subscribe to an
                  email newsletter.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Purposes for which we will use your personal data
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                We have set out below, in a table format, a description of all
                the ways we plan to use the various categories of your personal
                data, and which of the legal bases we rely on to do so. We have
                also identified what our legitimate interests are where
                appropriate.
              </p>
            </div>
          </div>

          {/* Data Processing Table */}
          <div className="overflow-x-auto mt-8">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-accent/50">
                  <th className="border border-border p-4 text-left font-medium text-foreground">
                    Purpose/Use
                  </th>
                  <th className="border border-border p-4 text-left font-medium text-foreground">
                    Type of data
                  </th>
                  <th className="border border-border p-4 text-left font-medium text-foreground">
                    Legal basis
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To register you as a new customer
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    (a) Identity
                    <br />
                    (b) Contact
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    Performance of a contract with you
                  </td>
                </tr>

                <tr className="bg-accent/20">
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To process and deliver your order including:
                    <br />
                    (a) Manage payments, fees and charges
                    <br />
                    (b) Collect and recover money owed to us
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    (a) Identity
                    <br />
                    (b) Contact
                    <br />
                    (c) Financial
                    <br />
                    (d) Transaction
                    <br />
                    (e) Marketing and Communications
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    (a) Performance of a contract with you
                    <br />
                    (b) Necessary for our legitimate interests (to recover debts
                    due to us)
                  </td>
                </tr>

                <tr>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To manage our relationship with you which will include:
                    <br />
                    (a) Notifying you about changes to our terms or privacy
                    policy
                    <br />
                    (b) Dealing with your requests, complaints and queries
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    (a) Identity
                    <br />
                    (b) Contact
                    <br />
                    (c) Profile
                    <br />
                    (d) Marketing and Communications
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    (a) Performance of a contract with you
                    <br />
                    (b) Necessary to comply with a legal obligation
                    <br />
                    (c) Necessary for our legitimate interests (to keep our
                    records updated and manage our relationship with you
                  </td>
                </tr>

                <tr className="bg-accent/20">
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To administer and protect our business and this website
                    (including troubleshooting, data analysis, testing, system
                    maintenance, support, reporting and hosting of data)
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    (a) Identity
                    <br />
                    (b) Contact
                    <br />
                    (c) Technical
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    (a) Necessary for our legitimate interests (for running our
                    business, provision of administration and IT services,
                    network security, to prevent fraud and in the context of a
                    business reorganisation or group restructuring exercise)
                    <br />
                    (b) Necessary to comply with a legal obligation
                  </td>
                </tr>

                <tr>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To deliver relevant website content and online
                    advertisements to you and measure or understand the
                    effectiveness of the advertising we serve to you
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    (a) Identity
                    <br />
                    (b) Contact
                    <br />
                    (c) Profile
                    <br />
                    (d) Usage
                    <br />
                    (e) Marketing and Communications
                    <br />
                    (f) Technical
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    Necessary for our legitimate interests (to study how
                    customers use our products/services, to develop them, to
                    grow our business and to inform our marketing strategy)
                  </td>
                </tr>

                <tr className="bg-accent/20">
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To use data analytics to improve our website,
                    products/services, customer relationships and experiences
                    and to measure the effectiveness of our communications and
                    marketing
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    (a) Technical
                    <br />
                    (b) Usage
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    Necessary for our legitimate interests (to define types of
                    customers for our products and services, to keep our website
                    updated and relevant, to develop our business and to inform
                    our marketing strategy)
                  </td>
                </tr>

                <tr>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    To send you relevant marketing communications and make
                    personalised suggestions and recommendations to you about
                    goods or services that may be of interest to you based on
                    your Profile Data
                  </td>
                  <td className="border border-border p-4 text-sm text-primary">
                    (a) Identity
                    <br />
                    (b) Contact
                    <br />
                    (c) Technical
                    <br />
                    (d) Usage
                    <br />
                    (e) Profile
                    <br />
                    (f) Marketing and Communications
                  </td>
                  <td className="border border-border p-4 text-sm text-muted-foreground">
                    Necessary for our legitimate interests (to carry out direct
                    marketing, develop our products/services and grow our
                    business) OR Consent, having obtained your prior consent to
                    receiving direct marketing communications
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">
                Direct marketing
              </h4>
              <p className="text-base text-muted-foreground">
                During the process on our website when your personal data is
                collected, you will be asked to indicate your preferences for
                receiving direct marketing communications from Klaim.
              </p>
              <p className="text-base text-muted-foreground mt-2">
                We may also analyse your Identity, Contact, Technical, Usage and
                Profile Data to form a view which products, services and offers
                may be of interest to you so that we can then send you relevant
                marketing communications.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">
                Third-party marketing
              </h4>
              <p className="text-base text-muted-foreground">
                We will get your express consent before we share your personal
                data with any third party for their own direct marketing
                purposes.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium text-foreground mb-3">
                Opting out of marketing
              </h4>
              <p className="text-base text-muted-foreground">
                You can ask to stop sending you marketing communications at any
                time by following the opt-out links within any marketing
                communication sent to you or by contacting us{" "}
                <a
                  href="https://klaim.ai/#contact"
                  className="text-primary hover:underline"
                >
                  Klaim – Connect with KLAIM
                </a>
              </p>
              <p className="text-base text-muted-foreground mt-2">
                If you opt out of receiving marketing communications, you will
                still receive service-related communications that are essential
                for administrative or customer service purposes.
              </p>
            </div>
          </div>
        </section>

        {/* Disclosures Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            5. Disclosures of your personal data
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              We may share your personal data within the Klaim Group or to third
              parties to whom we may choose to sell, transfer or merge parts of
              our business or our assets. Alternatively, we may seek to acquire
              other businesses or merge with them. If a change happens to our
              business, then the new owners may use your personal data in the
              same way as set out in this privacy policy.
            </p>
            <p>
              We require all third parties to respect the security of your
              personal data and to treat it in accordance with the law. We do
              not allow our third-party service providers to use your personal
              data for their own purposes and only permit them to process your
              personal data for specified purposes and in accordance with our
              instructions.
            </p>
            <p>
              Klaim is committed to ethical data practices. We will never use
              your personal data to exploit, manipulate, or harm you in any way.
              All data collected is processed lawfully, fairly, and
              transparently, and solely for legitimate business purposes that
              respect your rights.
            </p>
          </div>
        </section>

        {/* International Transfers Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            6. International transfers
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              We may share your personal data within the KLAIM Group. This will
              involve transferring your data (if you are a customer from Oman or
              the Kingdom of Saudi Arabia) to our offices in the United Arab
              Emirates (&quot;UAE&quot;).
            </p>
            <p>
              Whenever we transfer your personal data to our offices in the UAE,
              we always ensure that the minimum degree of protection required by
              the General Data Protection Regulation (&quot;GDPR&quot;) and ADGM
              Data Protection Regulations 2021 is afforded to it.
            </p>
          </div>
        </section>

        {/* Data Security Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            7. Data security
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorised way, altered or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors and other third parties who have a business need to
              know. They will only process your personal data on our
              instructions, and they are subject to a duty of confidentiality.
            </p>
            <p>
              Klaim has implemented procedures to detect, investigate, and
              respond to personal data breaches in accordance with applicable
              data protection laws, including the EU GDPR and ADGM DPR 2021.
            </p>
            <p>
              In the event of a personal data breach that is likely to result in
              a high risk to your rights and freedoms, we will notify you
              without undue delay and, where feasible, within 72 hours of
              becoming aware of the breach. Notification will be made via:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Email to the address associated with your account;</li>
              <li>
                Public notice on our website if direct contact is not possible;
              </li>
              <li>
                Other appropriate communication channels, depending on the
                nature and severity of the breach.
              </li>
            </ul>
            <p>The notification will include:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>A description of the nature of the breach;</li>
              <li>
                The categories and approximate number of individuals and records
                affected;
              </li>
              <li>The likely consequences of the breach;</li>
              <li>
                Measures taken or proposed to address the breach and mitigate
                its impact;
              </li>
              <li>
                Contact details for further information, including how to reach
                our Data Protection Officer at{" "}
                <a
                  href="mailto:dataprivacy@klaim.ai"
                  className="text-primary hover:underline"
                >
                  dataprivacy@klaim.ai
                </a>
                .
              </li>
            </ul>
            <p>
              We will also notify the relevant supervisory authority, such as
              the Commissioner of Data Protection in ADGM, within the required
              legal timeframe.
            </p>
          </div>
        </section>

        {/* Data Retention Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            8. Data retention
          </h2>

          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              How long will you use my personal data for?
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                We will only retain your personal data for as long as reasonably
                necessary to fulfil the purposes we collected it for, including
                for the purposes of satisfying any legal, regulatory, tax,
                accounting or reporting requirements. We may retain your
                personal data for a longer period in the event of a complaint or
                if we reasonably believe there is a prospect of litigation in
                respect to our relationship with you.
              </p>
              <p>
                To determine the appropriate retention period for personal data,
                we consider the amount, nature and sensitivity of the personal
                data, the potential risk of harm from unauthorised use or
                disclosure of your personal data, the purposes for which we
                process your personal data and whether we can achieve those
                purposes through other means, and the applicable legal,
                regulatory, tax, accounting or other requirements.
              </p>
              <p>
                In some circumstances we will anonymise your personal data (so
                that it can no longer be associated with you) for research or
                statistical purposes, in which case we may use this information
                indefinitely without further notice to you.
              </p>
            </div>
          </div>
        </section>

        {/* Your Legal Rights Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            9. Your legal rights
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed mb-8">
            <p>
              You have a number of rights under data protection laws in relation
              to your personal data.
            </p>
            <p>You have the right to:</p>
          </div>

          <div className="space-y-6">
            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Request access to your personal data
              </h4>
              <p className="text-sm text-muted-foreground">
                (commonly known as a &quot;subject access request&quot;). This
                enables you to receive a copy of the personal data we hold about
                you and to check that we are lawfully processing it.
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Request correction of the personal data
              </h4>
              <p className="text-sm text-muted-foreground">
                that we hold about you. This enables you to have any incomplete
                or inaccurate data we hold about you corrected, though we may
                need to verify the accuracy of the new data you provide to us.
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Request erasure of your personal data
              </h4>
              <p className="text-sm text-muted-foreground">
                in certain circumstances. This enables you to ask us to delete
                or remove personal data where there is no good reason for us
                continuing to process it. You also have the right to ask us to
                delete or remove your personal data where you have successfully
                exercised your right to object to processing (see below), where
                we may have processed your information unlawfully or where we
                are required to erase your personal data to comply with local
                law. Note, however, that we may not always be able to comply
                with your request of erasure for specific legal reasons which
                will be notified to you, if applicable, at the time of your
                request.
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Object to processing of your personal data
              </h4>
              <p className="text-sm text-muted-foreground">
                where we are relying on a legitimate interest (or those of a
                third party) as the legal basis for that particular use of your
                data (including carrying out profiling based on our legitimate
                interests). In some cases, we may demonstrate that we have
                compelling legitimate grounds to process your information which
                override your right to object.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                You also have the absolute right to object any time to the
                processing of your personal data for direct marketing purposes
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Request the transfer of your personal data
              </h4>
              <p className="text-sm text-muted-foreground">
                to you or to a third party. We will provide to you, or a third
                party you have chosen, your personal data in a structured,
                commonly used, machine-readable format. Note that this right
                only applies to automated information which you initially
                provided consent for us to use or where we used the information
                to perform a contract with you.
              </p>
            </div>

            <div className="border border-border rounded-lg p-4">
              <h4 className="font-medium text-foreground mb-2">
                Request restriction of processing
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                of your personal data. This enables you to ask us to suspend the
                processing of your personal data in one of the following
                scenarios:
              </p>
              <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
                <li>If you want us to establish the data&apos;s accuracy;</li>
                <li>
                  Where our use of the data is unlawful but you do not want us
                  to erase it;
                </li>
                <li>
                  Where you need us to hold the data even if we no longer
                  require it as you need it to establish, exercise or defend
                  legal claims; or
                </li>
                <li>
                  You have objected to our use of your data but we need to
                  verify whether we have overriding legitimate grounds to use
                  it.
                </li>
              </ul>
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
                You will not have to pay a fee to access your personal data (or
                to exercise any of the other rights). However, we may charge a
                reasonable fee if your request is clearly unfounded, repetitive
                or excessive. Alternatively, we could refuse to comply with your
                request in these circumstances.
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
                your request to speed up our response.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Time limit to respond
            </h3>
            <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              <p>
                We try to respond to all legitimate requests within one month.
                Occasionally it could take us longer than a month if your
                request is particularly complex or you have made a number of
                requests. In this case, we will notify you and keep you updated.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            10. Contact details
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              If you have any questions about this privacy policy or about the
              use of your personal data or you want to exercise your privacy
              rights, please contact us in the following ways:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Email address:{" "}
                <a
                  href="mailto:hello@klaim.ai"
                  className="text-primary hover:underline"
                >
                  hello@klaim.ai
                </a>
              </li>
              <li>
                Postal address: Klaim Kapital Technologies Limited, Attn: Data
                Protection Officer and Legal, DD-14-124-026 and DD-14-124-032,
                Level 14, WeWork Hub71, Al Khatem Tower, Abu Dhabi Global Market
                Square, Al Maryah Island, Abu Dhabi, United Arab Emirates
              </li>
              <li>
                Telephone number:{" "}
                <a
                  href="tel:+97148764096"
                  className="text-primary hover:underline"
                >
                  +971 4 876 4096
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Complaints Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            11. Complaints
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              You have the right to make a complaint at any time to the UAE Data
              Office, the UAE regulator for data protection issues. We would,
              however, appreciate the chance to deal with your concerns before
              you approach the relevant government entities so, please contact
              us in the first instance.
            </p>
          </div>
        </section>

        {/* Changes Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            12. Changes to the privacy policy and your duty to inform us of
            changes
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              We keep our privacy policy under regular review. This version was
              last updated on 3 March 2025.
            </p>
            <p>
              It is important that the personal data we hold about you is
              accurate and current. Please keep us informed if your personal
              data changes during your relationship with us, for example a new
              address or email address.
            </p>
          </div>
        </section>

        {/* Third-party Links Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            13. Third-party links
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              This website may include links to third-party websites, plug-ins
              and applications. Clicking on those links or enabling those
              connections may allow third parties to collect or share data about
              you. We do not control these third-party websites and are not
              responsible for their privacy statements. When you leave our
              website, we encourage you to read the privacy policy of every
              website you visit.
            </p>
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
