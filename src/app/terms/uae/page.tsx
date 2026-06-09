import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service (UAE) - Klaim AI",
  description:
    "Terms of Service for KLAIM in the United Arab Emirates — rules for using klaim.ai.",
};

export default function TermsOfServiceUaePage() {
  return (
    <main className="container mx-auto py-12 px-6 max-w-6xl">
      <div className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-balance mb-6">
            Terms of Service
          </h1>
          <p className="text-lg text-muted-foreground font-medium leading-relaxed">
            Last updated: 3 March 2025
          </p>
        </header>

        {/* Important Notice */}
        <section className="mb-12">
          <div className="bg-accent/50 rounded-lg p-6 mb-8">
            <p className="text-lg font-medium text-foreground text-center">
              PLEASE READ THESE TERMS OF SERVICE CAREFULLY BEFORE USING THIS
              SITE
            </p>
          </div>
        </section>

        {/* What&apos;s in these terms Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            What&apos;s in these terms?
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              These terms tell you the rules for using our website klaim.ai (our
              site).
            </p>
          </div>
        </section>

        {/* Definitions Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Definitions
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              In these Terms of Service, the following terms shall have the
              meanings set out below:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                <strong>&quot;Site&quot;</strong> refers to the website located
                at klaim.ai, including all content, services, and functionality
                made available through it.
              </li>
              <li>
                <strong>&quot;Klaim&quot;</strong>,{" "}
                <strong>&quot;We&quot;</strong>, <strong>&quot;Us&quot;</strong>
                , or <strong>&quot;Our&quot;</strong> refers to Klaim Kapital
                Technologies Limited and Klaim Holdings Limited, collectively
                referred to as the Klaim Group.
              </li>
              <li>
                <strong>&quot;User&quot;</strong>,{" "}
                <strong>&quot;You&quot;</strong>, or{" "}
                <strong>&quot;Your&quot;</strong> refers to any individual or
                entity accessing or using the Site.
              </li>
              <li>
                <strong>&quot;Terms&quot;</strong> means these Terms of Service,
                including any referenced policies such as the Privacy Policy and
                Cookie Policy.
              </li>
              <li>
                <strong>&quot;Permitted Territory&quot;</strong> refers to
                Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, the United Arab
                Emirates, Tunisia, Algeria, Morocco, Egypt, and Turkey.
              </li>
              <li>
                <strong>&quot;Content&quot;</strong> means all text, graphics,
                images, software, audio, video, and other materials available on
                or through the Site.
              </li>
              <li>
                <strong>&quot;Account&quot;</strong> refers to a registered user
                profile created to access certain features or services on the
                Site.
              </li>
              <li>
                <strong>&quot;Service&quot;</strong> refers to any
                functionality, tools, or offerings provided through the Site.
              </li>
              <li>
                <strong>&quot;Intellectual Property&quot;</strong> refers to all
                copyrights, trademarks, patents, trade secrets, and other
                proprietary rights associated with the Site and its content.
              </li>
            </ul>
          </div>
        </section>

        {/* Who we are Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Who we are and how to contact us
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              Klaim.ai is a site operated by KLAIM KAPITAL TECHNOLOGIES LIMITED,
              a limited liability company incorporated in Abu Dhabi Global
              Markets with license number 000006006, having its registered
              office at DD-14-124-014, Level 14, Wework Hub71, Al Khatem Tower,
              Abu Dhabi Global Market Square, Al Maryah Island, Abu Dhabi,
              United Arab Emirates (&quot;KKTL&quot;)
            </p>
            <p>
              KKTL is a wholly owned subsidiary of KLAIM HOLDINGS LIMITED, a
              private company limited by shares incorporated under the laws of
              Abu Dhabi Global Market with company number 000004976 and whose
              registered office is at DD-15-134-004 - 007, Level 15, Wework
              Hub71, Al Khatem Tower, Abu Dhabi Global Market Square, Al Maryah
              Island, Abu Dhabi, United Arab Emirates (&quot;KHL&quot;).
            </p>
            <p>
              (KKTL and KHL may be referred to collectively as &quot;Klaim
              Group&quot; or &quot;We&quot;).
            </p>
            <p>
              You may reach us at the following emails and telephone numbers
              listed here:{" "}
              <a
                href="https://klaim.ai/#contact"
                className="text-primary hover:underline"
              >
                Klaim – Connect with KLAIM
              </a>
            </p>
          </div>
        </section>

        {/* Accept terms Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            By using our site, you accept these terms
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              By using our site, you confirm that you accept these terms of
              service and that you agree to comply with them. If you do not
              agree to these terms, you must not use our site.
            </p>
          </div>
        </section>

        {/* Other terms Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            There are other terms that may apply to you
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              These terms of service refer to the following additional terms,
              which also apply to your use of our site:
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Our Privacy Policy, which explains how we collect, use and store
                your personal data.{" "}
                <a href="/privacy/uae" className="text-primary hover:underline">
                  Website Privacy Policy
                </a>
              </li>
              <li>
                Our Cookie Policy, which sets out information about the cookies
                on our site.
              </li>
            </ul>
          </div>
        </section>

        {/* Changes to terms Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            We may make changes to these terms
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              We amend these terms from time to time. Every time you wish to use
              our site, please check these terms to ensure you understand the
              terms that apply at that time. These terms were most recently
              updated on 3 March 2025.
            </p>
          </div>
        </section>

        {/* Changes to site Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            We may make changes to our site
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              We may update and change our site from time to time to reflect
              changes to our services, our users&apos; needs and our business
              priorities.
            </p>
          </div>
        </section>

        {/* Suspend or withdraw site Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            We may suspend or withdraw our site
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>Our site is made available free of charge.</p>
            <p>
              We do not guarantee that our site, or any content on it, will
              always be available or be uninterrupted. We may suspend or
              withdraw or restrict the availability of all or any part of our
              site for business and operational reasons.
            </p>
            <p>
              As the user, you are responsible for ensuring that all persons who
              access our site through your internet connection are aware of
              these terms of service and other applicable terms of service, and
              that they comply with them.
            </p>
          </div>
        </section>

        {/* Transfer agreement Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            We may transfer this agreement to someone else
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              We may transfer our rights and obligations under these terms to
              another organisation. We will always tell you in writing if this
              happens and we will ensure that the transfer will not affect your
              rights under the contract.
            </p>
          </div>
        </section>

        {/* Geographic restrictions Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Our site is only for users in the Middle East (Bahrain, Kuwait,
            Oman, Qatar, Saudi Arabia, and the United Arab Emirates), Tunisia,
            Algeria, Morocco, Egypt, and Turkey.
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              Our site is directed to people residing in the Middle East
              (Bahrain, Kuwait, Oman, Qatar, Saudi Arabia, and the United Arab
              Emirates), Tunisia, Algeria, Morocco, Egypt, and Turkey. We do not
              represent that content available on or through our site is
              appropriate for use or available in other locations.
            </p>
          </div>
        </section>

        {/* Account security Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            You must keep your account details safe
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              If you choose, or you are provided with, a user identification
              code, password or any other piece of information as part of our
              security procedures, you must treat such information as
              confidential. You must not disclose it to any third party.
            </p>
            <p>
              We have the right to disable any user identification code or
              password, whether chosen by you or allocated by us, at any time,
              if in our reasonable opinion you have failed to comply with any of
              the provisions of these terms of service.
            </p>
            <p>
              If you know or suspect that anyone other than you knows your user
              identification code or password, you must promptly notify{" "}
              <a
                href="https://klaim.ai/#contact"
                className="text-primary hover:underline"
              >
                Klaim – Connect with KLAIM
              </a>
            </p>
          </div>
        </section>

        {/* Intellectual property Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            How you may use material on our site
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              We are the owner or the licensee of all intellectual property
              rights on our site, and in the material published on it. Those
              works are protected by copyright laws and treaties around the
              world. All such rights are reserved.
            </p>
            <p>
              You may print off one copy, and may download extracts, of any
              page(s) from our site for your personal use and you may draw the
              attention of others within your organisation to content posted on
              our site.
            </p>
            <p>
              You must not modify the paper or digital copies of any materials
              you have printed off or downloaded in any way, and you must not
              use any illustrations, photographs, video or audio sequences or
              any graphics separately from any accompanying text.
            </p>
            <p>
              Our status (and that of any identified contributors) as the
              authors of content on our site must always be acknowledged (except
              where the content is user-generated).
            </p>
            <p>
              You must not use any part of the content on our site for
              commercial purposes without obtaining a license to do so from us
              or our licensors.
            </p>
            <p>
              If you print off, copy, download, share or repost any part of our
              site in breach of these terms of service, your right to use our
              site will cease immediately and you must, at our option, return or
              destroy any copies of the materials you have made (except that you
              are permitted to print off a copy of these terms of service).
            </p>
          </div>
        </section>

        {/* No text or data mining Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            No text or data mining, or web scraping
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              You shall not conduct, facilitate, authorise or permit any text or
              data mining or web scraping in relation to our site or any
              services provided via, or in relation to, our site for any
              purpose, including the development, training, fine-tuning or
              validation of AI systems or models. This includes using (or
              permitting, authorising or attempting the use of):
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                Any &quot;robot&quot;, &quot;bot&quot;, &quot;spider&quot;,
                &quot;scraper&quot; or other automated device, program, tool,
                algorithm, code, process or methodology to access, obtain, copy,
                monitor or republish any portion of our site or any data,
                content, information or services accessed via the same.
              </li>
              <li>
                Any automated analytical technique aimed at analysing text and
                data in digital form to generate information or develop, train,
                fine-tune or validate AI systems or models which includes but is
                not limited to patterns, trends and correlations.
              </li>
            </ul>
            <p>
              The provisions in this clause should be treated as an express
              reservation of our rights in this regard.
            </p>
            <p>
              You shall not use, and we do not consent to the use of, our site,
              or any data published by, or contained in, or accessible via, our
              site or any services provided via, or in relation to, our site for
              the purposes of developing, training, fine-tuning or validating
              any AI system or model or for any other purposes not explicitly
              set out in this document.
            </p>
            <p>
              This clause will not apply insofar as (but only to the extent
              that) we are unable to exclude or limit text or data mining or web
              scraping activity by contract under the laws which are applicable
              to us.
            </p>
            <p>
              Our site, its content and any services provided in relation to the
              same is only targeted to, and intended for use by, individuals
              located in Middle East (Bahrain, Kuwait, Oman, Qatar, Saudi
              Arabia, and the United Arab Emirates), Tunisia, Algeria, Morocco,
              Egypt, and Turkey (each, a Permitted Territory). By continuing to
              access, view or make use of our site and any related content and
              services, you hereby warrant and represent to us that you are
              located in a Permitted Territory.
            </p>
          </div>
        </section>

        {/* Linking rules Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Rules about linking to our site
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              You may link to our home page, provided you do so in a way that is
              fair and legal and does not damage our reputation or take
              advantage of it.
            </p>
            <p>
              You must not establish a link in such a way as to suggest any form
              of association, approval or endorsement on our part where none
              exists.
            </p>
            <p>
              You must not establish a link to our site on any website that is
              not owned by you.
            </p>
            <p>
              Our site must not be framed on any other site, nor may you create
              a link to any part of our site other than the home page.
            </p>
            <p>
              We reserve the right to withdraw linking permission without
              notice.
            </p>
            <p>
              Klaim reserves the right to suspend or terminate your account at
              any time, without prior notice, if we determine that you have
              violated these Terms of Service, engaged in fraudulent or abusive
              behavior, or used the site in a manner that may harm Klaim, its
              users, or its partners. Additionally, accounts that remain
              inactive for an extended period may be subject to suspension or
              deletion in accordance with our data retention policies.
            </p>
            <p>
              If you wish to link to or make any use of content on our site
              other than that set out above, please contact{" "}
              <a
                href="mailto:hello@klaim.ai"
                className="text-primary hover:underline"
              >
                hello@klaim.ai
              </a>
            </p>
          </div>
        </section>

        {/* Trade marks Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Our trademarks are registered
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              &quot;Klaim&quot; is a trademark of Klaim Holdings Limited. You
              are not permitted to use it without our approval.
            </p>
          </div>
        </section>

        {/* Do not rely on information Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Do not rely on information on this site
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              The content on our site is provided for general information only.
              It is not intended to amount to advice on which you should rely.
              You must obtain professional or specialist advice before taking,
              or refraining from, any action on the basis of the content on our
              site.
            </p>
            <p>
              Although we make reasonable efforts to update the information on
              our site, we make no representations, warranties or guarantees,
              whether express or implied, that the content on our site is
              accurate, complete or up to date.
            </p>
          </div>
        </section>

        {/* Third party links Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            We are not responsible for websites we link to
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              Where our site contains links to other sites and resources
              provided by third parties, these links are provided for your
              information only. Such links should not be interpreted as approval
              by us of those linked websites or information you may obtain from
              them.
            </p>
            <p>
              We have no control over the contents of those sites or resources.
            </p>
          </div>
        </section>

        {/* Viruses Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            We are not responsible for viruses
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              We do not guarantee that our site will be secure or free from bugs
              or viruses.
            </p>
            <p>
              You are responsible for configuring your information technology,
              computer programs and platform to access our site. You should use
              your own virus protection software.
            </p>
          </div>
        </section>

        {/* Must not introduce viruses Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            You must not introduce viruses
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              You must not misuse our site by knowingly introducing viruses,
              trojans, worms, logic bombs or other material that is malicious or
              technologically harmful, or otherwise harmfully interacting with
              our site or any part of it. You must not attempt to gain
              unauthorised access to our site, the server on which our site is
              stored or any server, computer or database connected to our site,
              or any other equipment or network connected with our site. You
              must not interfere with, damage or disrupt any software used in
              the provision of our site or any equipment or network or software
              owned or used by any third party on which this site relies in any
              way. You must not attack our site via a denial-of-service attack
              or a distributed denial-of-service attack. We will report any such
              breach to the relevant law enforcement authorities, and we will
              co-operate with those authorities by disclosing your identity to
              them. In the event of such a breach, your right to use our site
              will cease immediately.
            </p>
          </div>
        </section>

        {/* Liability Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Our responsibility for loss or damage suffered by you
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>Whether you are a consumer or a business user:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                We do not exclude or limit in any way our liability to you where
                it would be unlawful to do so. This includes liability for death
                or personal injury caused by our negligence or the negligence of
                our employees, agents or subcontractors and for fraud or
                fraudulent misrepresentation.
              </li>
            </ul>
            <p>If you are a business user:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>
                We exclude all implied conditions, warranties, representations
                or other terms that may apply to our site or any content on it.
              </li>
              <li>
                We will not be liable to you for any loss or damage, whether in
                contract, tort (including negligence), breach of statutory duty,
                or otherwise, even if foreseeable, arising under or in
                connection with:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>use of, or inability to use, our site; or</li>
                  <li>
                    use of or reliance on any content displayed on our site.
                  </li>
                </ul>
              </li>
              <li>
                In particular, we will not be liable for:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>loss of profits, sales, business, or revenue;</li>
                  <li>business interruption;</li>
                  <li>loss of anticipated savings;</li>
                  <li>
                    loss of business opportunity, goodwill or reputation; or
                  </li>
                  <li>any indirect or consequential loss or damage.</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Personal information Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            How we may use your personal information
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              We will only use your personal information as set out in our
              Privacy Policy.{" "}
              <a href="/privacy/uae" className="text-primary hover:underline">
                Website Privacy Policy
              </a>
            </p>
            <p>
              We retain personal data for a period of [INSERT RETENTION PERIOD],
              or as long as necessary to fulfill the purposes for which it was
              collected, including to comply with legal, regulatory, or
              operational requirements.
            </p>
            <p>Your data may be deleted or anonymized earlier if:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>It is no longer needed for the stated purposes;</li>
              <li>
                You request its deletion and we are legally permitted to do so;
              </li>
              <li>It reaches the end of its retention period;</li>
              <li>
                We are required to delete it under applicable law or internal
                policy.
              </li>
            </ul>
            <p>
              Specific retention timelines and criteria may vary depending on
              the type of data and the context in which it was collected. For
              more details, please refer to our Privacy Policy or contact us at{" "}
              <a
                href="mailto:hello@klaim.ai"
                className="text-primary hover:underline"
              >
                hello@klaim.ai
              </a>
            </p>
          </div>
        </section>

        {/* Governing law Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Which country&apos;s laws apply to any disputes?
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              These terms of service, their subject matter and their formation
              (and any non-contractual disputes or claims) are governed by ADGM
              law. We both agree to the exclusive jurisdiction of the courts of
              ADGM.
            </p>
          </div>
        </section>

        {/* Service warranty Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            Service Warranty
          </h2>
          <div className="space-y-4 text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            <p>
              The Service is provided &quot;as is&quot; and &quot;as
              available,&quot; without any warranties. To the fullest extent
              allowed by law, Klaim and its affiliates disclaim all express or
              implied warranties, including those of merchantability, fitness
              for a particular purpose, and non-infringement. We do not
              guarantee that the Service will meet your needs, work without
              errors, or be compatible with other systems.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-16 pt-8 border-t border-border">
          <div className="bg-accent/30 rounded-xl p-8 text-center">
            <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">
              Questions about these Terms of Service?
            </h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Service, please
              don&apos;t hesitate to contact us.
            </p>
            <a
              href="mailto:hello@klaim.ai"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Contact Legal Team
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
