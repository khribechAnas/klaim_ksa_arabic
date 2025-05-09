"use client";

import {useState, useRef} from "react";
import {motion, useInView} from "framer-motion";
import {Check, Clock, ArrowRight, CheckCircle, AlertCircle, CheckIcon, ChevronRight, Sparkles} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Link from "next/link";

export default function PreQualificationChecker() {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(ref, {once: true, amount: 0.2});
  const isCardInView = useInView(cardRef, {once: true, amount: 0.1});
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    yearsOperating: "",
    invoiceAmount: "",
    customInvoiceAmount: "",
    regularClients: "",
    usesAccountingSoftware: "",
    hasBusinessLoans: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<"qualified" | "pending" | "not-qualified" | null>(null);

  const regularClientOptions = ["1-3 clients", "4-10 clients", "11-20 clients", "21-50 clients", "More than 50 clients", "None"];

  const invoiceRanges = [
    "Up to 300,000 AED",
    "300,000 - 750,000 AED",
    "750,000 - 1 million AED",
    "1 million - 1.5 million AED",
    "1.5 million - 2 million AED",
    "3 million AED +",
    "Other (specify)",
  ];

  const yearRanges = ["Less than 1 year", "1-2 years", "3-5 years", "6-10 years", "More than 10 years"];

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);

      // Simple qualification logic (can be replaced with actual logic)
      const yearsRange = formData.yearsOperating;
      const usesAccountingSoftware = formData.usesAccountingSoftware === "yes";
      const hasLoans = formData.hasBusinessLoans === "yes";
      const hasRegularClients = formData.regularClients !== "None" && formData.regularClients !== "1-3 clients";
      const hasNoRegularClients = formData.regularClients === "None";

      // If business has loans, they are not qualified
      if (hasLoans) {
        setResult("not-qualified");
      }
      // If business has enough regular clients and meets other criteria, they qualify
      else if (
        (yearsRange === "3-5 years" || yearsRange === "6-10 years" || yearsRange === "More than 10 years") &&
        usesAccountingSoftware &&
        hasRegularClients
      ) {
        setResult("qualified");
      }
      // If business has no regular clients or limited experience but meets software requirement, they go to pending
      else if (hasNoRegularClients || yearsRange === "1-2 years" || (yearsRange === "Less than 1 year" && usesAccountingSoftware)) {
        setResult("pending");
      }
      // Otherwise not qualified
      else {
        setResult("not-qualified");
      }
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      yearsOperating: "",
      invoiceAmount: "",
      customInvoiceAmount: "",
      regularClients: "",
      usesAccountingSoftware: "",
      hasBusinessLoans: "",
    });
    setStep(1);
    setResult(null);
  };

  const containerVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 10},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.4},
    },
  };

  // Helper function to get accounting software display value
  const getAccountingSoftwareDisplay = () => {
    return formData.usesAccountingSoftware === "yes" ? "Yes" : "No";
  };

  // Helper function to get loan status display value
  const getBusinessLoansDisplay = () => {
    return formData.hasBusinessLoans === "yes" ? "Yes" : "No";
  };

  const renderQualificationResult = () => {
    if (!result) return null;

    const resultContent = {
      qualified: {
        title: "Congratulations! Your Business Pre-Qualifies",
        description:
          "Based on the information provided, your business meets our initial qualification criteria. Our team can process your application within 24 hours.",
        icon: <CheckCircle className="h-16 w-16 text-green-500" />,
        color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
        primaryButton: {
          text: "Complete Full Qualification form in under 5 minutes",
          href: "https://forms.office.com/Pages/DesignPageV2.aspx?origin=NeoPortalPage&subpage=design&id=pK2jBIbs6EuMWwLoFClm_MV694s1RNFArmrtVf2Tdh5URjNNMVJDUUI4WTVLRzdLNFVDQjRWTUgzWC4u&topview=Prefill",
          icon: <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />,
          class: "bg-green-600 hover:bg-green-700 text-white",
          target: "_blank",
        },
        secondaryButton: {
          text: "Have Questions? Contact Us",
          href: "#contact",
          icon: <ArrowRight className="ml-2 h-4 w-4" />,
          class: "border-green-300 text-green-600 hover:bg-green-50 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/20",
        },
      },
      pending: {
        title: "Your Business May Qualify",
        description:
          "Based on the information provided, your business meets some of our criteria. We'll need additional information to make a final determination.",
        icon: <Clock className="h-16 w-16 text-amber-500" />,
        color: "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
        primaryButton: {
          text: "Complete Full Qualification form in under 5 minutes",
          href: "https://forms.office.com/Pages/DesignPageV2.aspx?origin=NeoPortalPage&subpage=design&id=pK2jBIbs6EuMWwLoFClm_MV694s1RNFArmrtVf2Tdh5URjNNMVJDUUI4WTVLRzdLNFVDQjRWTUgzWC4u&topview=Prefill",
          icon: <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />,
          class: "bg-amber-500 hover:bg-amber-600 text-white",
          target: "_blank",
        },
        secondaryButton: {
          text: "Have Questions? Contact Us",
          href: "#contact",
          icon: <ArrowRight className="ml-2 h-4 w-4" />,
          class:
            "border-amber-300 hover:text-amber-600 dark:bg-amber-900/20 text-amber-600 hover:bg-amber-50 dark:border-amber-700 dark:text-amber-400 dark:hover:bg-amber-900/20",
        },
      },
      "not-qualified": {
        title: "Your Business Doesn't Currently Qualify",
        description:
          "Based on the information provided, your business doesn't meet our minimum qualification criteria at this time. Please contact us to discuss alternative options.",
        icon: <AlertCircle className="h-16 w-16 text-red-500" />,
        color: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800",
        primaryButton: undefined,
        secondaryButton: undefined,
      },
    };

    const content = resultContent[result];

    return (
      <motion.div
        className={`p-8 rounded-xl border ${content.color} mb-6 relative overflow-hidden`}
        initial={{opacity: 0, scale: 0.95}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.4}}>
        {/* Background decoration */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary-100/30 to-primary-300/30 dark:from-primary-900/20 dark:to-primary-700/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-secondary-100/30 to-secondary-300/30 dark:from-secondary-900/20 dark:to-secondary-700/20 rounded-full blur-xl"></div>

        <div className="flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{scale: 0, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{type: "spring", stiffness: 300, damping: 20, delay: 0.2}}
            className="mb-6 p-4 rounded-full bg-white dark:bg-gray-800 shadow-lg">
            {content.icon}
          </motion.div>
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{content.title}</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-lg">{content.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
            {content.primaryButton && (
              <Link href={content.primaryButton.href} target={content.primaryButton.target}>
                <Button
                  className={`${content.primaryButton.class} group text-sm px-5 py-3 h-auto font-medium shadow-md hover:shadow-lg transition-all flex-1 whitespace-normal text-center`}>
                  <span className="block leading-tight">{content.primaryButton.text}</span>
                  {content.primaryButton.icon}
                </Button>
              </Link>
            )}

            {content.secondaryButton && (
              <Link href={content.secondaryButton.href}>
                <Button
                  variant="outline"
                  className={`${content.secondaryButton.class} group  text-sm px-5 py-3 h-auto font-medium transition-all flex-1 whitespace-normal text-center`}>
                  <span className="block leading-tight">{content.secondaryButton.text}</span>
                  {content.secondaryButton.icon}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  const renderStepIndicator = () => {
    // Define result colors
    const resultColors = {
      qualified: "bg-green-500",
      pending: "bg-amber-500",
      "not-qualified": "bg-red-500",
    };

    // Define result icons
    const resultIcons = {
      qualified: <CheckIcon className="h-5 w-5" />,
      pending: <Clock className="h-5 w-5" />,
      "not-qualified": <AlertCircle className="h-5 w-5" />,
    };

    return (
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 1 ? "bg-primary text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
            }`}
            animate={step === 1 ? {scale: [1, 1.1, 1]} : {}}
            transition={{duration: 0.5, repeat: step === 1 ? 3 : 0, repeatType: "reverse"}}>
            {result ? <CheckIcon className="h-5 w-5" /> : "1"}
          </motion.div>
          <div className={`w-16 h-1 ${step > 1 || result ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}></div>
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step === 2 ? "bg-primary text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
            } ${result ? "bg-primary text-white" : ""}`}
            animate={step === 2 ? {scale: [1, 1.1, 1]} : {}}
            transition={{duration: 0.5, repeat: step === 2 ? 3 : 0, repeatType: "reverse"}}>
            {result ? <CheckIcon className="h-5 w-5" /> : "2"}
          </motion.div>
          <div className={`w-16 h-1 ${result ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"}`}></div>
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              result ? `${resultColors[result]} text-white` : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
            }`}
            animate={result ? {scale: [1, 1.1, 1]} : {}}
            transition={{duration: 0.5, repeat: result ? 3 : 0, repeatType: "reverse"}}>
            {result ? resultIcons[result] : "3"}
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="pre-qualification"
      className="pt-16 pb-16 bg-gradient-to-b from-white to-slate-100 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-100/30 dark:bg-secondary-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <Sparkles className="h-5 w-5 text-primary dark:text-secondary-400 mr-2" />
            <span className="text-sm font-medium text-primary dark:text-secondary-400">24 Hour Qualification</span>
          </motion.div>
          <h2 className="text-3xl font-poppins md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
            Instant <span className="text-primary dark:text-secondary">Pre-Qualification</span> Check
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find out if your business can qualify for receivables financing within 24 hours
          </p>
        </motion.div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <motion.div
            ref={cardRef}
            initial={{opacity: 0, y: 40}}
            animate={isCardInView ? {opacity: 1, y: 0} : {opacity: 0, y: 40}}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2,
            }}>
            <Card className="border-0 shadow-xl dark:shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 border-b border-gray-100 dark:border-gray-700 pb-6">
                <CardTitle className="text-2xl font-poppins font-semibold text-gray-900 dark:text-white flex items-center">
                  <div className="mr-3 p-2 bg-secondary/10 dark:bg-secondary/20 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-secondary dark:text-secondary-400" />
                  </div>
                  Business Pre-Qualification Checker
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 mt-2">
                  Complete the form below to check if your business qualifies for our financing solutions
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8">
                {renderStepIndicator()}

                {result ? (
                  <>
                    {renderQualificationResult()}

                    <motion.div
                      initial={{opacity: 0}}
                      animate={{opacity: 1}}
                      transition={{delay: 0.4}}
                      className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="summary" className="border-none">
                          <AccordionTrigger className="text-gray-700 dark:text-gray-300 py-2 hover:no-underline">
                            <span className="flex items-center text-base font-medium">
                              <CheckCircle className="h-5 w-5 text-primary dark:text-primary-400 mr-2" />
                              View Your Responses
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pt-4">
                            <div className="space-y-4 text-sm">
                              <div className="grid grid-cols-2 gap-4 py-3 border-b border-gray-100 dark:border-gray-700">
                                <div className="font-medium text-gray-500 dark:text-gray-400">Years Operating:</div>
                                <div className="text-gray-900 dark:text-white font-medium">{formData.yearsOperating}</div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 py-3 border-b border-gray-100 dark:border-gray-700">
                                <div className="font-medium text-gray-500 dark:text-gray-400">Invoice Amount:</div>
                                <div className="text-gray-900 dark:text-white font-medium">
                                  {formData.invoiceAmount === "Other (specify)" ? formData.customInvoiceAmount : formData.invoiceAmount}
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 py-3 border-b border-gray-100 dark:border-gray-700">
                                <div className="font-medium text-gray-500 dark:text-gray-400">Regular Clients:</div>
                                <div className="text-gray-900 dark:text-white font-medium">{formData.regularClients}</div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 py-3 border-b border-gray-100 dark:border-gray-700">
                                <div className="font-medium text-gray-500 dark:text-gray-400">Uses Accounting Software:</div>
                                <div className="text-gray-900 dark:text-white font-medium">{getAccountingSoftwareDisplay()}</div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 py-3">
                                <div className="font-medium text-gray-500 dark:text-gray-400">Has Business Loans:</div>
                                <div className="text-gray-900 dark:text-white font-medium">{getBusinessLoansDisplay()}</div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </motion.div>
                  </>
                ) : (
                  <div className="space-y-8">
                    {step === 1 && (
                      <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
                        <motion.div
                          variants={itemVariants}
                          className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                          <Label htmlFor="years-operating" className="text-lg font-medium text-gray-900 dark:text-white mb-3 block">
                            How many years has your business been operating?
                          </Label>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Must be under the same Trade License</div>
                          <Select value={formData.yearsOperating} onValueChange={(value) => handleChange("yearsOperating", value)}>
                            <SelectTrigger
                              id="years-operating"
                              className="h-12 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:border-primary dark:focus:border-primary-400">
                              <SelectValue placeholder="Select years in operation" />
                            </SelectTrigger>
                            <SelectContent>
                              {yearRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </motion.div>

                        <motion.div
                          variants={itemVariants}
                          className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                          <Label htmlFor="invoice-amount" className="text-lg font-medium text-gray-900 dark:text-white mb-3 block">
                            What is the amount of invoices you are looking to process per annum?
                          </Label>
                          <Select value={formData.invoiceAmount} onValueChange={(value) => handleChange("invoiceAmount", value)}>
                            <SelectTrigger
                              id="invoice-amount"
                              className="h-12 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:border-primary dark:focus:border-primary-400">
                              <SelectValue placeholder="Select a range" />
                            </SelectTrigger>
                            <SelectContent>
                              {invoiceRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>

                          {formData.invoiceAmount === "Other (specify)" && (
                            <motion.div
                              className="mt-4"
                              initial={{opacity: 0, height: 0}}
                              animate={{opacity: 1, height: "auto"}}
                              transition={{duration: 0.3}}>
                              <Input
                                placeholder="Enter specific amount in AED"
                                value={formData.customInvoiceAmount}
                                onChange={(e) => handleChange("customInvoiceAmount", e.target.value)}
                                className="h-12 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:border-primary dark:focus:border-primary-400"
                              />
                            </motion.div>
                          )}
                        </motion.div>

                        <motion.div
                          variants={itemVariants}
                          className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                          <Label htmlFor="regular-clients" className="text-lg font-medium text-gray-900 dark:text-white mb-3 block">
                            How many clients regularly pay you?
                          </Label>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">*Regularly - at least 4 times within a year</div>
                          <Select value={formData.regularClients} onValueChange={(value) => handleChange("regularClients", value)}>
                            <SelectTrigger
                              id="regular-clients"
                              className="h-12 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:border-primary dark:focus:border-primary-400">
                              <SelectValue placeholder="Select number of regular clients" />
                            </SelectTrigger>
                            <SelectContent>
                              {regularClientOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </motion.div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
                        <motion.div
                          variants={itemVariants}
                          className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                          <Label htmlFor="uses-accounting-software" className="text-lg font-medium text-gray-900 dark:text-white mb-3 block">
                            Do you use accounting software or have an ERP system?
                          </Label>
                          <Select value={formData.usesAccountingSoftware} onValueChange={(value) => handleChange("usesAccountingSoftware", value)}>
                            <SelectTrigger
                              id="uses-accounting-software"
                              className="h-12 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:border-primary dark:focus:border-primary-400">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </motion.div>

                        <motion.div
                          variants={itemVariants}
                          className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm">
                          <Label htmlFor="has-business-loans" className="text-lg font-medium text-gray-900 dark:text-white mb-3 block">
                            Do you have business loans?
                          </Label>
                          <Select value={formData.hasBusinessLoans} onValueChange={(value) => handleChange("hasBusinessLoans", value)}>
                            <SelectTrigger
                              id="has-business-loans"
                              className="h-12 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:border-primary dark:focus:border-primary-400">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </motion.div>
                      </motion.div>
                    )}
                  </div>
                )}
              </CardContent>

              <CardFooter className="bg-gray-50 dark:bg-gray-800/50 p-6 border-t border-gray-100 dark:border-gray-700">
                {!result && (
                  <div className="w-full">
                    {step === 1 ? (
                      <Button
                        onClick={() => setStep(2)}
                        className="w-full bg-primary hover:bg-primary-600 text-white h-12 group shadow-md hover:shadow-lg transition-all text-base"
                        disabled={
                          !formData.yearsOperating ||
                          !formData.invoiceAmount ||
                          !formData.regularClients ||
                          (formData.invoiceAmount === "Other (specify)" && !formData.customInvoiceAmount)
                        }>
                        Continue to Step 2
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          variant="outline"
                          onClick={() => setStep(1)}
                          className="w-full sm:w-1/2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white h-12 hover:bg-gray-100 dark:hover:bg-gray-700/50">
                          Back to Step 1
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          className="w-full sm:w-1/2 bg-primary hover:bg-primary-600 text-white h-12 group shadow-md hover:shadow-lg transition-all text-base"
                          disabled={!formData.usesAccountingSoftware || !formData.hasBusinessLoans || isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="h-5 w-5 border-2 border-white dark:border-black border-t-transparent rounded-full mr-2"
                                animate={{rotate: 360}}
                                transition={{duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear"}}
                              />
                              Checking Qualification...
                            </>
                          ) : (
                            <>
                              Check Qualification
                              <Check className="ml-2 h-5 w-5" />
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {result && (
                  <Button
                    variant="outline"
                    onClick={resetForm}
                    className="w-full border-gray-200 hover:text-black dark:hover:text-white dark:border-gray-700 text-gray-700 dark:text-gray-300 h-12 hover:bg-gray-100 dark:hover:bg-gray-700/50 text-base">
                    Start New Check
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm"
            initial={{opacity: 0}}
            animate={isInView ? {opacity: 1} : {opacity: 0}}
            transition={{duration: 0.5, delay: 0.6}}>
            <p>This is a preliminary check only. Final qualification is subject to additional verification.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
