import React from "react";
import FAQ from "../CommonModule/FAQ";

const HomeFAQ = () => {
  const faqData = [
    {
      title: "What is Klaim?",
      answer: `<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-family:"Popins",sans-serif;'><span style="font-size: 18px;">Klaim is an award-winning fintech company based in UAE. Since 2019, we’ve been revolutionizing the healthcare industry by giving providers access to the working capital they need to grow faster and serve patients better. Our solutions are already trusted by more than 40 healthcare providers, and so far we’ve accelerated 300,000 claims and paid out 25 million in purchased claims (as part of our Klaim Kapital solution). Our team is ready to connect with you, answer your questions, and help you decide on next steps. <a href="http://www.google.com/" style="text-decoration: underline; color: blue;">Click here</a> to send us a message now.</span></p>`,
    },
    {
      title: "How will you protect my data?",
      answer: `<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-family:"Popins",sans-serif;'><span style="font-size: 18px;">Here are a few important details about our advanced security measures:</span></p>
      <ul style="list-style-type: disc;margin-left:30px">
          <li style="font-size: 16px;">Your credentials will be encrypted by an AES256 algorithm, which would theoretically take millions of years to crack, even with the latest technology.</li>
          <li style="font-size: 16px;">Our website forces an HTTPS protocol on all our services.</li>
          <li style="font-size: 16px;">We use secure cloud providers with servers located in the UAE.</li>
      </ul>
      <p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:.5in;font-family:"Popins",sans-serif;'><span style="font-size: 16px;">&nbsp;</span></p>
      <p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-family:"Popins",sans-serif;'><span style="font-size: 18px;">You can relax knowing your data is safe. <a href="http://www.google.com/" style="text-decoration: underline; color: blue;">Click here</a> to connect with our team.</span></p>`,
    },
    {
      title: "Do you require long-term commitment?",
      answer: `<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-family:"Popins",sans-serif;'><span style="font-size: 18px;">No commitment or commitment required. We work on demand, and you can discontinue anytime. <a href="http://www.google.com/" style="text-decoration: underline; color: blue;">Click here</a> to send us a message now.</span></p>`,
    },
    {
      title:
        "How much does it cost to get a claim purchase proposal with Klaim Kapital?",
      answer: `<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-family:"Popins",sans-serif;'><span style="font-size: 18px;">Claim purchase proposals are free. After you request a proposal, we’ll deliver it within 48 hours at no cost to you. <a href="http://www.google.com/" style="text-decoration: underline; color: blue;">Click here</a> to get started.</span></p>`,
    },
    {
      title: "How much do the individual tools cost?",
      answer: `<p style='margin-top:0in;margin-right:0in;margin-bottom:8.0pt;margin-left:0in;font-family:"Popins",sans-serif;'><span style="font-size: 18px;">We’ve found that every business has unique needs, and we excel at creating solutions that are customized just for you. During our initial conversation, we’ll take time to learn more about your needs and tailor our solutions accordingly. That way, you can optimize your investment for a maximum ROI. <br/> <a href="http://www.google.com/" style="text-decoration: underline; color: blue;">Click here</a> to send us a message, and our team will be in touch.</span></p>`,
    },
  ];
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

export default HomeFAQ;
