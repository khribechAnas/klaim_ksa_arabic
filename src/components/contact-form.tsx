"use client";
import React, { useState } from "react";
import { useId } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { submitContactLead } from "@/lib/api";
import { useLocale } from "next-intl";

export interface ContactFormCopy {
  intro: string;
  address: string;
  mapAlt: string;
  pinLabel: string;
  labels: {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
  };
  placeholders: {
    name: string;
    email: string;
    phone: string;
    company: string;
    message: string;
  };
  validationError: string;
  successMessage: string;
  submitError: string;
  submit: string;
  submitting: string;
}

const defaultCopy: ContactFormCopy = {
  intro:
    "We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.",
  address: "Anas Bin Malik Street, Building 3141, Al Malqa District, Postal Code 13521, Additional Number 8292 - Kingdom of Saudi Arabia",
  mapAlt: "world map",
  pinLabel: "We are here",
  labels: {
    name: "Full name *",
    email: "Email Address *",
    phone: "Phone Number *",
    company: "Company *",
    message: "Message",
  },
  placeholders: {
    name: "John Doe",
    email: "john@doe.com",
    phone: "Your Phone Number",
    company: "Your Company",
    message: "Type your message here",
  },
  validationError: "Please fill in all required fields.",
  successMessage: "Thank you for contacting us! We'll get back to you soon.",
  submitError: "Failed to send message. Please try again later.",
  submit: "Submit",
  submitting: "Submitting...",
};

interface ContactFormGridWithDetailsProps {
  copy?: ContactFormCopy;
}

export function ContactFormGridWithDetails({
  copy = defaultCopy,
}: ContactFormGridWithDetailsProps) {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.company.trim() ||
      !formData.phone.trim()
    ) {
      setMessage({ type: "error", text: copy.validationError });
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    try {
      const result = await submitContactLead({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
      });

      if (result.success) {
        setMessage({ type: "success", text: copy.successMessage });
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
        });
      } else {
        setMessage({ type: "error", text: result.message });
      }
    } catch {
      setMessage({ type: "error", text: copy.submitError });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-4 py-10 md:px-12 md:py-20 lg:grid-cols-2">
      <div
        className={cn(
          "relative flex flex-col items-center overflow-hidden",
          isRtl ? "lg:items-end" : "lg:items-start",
        )}
      >
        <p
          dir={isRtl ? "rtl" : "ltr"}
          className={cn(
            "mt-8 max-w-lg text-center text-base text-neutral-600 dark:text-neutral-400",
            isRtl ? "md:text-right" : "md:text-left",
          )}
        >
          {copy.intro}
        </p>

        <div
          className={cn(
            "mt-10 hidden w-full max-w-lg flex-col gap-4 lg:flex",
            isRtl
              ? "self-end items-end text-right"
              : "self-start items-start text-left",
          )}
        >
          <p
            dir={isRtl ? "rtl" : "ltr"}
            className={cn(
              "flex w-full items-center gap-2 text-sm text-muted-foreground",
              isRtl ? "justify-start text-right" : "justify-start text-left",
            )}
          >
            <MapPin className="h-4 w-4 shrink-0" />
            <span>{copy.address}</span>
          </p>

          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={cn(
              "flex w-full flex-wrap items-center gap-2 md:gap-4",
              isRtl ? "justify-start text-right" : "justify-start text-left",
            )}
          >
            <Mail className="h-4 w-4 shrink-0" />
            <p className="text-sm text-muted-foreground" dir="ltr">
              helloksa@klaim.ai
            </p>
          </div>

          <div
            dir={isRtl ? "rtl" : "ltr"}
            className={cn(
              "flex w-full flex-wrap items-center gap-2 md:gap-4",
              isRtl ? "justify-start text-right" : "justify-start text-left",
            )}
          >
            <Phone className="h-4 w-4 shrink-0" />
            <p className="text-sm text-muted-foreground" dir="ltr">
              +966 568 154 527
            </p>
          </div>
        </div>
        <div className="div relative mt-20 flex w-[600px] flex-shrink-0 -translate-x-10 items-center justify-center [perspective:800px] [transform-style:preserve-3d] sm:-translate-x-0 lg:-translate-x-32">
          <Pin className="top-2 right-12" label={copy.pinLabel} />

          <Image
            src="/world.svg"
            width={500}
            height={500}
            alt={copy.mapAlt}
            className="[transform:rotateX(45deg)_translateZ(0px)] dark:invert dark:filter"
          />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        dir={isRtl ? "rtl" : "ltr"}
        className={cn(
          "relative mx-auto flex w-full max-w-2xl flex-col gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-gray-100 to-gray-200 p-4 sm:p-10 dark:from-neutral-900 dark:to-neutral-950",
          isRtl ? "items-end" : "items-start",
        )}
      >
        <Grid size={20} />
        <div className="relative z-20 mb-4 w-full">
          <label
            className={cn(
              "mb-2 inline-block w-full text-sm font-medium text-neutral-600 dark:text-neutral-300",
              isRtl ? "text-right" : "text-left",
            )}
            htmlFor="name"
          >
            {copy.labels.name}
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            disabled={isSubmitting}
            placeholder={copy.placeholders.name}
            className={cn(
              "shadow-input h-10 w-full rounded-md border border-transparent bg-white text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed",
              isRtl ? "pr-4 text-right" : "pl-4 text-left",
            )}
            required
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className={cn(
              "mb-2 inline-block w-full text-sm font-medium text-neutral-600 dark:text-neutral-300",
              isRtl ? "text-right" : "text-left",
            )}
            htmlFor="email"
          >
            {copy.labels.email}
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isSubmitting}
            placeholder={copy.placeholders.email}
            className={cn(
              "shadow-input h-10 w-full rounded-md border border-transparent bg-white text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed",
              isRtl ? "pr-4 text-right" : "pl-4 text-left",
            )}
            required
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className={cn(
              "mb-2 inline-block w-full text-sm font-medium text-neutral-600 dark:text-neutral-300",
              isRtl ? "text-right" : "text-left",
            )}
            htmlFor="phone"
          >
            {copy.labels.phone}
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={isSubmitting}
            placeholder={copy.placeholders.phone}
            className={cn(
              "shadow-input h-10 w-full rounded-md border border-transparent bg-white text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed",
              isRtl ? "pr-4 text-right" : "pl-4 text-left",
            )}
            required
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className={cn(
              "mb-2 inline-block w-full text-sm font-medium text-neutral-600 dark:text-neutral-300",
              isRtl ? "text-right" : "text-left",
            )}
            htmlFor="company"
          >
            {copy.labels.company}
          </label>
          <input
            id="company"
            type="text"
            value={formData.company}
            onChange={handleInputChange}
            disabled={isSubmitting}
            placeholder={copy.placeholders.company}
            className={cn(
              "shadow-input h-10 w-full rounded-md border border-transparent bg-white text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed",
              isRtl ? "pr-4 text-right" : "pl-4 text-left",
            )}
            required
          />
        </div>
        <div className="relative z-20 mb-4 w-full">
          <label
            className={cn(
              "mb-2 inline-block w-full text-sm font-medium text-neutral-600 dark:text-neutral-300",
              isRtl ? "text-right" : "text-left",
            )}
            htmlFor="message"
          >
            {copy.labels.message}
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            disabled={isSubmitting}
            placeholder={copy.placeholders.message}
            className={cn(
              "shadow-input w-full rounded-md border border-transparent bg-white pt-4 text-sm text-neutral-700 placeholder-neutral-500 outline-none focus:ring-2 focus:ring-neutral-800 focus:outline-none active:outline-none dark:border-neutral-800 dark:bg-neutral-800 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed",
              isRtl ? "pr-4 text-right" : "pl-4 text-left",
            )}
          />
        </div>
        {message && (
          <div
            className={`relative z-20 mb-4 w-full p-3 rounded-md text-sm ${
              message.type === "success"
                ? "bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800"
                : "bg-red-50 text-red-700 border border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800"
            }`}
          >
            {message.text}
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="relative z-10 flex items-center justify-center rounded-md border border-transparent bg-secondary px-4 py-2 text-sm font-medium text-white shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200 hover:bg-neutral-900 md:text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-secondary"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              {copy.submitting}
            </>
          ) : (
            copy.submit
          )}
        </button>
      </form>
    </div>
  );
}

