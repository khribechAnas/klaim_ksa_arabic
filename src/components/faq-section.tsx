"use client";

import {useRef, useState} from "react";
import {motion, useInView, AnimatePresence} from "framer-motion";
import {Search, Plus, Minus, FileQuestionIcon, MessageCircleIcon} from "lucide-react";

export default function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, amount: 0.2});
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does KlaimFlow's receivables financing work?",
      answer:
        "KlaimFlow purchases your outstanding invoices and advances up to 90% of their value within 24 hours. When your customer pays the invoice on its original due date, we settle the remaining balance with you, minus our fee. This gives you immediate access to your earned revenue without waiting for payment terms.",
      tags: ["financing", "invoices", "payment", "advance"],
    },
    {
      question: "What types of businesses can use KlaimFlow?",
      answer:
        "KlaimFlow is designed for SMEs and B2B businesses across various industries that have outstanding receivables with payment terms. We work with businesses in the UAE, KSA, and Oman that need immediate liquidity without waiting for client payments.",
      tags: ["business", "eligibility", "SME", "B2B"],
    },
    {
      question: "How quickly can I get funded?",
      answer:
        "Once you submit your invoices, we can typically advance funds within 24 hours after approval. The onboarding process can be completed in as little as 5 days, after which you can start receiving 24-hour claim payments.",
      tags: ["funding", "timeline", "onboarding", "process"],
    },
    {
      question: "What are the fees for using KlaimFlow?",
      answer:
        "Our fee structure is transparent and based on the value of the invoices, payment terms, and your customer's creditworthiness. We provide a no-cost Claim Purchase Proposal that outlines all fees before you commit. There are no hidden charges or long-term contracts.",
      tags: ["fees", "costs", "pricing", "charges"],
    },
    {
      question: "Do my customers know that I'm using KlaimFlow?",
      answer:
        "This depends on the arrangement you choose. We offer both disclosed and non-disclosed options. With non-disclosed financing, your customers continue to pay you directly, and they don't need to know about our involvement. With disclosed financing, customers are notified and make payments directly to KlaimFlow.",
      tags: ["customers", "disclosure", "privacy", "arrangement"],
    },
    {
      question: "How is KlaimFlow different from a bank loan?",
      answer:
        "Unlike bank loans, KlaimFlow doesn't create debt on your balance sheet. We purchase your receivables, giving you immediate cash without adding liabilities. There's no need for collateral beyond the invoices themselves, and approval is based on your customers' creditworthiness rather than your business's credit history.",
      tags: ["bank", "loan", "difference", "debt", "collateral"],
    },
  ];

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 md:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
          transition={{duration: 0.5}}>
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-secondary-900/30 border border-primary-200 dark:border-secondary-700 mb-10"
            initial={{opacity: 0, scale: 0.9}}
            animate={isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.9}}
            transition={{duration: 0.4, delay: 0.1}}>
            <MessageCircleIcon className="h-4 w-4 text-primary dark:text-secondary-400 mr-2" />
            <span className="text-sm font-medium text-primary dark:text-secondary-400">FAQs</span>
          </motion.div>
          <h2 className="text-3xl font-poppins md:text-5xl font-semibold tracking-tight mb-4">
            Frequently Asked <span className="text-primary dark:text-secondary">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Find answers to common questions about KlaimFlow&apos;s receivables financing solution.</p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          className="max-w-2xl mx-auto mb-12"
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
          transition={{duration: 0.5, delay: 0.2}}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-400"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.div>

        {/* FAQ list */}
        <div ref={ref} className="max-w-3xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden"
                  initial={{opacity: 0, y: 20}}
                  animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                  transition={{duration: 0.5, delay: index * 0.1}}>
                  <button
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openIndex === index}>
                    <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                    <span className="ml-6 flex-shrink-0">
                      {openIndex === index ? (
                        <Minus className="h-5 w-5 text-primary dark:text-primary-400" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{height: 0, opacity: 0}}
                        animate={{height: "auto", opacity: 1}}
                        exit={{height: 0, opacity: 0}}
                        transition={{duration: 0.3}}>
                        <div className="p-6 pt-0 text-gray-600 dark:text-gray-300">
                          <p>{faq.answer}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {faq.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSearchTerm(tag);
                                }}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.3}}>
              <p className="text-gray-600 dark:text-gray-300">No FAQs found matching your search.</p>
              <button className="mt-4 text-primary dark:text-primary-400 font-medium" onClick={() => setSearchTerm("")}>
                Clear search
              </button>
            </motion.div>
          )}
        </div>

        {/* Contact link */}
        <motion.div
          className="mt-12 text-center"
          initial={{opacity: 0, y: 20}}
          animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
          transition={{duration: 0.5, delay: 0.5}}>
          <p className="text-gray-600 dark:text-gray-300">
            Still have questions?{" "}
            <a href="#contact" className="text-primary dark:text-primary-400 hover:underline">
              Contact our team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
