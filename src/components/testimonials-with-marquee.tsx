"use client";

import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

interface TestimonialsSectionProps {
  videoSrc: string;
  thumbnailSrc?: string;
  className?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Klaim makes it easy for us to run our business. No more waiting for the insurance reimbursement for months.",
    author: "Anas Walid Chenno",
    company: "Infiniti Medical Center"
  },
  {
    quote: "Bank turnaround time was too complex and long. Klaim's seamless end to end process took less than a week",
    author: "Mr. Raj K.V",
    company: "Life Works Compassionate Health"
  },
  {
    quote: "We started facing some cash flow delays and Klaim came in with an immediate resolution",
    author: "Dr. Zain Akasier",
    company: "Al Mazroui Medical Centre"
  },
  {
    quote: "Worrying about payment delays is a thing of the past. Klaim helped us concentrate on the quality of our medical services",
    author: "Jeslin Saju",
    company: "Transform Specialist Medical Center"
  }
];

export function TestimonialsSection({
  videoSrc,
  thumbnailSrc,
  className,
}: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className={cn(
        "flex flex-col items-center justify-center gap-16 w-full relative px-6",
        className
      )}
    >
      <SectionHeader>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
          What Our Customers Say
        </h2>
        <p className="text-muted-foreground text-center text-balance font-medium">
          Hear from our customers about their experience with Klaim Health.
        </p>
      </SectionHeader>

      <div className="w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center rounded-xl mb-12">
          {/* Video Section */}
          <div className="relative rounded-xl">
            <HeroVideoDialog
              videoSrc={videoSrc}
              thumbnailSrc={thumbnailSrc}
              thumbnailAlt={`${currentTestimonial.author} testimonial video`}
              animationStyle="from-center"
              className="w-full rounded-xl"
            />
          </div>

          {/* Quote Section */}
          <div className="flex flex-col gap-6">
            <div className="relative min-h-[200px] flex items-center">
              <svg
                className="absolute -top-4 -left-4 h-8 w-8 text-primary/20"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.1, 0.25, 1] 
                  }}
                  className="text-xl md:text-2xl font-medium leading-relaxed text-balance"
                >
                  &ldquo;{currentTestimonial.quote}&rdquo;
                </motion.blockquote>
              </AnimatePresence>
            </div>
            
            <div className="flex flex-col gap-1">
              <AnimatePresence mode="wait">
                <motion.cite
                  key={`author-${currentIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.1
                  }}
                  className="not-italic font-semibold text-lg"
                >
                  {currentTestimonial.author}
                </motion.cite>
              </AnimatePresence>
              
              <AnimatePresence mode="wait">
                <motion.p
                  key={`company-${currentIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: 0.2
                  }}
                  className="text-muted-foreground font-medium"
                >
                  {currentTestimonial.company}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Dots indicator */}
            <div className="flex gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex 
                      ? "bg-primary scale-125" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