const Pin = ({ className, label }: { className?: string; label: string }) => {
  return (
    <motion.div
      style={{ transform: "translateZ(1px)" }}
      className={cn(
        "pointer-events-none absolute z-[60] flex h-40 w-96 items-center justify-center opacity-100 transition duration-500",
        className,
      )}
    >
      <div className="h-full w-full">
        <div className="absolute inset-x-0 top-0 z-20 mx-auto inline-block w-fit rounded-lg bg-neutral-200 px-2 py-1 text-xs font-normal text-neutral-700 dark:bg-neutral-800 dark:text-white">
          {label}
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-secondary/0 via-secondary/90 to-secondary/0 transition-opacity duration-500"></span>
        </div>

        <div
          style={{
            perspective: "800px",
            transform: "rotateX(70deg) translateZ(0px)",
          }}
          className="absolute top-1/2 left-1/2 mt-4 ml-[0.09375rem] -translate-x-1/2 -translate-y-1/2"
        >
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 0 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-secondary/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-secondary/[0.2]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-secondary/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-secondary/[0.2]"
            ></motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0.5, 0],
                scale: 1,
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 4 }}
              className="absolute top-1/2 left-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-secondary/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)] dark:bg-secondary/[0.2]"
            ></motion.div>
          </>
        </div>

        <>
          <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-secondary/90 blur-[2px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 h-20 w-px translate-y-[14px] bg-gradient-to-b from-transparent to-secondary/90" />
          <motion.div className="absolute right-1/2 bottom-1/2 z-40 h-[4px] w-[4px] translate-x-[1.5px] translate-y-[14px] rounded-full bg-secondary/90 blur-[3px]" />
          <motion.div className="absolute right-1/2 bottom-1/2 z-40 h-[2px] w-[2px] translate-x-[0.5px] translate-y-[14px] rounded-full bg-secondary/90" />
        </>
      </div>
    </motion.div>
  );
};

export const FeatureIconContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-14 w-14 rounded-md bg-gradient-to-b from-gray-50 to-neutral-200 p-[4px] dark:from-neutral-800 dark:to-neutral-950",
        className,
      )}
    >
      <div
        className={cn(
          "relative z-20 h-full w-full rounded-[5px] bg-gray-50 dark:bg-neutral-800",
          className,
        )}
      >
        {children}
      </div>
      <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-neutral-600 opacity-50 blur-lg"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-secondary/90 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-secondary/90 to-transparent dark:h-[8px] dark:blur-sm"></div>
    </div>
  );
};

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/30 to-zinc-900/30 opacity-10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full fill-black/100 stroke-black/100 mix-blend-overlay dark:fill-white/100 dark:stroke-white/100"
        />
      </div>
    </div>
  );
};

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: string;
  y?: string;
  squares?: number[][];
}

export function GridPattern({
  width = 20,
  height = 20,
  x,
  y,
  squares,
  ...props
}: GridPatternProps) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: number[], idx: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${idx}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
