"use client";

import { SectionHeader } from "@/components/section-header";
import { ContactFormGridWithDetails } from "@/components/flow/contact-form";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full relative px-6"
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
          Contact us
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          Contact us and let us know how we can help you.
        </p>
      </SectionHeader>
      <ContactFormGridWithDetails />
    </section>
  );
}
