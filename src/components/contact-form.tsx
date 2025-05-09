"use client";

import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import {MapPin, Mail, Phone, Clock, ExternalLink, MessageCircle} from "lucide-react";
import {Button} from "@/components/ui/button";

export default function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true, amount: 0.2});

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
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
            <MessageCircle className="h-4 w-4 text-primary dark:text-secondary-400 mr-2" />
            <span className="text-sm font-medium text-primary dark:text-secondary-400">Contact</span>
          </motion.div>
          <h2 className="text-3xl font-poppins md:text-5xl font-semibold tracking-tight mb-4">
            Get in <span className="text-primary dark:text-secondary">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have questions about KlaimFlow? Contact one of our specialists who will get back to you within 24 hours.
          </p>
        </motion.div>

        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Cards */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              initial={{opacity: 0, y: 20}}
              animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
              transition={{duration: 0.5, delay: 0.1}}>
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Our Offices</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>Indigo Icon Tower</p>
                <p>Unit 3404 - Dubai</p>
                <p>United Arab Emirates</p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 w-full">
                <Button variant="outline" className="w-full group" asChild>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Indigo+Icon+Tower+Unit+3404+Dubai+UAE"
                    target="_blank"
                    rel="noopener noreferrer">
                    View on Google Map
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              initial={{opacity: 0, y: 20}}
              animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
              transition={{duration: 0.5, delay: 0.2}}>
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Email Us</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>hello@klaim.ai</p>
                <p>helloksa@klaim.ai</p>
                <p>hellooman@klaim.ai</p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 w-full">
                <Button className="w-full bg-primary hover:bg-primary-700 text-white group" asChild>
                  <a href="mailto:hello@klaim.ai">
                    Send Email
                    <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
              initial={{opacity: 0, y: 20}}
              animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
              transition={{duration: 0.5, delay: 0.3}}>
              <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Call Us</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>
                  <span className="font-medium">UAE:</span> +971 4 876 4096
                </p>
                <p>
                  <span className="font-medium">KSA:</span> +966 11 510 2972
                </p>
                <p>
                  <span className="font-medium">Oman:</span> +968 7 173 4424
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700 w-full">
                <Button variant="outline" className="w-full group" asChild>
                  <a href="tel:+97148764096">
                    Call Now
                    <Phone className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Business Hours Section */}
          <motion.div
            className="mt-12 bg-secondary/10 rounded-2xl p-8 shadow-sm"
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
            transition={{duration: 0.5, delay: 0.4}}>
            <div className="flex items-center justify-center mb-6">
              <Clock className="h-6 w-6 text-primary dark:text-primary-400 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Business Hours</h3>
            </div>
            <div className="flex flex-col items-center max-w-lg mx-auto space-y-4">
              <div className="flex justify-between w-full border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="text-gray-600 dark:text-gray-300">Weekdays</span>
                <span className="font-medium text-gray-900 dark:text-white">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between w-full border-b border-gray-200 dark:border-gray-700 pb-2">
                <span className="text-gray-600 dark:text-gray-300">Weekends & Holidays</span>
                <span className="font-medium text-gray-900 dark:text-white">Closed</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">Connect with our team by phone on weekdays from 9 am to 6 pm.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
