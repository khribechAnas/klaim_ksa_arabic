"use client";

import { Icons } from "@/components/icons";
import {
  Reasoning,
  ReasoningContent,
  ReasoningResponse,
} from "@/components/ui/reasoning";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ChatConversation {
  id: number;
  question: string;
  answer: string;
  avatar: string;
}

const conversations: ChatConversation[] = [
  {
    id: 1,
    question:
      "I'm a mid-sized clinic and 80% of our revenue is stuck in pending insurance claims. We're growing, but these delays are creating bottlenecks in operations and payroll. Do we qualify for instant payment services, and what would the onboarding look like for a team like ours?",
    answer:
      "You absolutely qualify. We work with providers of all sizes and specialize in unlocking approved claims in under 48 hours. There's no system change, no training needed. Onboarding is fully digital and takes less than 15 minutes. After that, you choose which claims to advance and when. It's that simple.",
    avatar: "https://randomuser.me/api/portraits/women/79.jpg",
  },
  {
    id: 2,
    question:
      "We invoice large corporate clients and are constantly waiting 45–90 days to get paid. We're profitable on paper but stretched day to day. Can Klaim provide working capital against these invoices, even if we're not in healthcare?",
    answer:
      "That's exactly what Klaim Flow was built for. If you invoice credible clients, we can advance a portion of that revenue within 24–48 hours. No debt. No hassle. Just upload the invoice and we'll handle the rest.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    question:
      "I just closed a big commission, but final payout could take weeks due to transfer and compliance. This delay is blocking me from marketing my next listings. Can I unlock my commission early?",
    answer:
      "You can. With Klaim Estate, we advance your commission as soon as the deal is verified — not weeks later. You get paid, reinvest in your pipeline, and stay ahead while the paperwork finishes in the background.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 4,
    question:
      "We're financially healthy, but I hate seeing working capital tied up in receivables while we rely on short-term credit lines. Is there a smarter way to finance without adding debt?",
    answer:
      "Yes. Klaim is not a loan or a credit facility. It's a working capital unlocker. We advance what you've already earned — whether claims, invoices, or commissions — without interest or fixed repayment schedules. That means more cash, less stress, and full control.",
    avatar: "https://randomuser.me/api/portraits/men/17.jpg",
  },
];

function ReasoningWithText({ text }: { text: string }) {
  return (
    <Reasoning>
      <ReasoningContent className="">
        <ReasoningResponse text={text} />
      </ReasoningContent>
    </Reasoning>
  );
}

export function FirstBentoAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [currentConversationIndex, setCurrentConversationIndex] = useState(0);
  const [conversationCycle, setConversationCycle] = useState(0);

  const currentConversation = conversations[currentConversationIndex];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isInView) {
      timeoutId = setTimeout(() => {
        setShouldAnimate(true);
      }, 1000);
    } else {
      setShouldAnimate(false);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView, conversationCycle]);

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setShouldAnimate(false);

      setTimeout(() => {
        setCurrentConversationIndex(
          (prev) => (prev + 1) % conversations.length,
        );
        setConversationCycle((prev) => prev + 1);
      }, 800); // Increased delay for smoother transition
    }, 8000); // Increased total cycle time to allow for longer viewing

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="w-full h-full p-4 flex flex-col items-center justify-center gap-5"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20"></div>
      <motion.div
        className="max-w-md mx-auto w-full flex flex-col gap-2"
        animate={{
          y: shouldAnimate ? -75 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <div className="flex items-end justify-end gap-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={`question-${currentConversation.id}`}
              className="max-w-[280px] bg-secondary text-white p-4 rounded-2xl ml-auto shadow-[0_0_10px_rgba(0,0,0,0.05)]"
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <p className="text-sm leading-relaxed">
                {currentConversation.question}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center bg-background rounded-full w-fit border border-border flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={`avatar-${currentConversation.id}`}
                src={currentConversation.avatar}
                alt="User Avatar"
                className="size-8 rounded-full flex-shrink-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <div className="flex items-center bg-background rounded-full size-10 flex-shrink-0 justify-center shadow-[0_0_10px_rgba(0,0,0,0.05)] border border-border">
            <Icons.logo className="size-4" />
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {!shouldAnimate ? (
                <motion.div
                  key="dots"
                  className="absolute left-0 top-0 bg-background p-4 rounded-2xl border border-border"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex gap-1">
                    {[0, 1, 2].map((index) => (
                      <motion.div
                        key={index}
                        className="w-2 h-2 bg-primary/50 rounded-full"
                        animate={{ y: [0, -5, 0] }}
                        transition={{
                          duration: 0.6,
                          repeat: Infinity,
                          delay: index * 0.2,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={`response-${currentConversation.id}`}
                  layout
                  className="absolute left-0 top-0 md:min-w-[300px] min-w-[220px] p-4 bg-accent border border-border rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                  initial={{ opacity: 0, x: 10, scale: 0.95 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, x: 20, scale: 0.95 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                >
                  <ReasoningWithText text={currentConversation.answer} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      {/* Conversation indicator dots */}
      <div className="flex gap-2 absolute bottom-4">
        {conversations.map((_, index) => (
          <motion.div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentConversationIndex
                ? "bg-primary"
                : "bg-primary/30"
            }`}
            animate={{
              scale: index === currentConversationIndex ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}
