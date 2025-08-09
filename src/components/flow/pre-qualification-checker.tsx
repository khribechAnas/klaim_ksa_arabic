"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Check,
  Clock,
  ArrowRight,
  CheckCircle,
  CheckIcon,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { SectionHeader } from "../section-header";

export default function PreQualificationChecker() {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isCardInView = useInView(cardRef, { once: true, amount: 0.1 });
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
  const [result, setResult] = useState<
    "qualified" | "pending" | null
  >(null);

  const regularClientOptions = [
    "1-3 clients",
    "4-10 clients",
    "11-20 clients",
    "21-50 clients",
    "More than 50 clients",
    "None",
  ];

  const invoiceRanges = [
    "Up to 300,000 AED",
    "300,000 - 750,000 AED",
    "750,000 - 1 million AED",
    "1 million - 1.5 million AED",
    "1.5 million - 2 million AED",
    "3 million AED +",
    "Other (specify)",
  ];

  const yearRanges = [
    "Less than 1 year",
    "1-2 years",
    "3-5 years",
    "6-10 years",
    "More than 10 years",
  ];

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
      const hasRegularClients =
        formData.regularClients !== "None" &&
        formData.regularClients !== "1-3 clients";

      // If business has enough regular clients and meets other criteria, they qualify
      if (
        (yearsRange === "3-5 years" ||
          yearsRange === "6-10 years" ||
          yearsRange === "More than 10 years") &&
        usesAccountingSoftware &&
        hasRegularClients &&
        !hasLoans
      ) {
        setResult("qualified");
      }
      // All other cases go to pending
      else {
        setResult("pending");
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
    hidden: { opacity: 0, y: 20 },
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
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
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
        color:
          "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
        primaryButton: {
          text: "Complete Full Qualification form in under 5 minutes",
          href: "https://forms.office.com/Pages/DesignPageV2.aspx?origin=NeoPortalPage&subpage=design&id=pK2jBIbs6EuMWwLoFClm_MV694s1RNFArmrtVf2Tdh5URjNNMVJDUUI4WTVLRzdLNFVDQjRWTUgzWC4u&topview=Prefill",
          icon: (
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          ),
          class: "bg-green-600 hover:bg-green-700 text-white",
        },
        secondaryButton: {
          text: "Have Questions? Contact Us",
          href: "#contact",
          icon: <ArrowRight className="ml-2 h-4 w-4" />,
          class:
            "border-green-300 text-green-600 hover:bg-green-50 dark:border-green-700 dark:text-green-400 dark:hover:bg-green-900/20",
        },
      },
      pending: {
        title: "Your Business May Qualify",
        description:
          "Based on the information provided, your business meets some of our criteria. We'll need additional information to make a final determination.",
        icon: <Clock className="h-16 w-16 text-amber-500" />,
        color:
          "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800",
        primaryButton: {
          text: "Complete Full Qualification form in under 5 minutes",
          href: "https://forms.office.com/Pages/DesignPageV2.aspx?origin=NeoPortalPage&subpage=design&id=pK2jBIbs6EuMWwLoFClm_MV694s1RNFArmrtVf2Tdh5URjNNMVJDUUI4WTVLRzdLNFVDQjRWTUgzWC4u&topview=Prefill",
          icon: (
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          ),
          class: "bg-amber-500 hover:bg-amber-600 text-white",
        },
        secondaryButton: {
          text: "Have Questions? Contact Us",
          href: "#contact",
          icon: <ArrowRight className="ml-2 h-4 w-4" />,
          class:
            "border-amber-300 hover:text-amber-600 dark:bg-amber-900/20 text-amber-600 hover:bg-amber-50 dark:border-amber-700 dark:text-amber-400 dark:hover:bg-amber-900/20",
        },
      },
    };

    const content = resultContent[result];

    return (
      <motion.div
        className={`p-8 rounded-xl border ${content.color} mb-6 relative overflow-hidden`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col items-center text-center relative z-10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.2,
            }}
            className="mb-6 p-4 rounded-full bg-background shadow-lg border border-border"
          >
            {content.icon}
          </motion.div>
          <h3 className="text-2xl font-bold mb-3 text-primary">
            {content.title}
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-lg">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
            {content.primaryButton && (
              <Link href={content.primaryButton.href}>
                <Button
                  className={`${content.primaryButton.class} group text-sm px-5 py-3 h-auto font-medium shadow-md hover:shadow-lg transition-all flex-1 whitespace-normal text-center`}
                >
                  <span className="block leading-tight">
                    {content.primaryButton.text}
                  </span>
                  {content.primaryButton.icon}
                </Button>
              </Link>
            )}

            {content.secondaryButton && (
              <Link href={content.secondaryButton.href}>
                <Button
                  variant="outline"
                  className={`${content.secondaryButton.class} group  text-sm px-5 py-3 h-auto font-medium transition-all flex-1 whitespace-normal text-center`}
                >
                  <span className="block leading-tight">
                    {content.secondaryButton.text}
                  </span>
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
    };

    // Define result icons
    const resultIcons = {
      qualified: <CheckIcon className="h-5 w-5" />,
      pending: <Clock className="h-5 w-5" />,
    };

    return (
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step >= 1
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
            animate={step === 1 ? { scale: [1, 1.1, 1] } : {}}
            transition={{
              duration: 0.5,
              repeat: step === 1 ? 3 : 0,
              repeatType: "reverse",
            }}
          >
            {result ? <CheckIcon className="h-5 w-5" /> : "1"}
          </motion.div>
          <div
            className={`w-16 h-1 ${
              step > 1 || result ? "bg-primary" : "bg-muted"
            }`}
          ></div>
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              step === 2
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            } ${result ? "bg-primary text-primary-foreground" : ""}`}
            animate={step === 2 ? { scale: [1, 1.1, 1] } : {}}
            transition={{
              duration: 0.5,
              repeat: step === 2 ? 3 : 0,
              repeatType: "reverse",
            }}
          >
            {result ? <CheckIcon className="h-5 w-5" /> : "2"}
          </motion.div>
          <div
            className={`w-16 h-1 ${result ? "bg-primary" : "bg-muted"}`}
          ></div>
          <motion.div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              result
                ? `${resultColors[result]} text-white`
                : "bg-muted text-muted-foreground"
            }`}
            animate={result ? { scale: [1, 1.1, 1] } : {}}
            transition={{
              duration: 0.5,
              repeat: result ? 3 : 0,
              repeatType: "reverse",
            }}
          >
            {result ? resultIcons[result] : "3"}
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <section id="pre-qualification" className="w-full pb-10">
      <div className="flex w-full flex-col items-center justify-center">
        <SectionHeader>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            Instant Pre-Qualification Check
          </h2>
          <p className="text-muted-foreground font-inter font-medium text-center text-balance">
            Find out if your business can qualify for receivables purchasing
            within 24 hours
          </p>
        </SectionHeader>

        <div ref={ref} className="max-w-4xl mx-auto mt-10">
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            animate={
              isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            <Card className="border border-border shadow-xl bg-background/90 overflow-hidden">
              <CardHeader className="bg-accent/20 border-b border-border ">
                <CardTitle className="text-2xl font-poppins font-semibold mt-6 text-primary flex items-center">
                  <div className="mr-3 p-2 bg-accent/50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-secondary" />
                  </div>
                  Business Pre-Qualification Checker
                </CardTitle>
                <CardDescription className="text-muted-foreground mt-2">
                  Complete the form below to check if your business qualifies
                  for our financing solutions
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8">
                {renderStepIndicator()}

                {result ? (
                  <>
                    {renderQualificationResult()}

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="bg-muted/50 rounded-xl p-6 border border-border"
                    >
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="summary" className="border-none">
                          <AccordionTrigger className="text-primary py-2 hover:no-underline">
                            <span className="flex items-center text-base font-medium">
                              <CheckCircle className="h-5 w-5 text-primary mr-2" />
                              View Your Responses
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pt-4">
                            <div className="space-y-4 text-sm">
                              <div className="grid grid-cols-2 gap-4 py-3 border-b border-border">
                                <div className="font-medium text-muted-foreground">
                                  Years Operating:
                                </div>
                                <div className="text-primary font-medium">
                                  {formData.yearsOperating}
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 py-3 border-b border-border">
                                <div className="font-medium text-muted-foreground">
                                  Invoice Amount:
                                </div>
                                <div className="text-primary font-medium">
                                  {formData.invoiceAmount === "Other (specify)"
                                    ? formData.customInvoiceAmount
                                    : formData.invoiceAmount}
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 py-3 border-b border-border">
                                <div className="font-medium text-muted-foreground">
                                  Regular Clients:
                                </div>
                                <div className="text-primary font-medium">
                                  {formData.regularClients}
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 py-3 border-b border-border">
                                <div className="font-medium text-muted-foreground">
                                  Uses Accounting Software:
                                </div>
                                <div className="text-primary font-medium">
                                  {getAccountingSoftwareDisplay()}
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 py-3">
                                <div className="font-medium text-muted-foreground">
                                  Has Business Loans:
                                </div>
                                <div className="text-primary font-medium">
                                  {getBusinessLoansDisplay()}
                                </div>
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
                      <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.div
                          variants={itemVariants}
                          className="bg-background rounded-xl p-6 border border-border shadow-sm"
                        >
                          <Label
                            htmlFor="years-operating"
                            className="text-lg font-medium text-primary mb-3 block"
                          >
                            How many years has your business been operating?
                          </Label>
                          <div className="text-sm text-muted-foreground mb-4">
                            Must be under the same Trade License
                          </div>
                          <Select
                            value={formData.yearsOperating}
                            onValueChange={(value) =>
                              handleChange("yearsOperating", value)
                            }
                          >
                            <SelectTrigger
                              id="years-operating"
                              className="h-12 bg-muted/50 border-border focus:border-primary"
                            >
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
                          className="bg-background rounded-xl p-6 border border-border shadow-sm"
                        >
                          <Label
                            htmlFor="invoice-amount"
                            className="text-lg font-medium text-primary mb-3 block"
                          >
                            What is the amount of invoices you are looking to
                            process per annum?
                          </Label>
                          <Select
                            value={formData.invoiceAmount}
                            onValueChange={(value) =>
                              handleChange("invoiceAmount", value)
                            }
                          >
                            <SelectTrigger
                              id="invoice-amount"
                              className="h-12 bg-muted/50 border-border focus:border-primary"
                            >
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
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              transition={{ duration: 0.3 }}
                            >
                              <Input
                                placeholder="Enter specific amount in AED"
                                value={formData.customInvoiceAmount}
                                onChange={(e) =>
                                  handleChange(
                                    "customInvoiceAmount",
                                    e.target.value
                                  )
                                }
                                className="h-12 bg-muted/50 border-border focus:border-primary"
                              />
                            </motion.div>
                          )}
                        </motion.div>

                        <motion.div
                          variants={itemVariants}
                          className="bg-background rounded-xl p-6 border border-border shadow-sm"
                        >
                          <Label
                            htmlFor="regular-clients"
                            className="text-lg font-medium text-primary mb-3 block"
                          >
                            How many clients regularly pay you?
                          </Label>
                          <div className="text-sm text-muted-foreground mb-4">
                            *Regularly - at least 4 times within a year
                          </div>
                          <Select
                            value={formData.regularClients}
                            onValueChange={(value) =>
                              handleChange("regularClients", value)
                            }
                          >
                            <SelectTrigger
                              id="regular-clients"
                              className="h-12 bg-muted/50 border-border focus:border-primary"
                            >
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
                      <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <motion.div
                          variants={itemVariants}
                          className="bg-background rounded-xl p-6 border border-border shadow-sm"
                        >
                          <Label
                            htmlFor="uses-accounting-software"
                            className="text-lg font-medium text-primary mb-3 block"
                          >
                            Do you use accounting software or have an ERP
                            system?
                          </Label>
                          <Select
                            value={formData.usesAccountingSoftware}
                            onValueChange={(value) =>
                              handleChange("usesAccountingSoftware", value)
                            }
                          >
                            <SelectTrigger
                              id="uses-accounting-software"
                              className="h-12 bg-muted/50 border-border focus:border-primary"
                            >
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
                          className="bg-background rounded-xl p-6 border border-border shadow-sm"
                        >
                          <Label
                            htmlFor="has-business-loans"
                            className="text-lg font-medium text-primary mb-3 block"
                          >
                            Do you have business loans?
                          </Label>
                          <Select
                            value={formData.hasBusinessLoans}
                            onValueChange={(value) =>
                              handleChange("hasBusinessLoans", value)
                            }
                          >
                            <SelectTrigger
                              id="has-business-loans"
                              className="h-12 bg-muted/50 border-border focus:border-primary"
                            >
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

              <CardFooter className="bg-muted/50 p-6 border-t border-border">
                {!result && (
                  <div className="w-full">
                    {step === 1 ? (
                      <Button
                        onClick={() => setStep(2)}
                        className="w-full bg-secondary hover:bg-secondary/90 text-primary-foreground h-12 group shadow-md hover:shadow-lg transition-all text-base"
                        disabled={
                          !formData.yearsOperating ||
                          !formData.invoiceAmount ||
                          !formData.regularClients ||
                          (formData.invoiceAmount === "Other (specify)" &&
                            !formData.customInvoiceAmount)
                        }
                      >
                        Continue to Step 2
                        <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    ) : (
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          variant="outline"
                          onClick={() => setStep(1)}
                          className="w-full sm:w-1/2 border-border text-muted-foreground hover:text-primary h-12 hover:bg-accent"
                        >
                          Back to Step 1
                        </Button>
                        <Button
                          onClick={handleSubmit}
                          className="w-full sm:w-1/2 bg-secondary hover:bg-secondary/90 text-primary-foreground h-12 group shadow-md hover:shadow-lg transition-all text-base"
                          disabled={
                            !formData.usesAccountingSoftware ||
                            !formData.hasBusinessLoans ||
                            isSubmitting
                          }
                        >
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1,
                                  repeat: Number.POSITIVE_INFINITY,
                                  ease: "linear",
                                }}
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
                    className="w-full bg-secondary hover:bg-secondary/90 text-primary-foreground h-12 group shadow-md hover:shadow-lg transition-all text-base"
                  >
                    Start New Check
                  </Button>
                )}
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            className="mt-8 text-center text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p>
              This is a preliminary check only. Final qualification is subject
              to additional verification.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
