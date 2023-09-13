import React from "react";
import FAQ from "../CommonModule/FAQ";

const RcmFAQ = () => {
  const faqData = [
    {
      title: "What is Klaim?",
      answer:
        "Klaim is an award-winning fintech company that has recently entered the US healthcare market. Since 2019, we’ve been revolutionizing the healthcare industry by giving providers access to the working capital they need to grow faster and serve patients better. Our solutions are already trusted by more than 40 healthcare providers, and so far we’ve accelerated more than 323,000 claims and paid out $25 million in purchased claims (as part of our Klaim Kapital solution). Our team is ready to connect with you, answer your questions, and help you decide on next steps. Click here to send us a message now.",
    },
    {
      title: "How will you protect my data?",
      answer:
        "At Klaim US, we are committed to safeguarding the privacy and security of your data. We recognize the importance of maintaining the confidentiality of personal and sensitive information, and we are actively implementing the data privacy and security safeguards as stipulated by the Health Insurance Portability and Accountability Act (HIPAA). We understand your concerns about data security, and we want to assure you that we have implemented advanced security measures to protect your data. Here are some important details about our security measures: \nNo use of PHI: In order to assess your claim data, we currently do not need to access Protected Health Information (PHI) as defined by the U.S. Department of Health and Human Services (https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html). \n\nEncryption: Your credentials will be encrypted using the AES256 algorithm, considered one of the most secure encryption methods available. \nHTTPS Protocol: Our website enforces the use of HTTPS protocol across all our services. \nSecure Cloud Providers: We utilize secure cloud providers with servers located in the United States. These providers adhere to stringent security standards and practices, further enhancing the protection of your data.",
    },
    {
      title: "Do you require long-term commitment?",
      answer:
        "No commitment or commitment is required. We work on demand, and you can discontinue anytime. Click here to send us a message now.",
    },
    {
      title:
        "How much does it cost to get a claim purchase proposal with Klaim Kapital?",
      answer:
        "Once you sign an agreement, you’ll receive your first payment in as little as 5 days. Going forward, you’ll receive payments within 24 hours. Click here to get started.",
    },
    {
      title: "How much do the individual tools cost?",
      answer:
        "We’ve found that every business has unique needs, and we excel at creating solutions that are customized just for you. During our initial conversation, we’ll take our time to learn more about your needs and tailor our solutions accordingly. That way, you can optimize your investment for a maximum ROI. Click here to send us a message, and our team will be in touch",
    },
  ];
  return (
    <section className="container mx-auto py-12 md:py-36 px-4 xl:px-0">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[70px] mb-4 md:mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          FAQs
        </span>
      </h2>
      <FAQ questions={faqData} />
    </section>
  );
};

export default RcmFAQ;
