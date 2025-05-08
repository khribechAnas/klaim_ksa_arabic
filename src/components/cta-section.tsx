"use client";

import {useState, useRef} from "react";
import {motion, useInView} from "framer-motion";
import {ArrowRight, Check, Unlock, Clock, Target} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Link from "next/link";

export default function CtaSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "-100px 0px",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section ref={sectionRef} id="cta" className="py-16 sm:py-24 md:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          className="bg-primary rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl max-w-7xl mx-auto relative"
          initial={{opacity: 0, y: 40}}
          animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 40}}
          transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}>
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-white/10 rounded-full blur-3xl"
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-white/10 rounded-full blur-3xl"
              animate={{
                y: [0, 30, 0],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: 1,
              }}
            />
          </div>

          <div className="p-5 sm:p-8 md:p-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Left column: Call to Action Content */}
              <motion.div
                className="text-white"
                initial={{opacity: 0, x: -30}}
                animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: -30}}
                transition={{duration: 0.6, ease: "easeOut", delay: 0.2}}>
                <h2 className="text-2xl font-poppins sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-tight">
                  Unlock the Capital You've Already Earned, Free Your Mind & Resources to Focus on Business, Not Billing.
                </h2>

                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <motion.div
                    className="flex items-start gap-2 sm:gap-3"
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.5, delay: 0.3}}>
                    <Unlock className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 text-white" />
                    <p className="text-base sm:text-lg text-white/90">
                      Untie your hands, unlock instant cash flow, and free your mind from financial worries.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-2 sm:gap-3"
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.5, delay: 0.4}}>
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 text-white" />
                    <p className="text-base sm:text-lg text-white/90">Reclaim the time and energy spent managing cash flow gaps.</p>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-2 sm:gap-3"
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.5, delay: 0.5}}>
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 text-white" />
                    <p className="text-base sm:text-lg text-white/90">
                      Focus on growing your business, closing more deals, and winning in your industry.
                    </p>
                  </motion.div>
                </div>

                <div className="hidden lg:block relative z-20">
                  <motion.div
                    initial={{opacity: 0, scale: 0.9}}
                    animate={isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.9}}
                    transition={{type: "spring", stiffness: 300, damping: 25, delay: 0.6}}
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.98}}>
                    <Link href="#contact">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="bg-white text-primary hover:bg-gray-100 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg h-auto rounded-full group">
                        Speak to our representative
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right column: Lead Generation Form */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-8 shadow-lg relative z-10"
                initial={{opacity: 0, x: 30}}
                animate={isInView ? {opacity: 1, x: 0} : {opacity: 0, x: 30}}
                transition={{duration: 0.6, ease: "easeOut", delay: 0.4}}>
                <h3 className="text-xl sm:text-2xl font-poppins font-bold text-white mb-5 sm:mb-6">Tell us about yourself</h3>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="name" className="text-white text-sm sm:text-base">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Jane Smith"
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-10 sm:h-12 text-base"
                      autoComplete="name"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="company" className="text-white text-sm sm:text-base">
                      Company name
                    </Label>
                    <Input
                      id="company"
                      placeholder="Jane's company"
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-10 sm:h-12 text-base"
                      autoComplete="organization"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="email" className="text-white text-sm sm:text-base">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@janeco.com"
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-10 sm:h-12 text-base"
                      autoComplete="email"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="phone" className="text-white text-sm sm:text-base">
                      Phone Number
                    </Label>
                    <div className="flex">
                      <div className="bg-white/20 border border-white/30 rounded-l-md px-3 flex items-center text-white h-10 sm:h-12 text-sm sm:text-base">
                        +971
                      </div>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="55 123 4567"
                        required
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-l-none h-10 sm:h-12 text-base"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    <Label htmlFor="revenue" className="text-white text-sm sm:text-base">
                      Annual B2B revenue (AED)
                    </Label>
                    <Input
                      id="revenue"
                      type="number"
                      placeholder="100000"
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 h-10 sm:h-12 text-base"
                      min="0"
                      inputMode="numeric"
                    />
                  </div>

                  <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.5, delay: 0.6}}
                    whileHover={{scale: 1.03}}
                    whileTap={{scale: 0.97}}
                    className="pt-2">
                    <Button
                      type="submit"
                      className="w-full bg-white dark:bg-white dark:hover:bg-gray-100 dark:text-primary text-primary hover:bg-gray-100 mt-2 sm:mt-4 group h-12 text-base"
                      disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                      <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </form>
              </motion.div>

              {/* Mobile CTA Button */}
              <div className="lg:hidden relative z-20">
                <motion.div
                  initial={{opacity: 0, scale: 0.9}}
                  animate={isInView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.9}}
                  transition={{type: "spring", stiffness: 300, damping: 25, delay: 0.7}}
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.98}}>
                  <Button
                    size="lg"
                    variant="secondary"
                    className="w-full bg-white text-primary hover:bg-gray-100 py-5 text-base h-auto rounded-full group">
                    Speak to our representative
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
