import React from "react";
import FAQ from "../CommonModule/FAQ";

const faqData = [
  {
    title: "What is Klaim?",
    answer: `Klaim is an award-winning fintech company based in UAE. Since 2019, we’ve been revolutionizing the healthcare industry by giving providers access to the working capital they need to grow faster and serve patients better. Our solutions are already trusted by more than 40 healthcare providers, and so far we’ve accelerated 150,000 claims and paid out $ {X} million in purchased claims (as part of our Klaim Kapital solution). Our team is ready to connect with you, answer your questions, and help you decide on next steps. Click here to send us a message now.`,
  },
  {
    title: "How will you protect my data?",
    answer:
      "Here are a few important details about our advanced security measures: 1.Your credentials will be encrypted by an AES256 algorithm, which would theoretically take millions of years to crack, even with the latest technology. 2.Our website forces an HTTPS protocol on all our services. 3.We use secure cloud providers with servers located in the UAE. You can relax knowing your data is safe. Click here to connect with our team.",
  },
  {
    title: "Do you require long-term commitment?",
    answer:
      "No commitment or commitment required. We work on demand, and you can discontinue anytime. Click here to send us a message now.",
  },
  {
    title: "How much does this tool cost?",
    answer:
      "We’ve found that every business has unique needs, and we excel at creating solutions that are customized just for you. During our initial conversation, we’ll take time to learn more about your needs and tailor our solutions accordingly. That way, you can optimize your investment for a maximum ROI. Click here to send us a message, and our team will be in touch.",
  },
  {
    title: "How is this different from what my RCM team uses already?",
    answer:
      "Revenue Cycle Management teams (including RCM agencies) use tools to check claims, but Klaim Inspector is the only tool that compares diagnosis codes with provided services. No other tool we’ve seen is as comprehensive or effective, and other tools are much more subject to human error. If you want the maximum possible acceptance rate with a user-friendly interface and reliable support, Klaim Inspector is for you. Click here to connect with us.",
  },
];

const InspectorFAQ = () => {
  return (
    <section className="container mx-auto py-12 md:py-32 px-4">
      <h2 className="text-3xl md:text-5xl font-semibold leading-[120%] md:leading-[70px] mb-4 md:mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6135fb] to-[#41d8b6]">
          FAQs
        </span>
      </h2>
      <FAQ questions={faqData} />
    </section>
  );
};

export default InspectorFAQ;
