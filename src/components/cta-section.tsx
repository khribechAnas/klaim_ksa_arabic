"use client";

import {useState, useRef} from "react";
import {motion, useInView} from "framer-motion";
import {ArrowRight, Check, Unlock, Clock, Target} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import Link from "next/link";

interface CtaSectionProps {
  ctaTitle?: string;
  ctaBullet1?: string;
  ctaBullet2?: string;
  ctaBullet3?: string;
}

// Define validation errors interface
interface ValidationErrors {
  name?: string;
  companyName?: string;
  email?: string;
  phoneNumber?: string;
  annualRevenue?: string;
}

export default function CtaSection({
  ctaTitle,
  ctaBullet1,
  ctaBullet2,
  ctaBullet3,
}: CtaSectionProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    annualRevenue: "",
  });

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
    margin: "-100px 0px",
  });

  // Validate form data
  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};
    let isValid = true;

    // Check if fields are empty
    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.companyName.trim()) {
      errors.companyName = "Company name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
      isValid = false;
    }

    if (!formData.annualRevenue.trim()) {
      errors.annualRevenue = "Annual revenue is required";
      isValid = false;
    } else if (isNaN(Number(formData.annualRevenue)) || Number(formData.annualRevenue) <= 0) {
      errors.annualRevenue = "Please enter a valid revenue amount";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    
    // Map form field IDs to Strapi model fields
    const fieldMapping: Record<string, string> = {
      name: "name",
      company: "companyName",
      email: "email", 
      phone: "phoneNumber",
      revenue: "annualRevenue"
    };
    
    const strapiField = fieldMapping[id];
    
    // Clear validation error when field is edited
    if (validationErrors[strapiField as keyof ValidationErrors]) {
      setValidationErrors({
        ...validationErrors,
        [strapiField]: undefined
      });
    }
    
    setFormData({
      ...formData,
      [strapiField]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setError(null);

    try {
      // Format phone number to include UAE code
      const formattedData = {
        ...formData,
        phoneNumber: formData.phoneNumber ? `971${formData.phoneNumber.replace(/\D/g, '')}` : "",
        annualRevenue: formData.annualRevenue ? parseInt(formData.annualRevenue, 10) : 0,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_ENDPOINT}/flow-ctas`, 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: formattedData }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Failed to submit form');
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err instanceof Error ? err.message : 'Failed to submit form');
    } finally {
      setIsSubmitting(false);
    }
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
                  {ctaTitle}
                </h2>

                <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                  <motion.div
                    className="flex items-start gap-2 sm:gap-3"
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.5, delay: 0.3}}>
                    <Unlock className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 text-white" />
                    <p className="text-base sm:text-lg text-white/90">
                      {ctaBullet1}
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-2 sm:gap-3"
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.5, delay: 0.4}}>
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 text-white" />
                    <p className="text-base sm:text-lg text-white/90">
                      {ctaBullet2}
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-2 sm:gap-3"
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                    transition={{duration: 0.5, delay: 0.5}}>
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 text-white" />
                    <p className="text-base sm:text-lg text-white/90">
                      {ctaBullet3}
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
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-poppins font-bold text-white mb-3">Thank you!</h3>
                    <p className="text-white/90 mb-6">Your information has been submitted successfully. We'll be in touch with you soon.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl sm:text-2xl font-poppins font-bold text-white mb-5 sm:mb-6">Tell us about yourself</h3>
                    {error && (
                      <div className="mb-4 p-3 bg-red-500/20 border border-red-600/30 rounded-lg text-white">
                        {error}
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                      <div className="space-y-1 sm:space-y-2">
                        <Label htmlFor="name" className="text-white text-sm sm:text-base">
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Jane Smith"
                          required
                          className={`bg-white/20 border-white/30 text-white placeholder:text-white/70 h-10 sm:h-12 text-base ${
                            validationErrors.name ? "border-red-400" : ""
                          }`}
                          autoComplete="name"
                          onChange={handleChange}
                          value={formData.name}
                        />
                        {validationErrors.name && (
                          <p className="text-red-300 text-sm mt-1">{validationErrors.name}</p>
                        )}
                      </div>

                      <div className="space-y-1 sm:space-y-2">
                        <Label htmlFor="company" className="text-white text-sm sm:text-base">
                          Company name
                        </Label>
                        <Input
                          id="company"
                          placeholder="Jane's company"
                          required
                          className={`bg-white/20 border-white/30 text-white placeholder:text-white/70 h-10 sm:h-12 text-base ${
                            validationErrors.companyName ? "border-red-400" : ""
                          }`}
                          autoComplete="organization"
                          onChange={handleChange}
                          value={formData.companyName}
                        />
                        {validationErrors.companyName && (
                          <p className="text-red-300 text-sm mt-1">{validationErrors.companyName}</p>
                        )}
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
                          className={`bg-white/20 border-white/30 text-white placeholder:text-white/70 h-10 sm:h-12 text-base ${
                            validationErrors.email ? "border-red-400" : ""
                          }`}
                          autoComplete="email"
                          onChange={handleChange}
                          value={formData.email}
                        />
                        {validationErrors.email && (
                          <p className="text-red-300 text-sm mt-1">{validationErrors.email}</p>
                        )}
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
                            className={`bg-white/20 border-white/30 text-white placeholder:text-white/70 rounded-l-none h-10 sm:h-12 text-base ${
                              validationErrors.phoneNumber ? "border-red-400" : ""
                            }`}
                            autoComplete="tel"
                            onChange={handleChange}
                            value={formData.phoneNumber}
                          />
                        </div>
                        {validationErrors.phoneNumber && (
                          <p className="text-red-300 text-sm mt-1">{validationErrors.phoneNumber}</p>
                        )}
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
                          className={`bg-white/20 border-white/30 text-white placeholder:text-white/70 h-10 sm:h-12 text-base ${
                            validationErrors.annualRevenue ? "border-red-400" : ""
                          }`}
                          min="0"
                          inputMode="numeric"
                          onChange={handleChange}
                          value={formData.annualRevenue}
                        />
                        {validationErrors.annualRevenue && (
                          <p className="text-red-300 text-sm mt-1">{validationErrors.annualRevenue}</p>
                        )}
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
                  </>
                )}
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
