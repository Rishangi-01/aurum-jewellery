
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqSectionData } from "@/data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faqs"
      className="relative overflow-hidden bg-[#fcf9f4] px-4 py-12 sm:px-6 sm:py-12 lg:px-8 lg:py-12"
    >
      {/* Subtle decorative background */}
      <div className="pointer-events-none absolute -left-24 -top-20 h-64 w-64 rounded-full bg-[#bd8748]/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#bd8748]/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-8 text-center sm:mb-10"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-20 max-w-[22%] bg-[#b77b37]" />
            <motion.span
              animate={{ rotate: [0, 45, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-2xl leading-none text-[#a96620]"
              aria-hidden="true"
            >
              ◇
            </motion.span>
            <span className="h-px w-20 max-w-[22%] bg-[#b77b37]" />
          </div>

          <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-[#142236] sm:text-4xl md:text-5xl lg:text-6xl">
            {faqSectionData.headingFirst}{" "}
            <span className="text-[#a76619]">
              {faqSectionData.headingHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#69717b] sm:text-base lg:text-xl sm:leading-7">
            {faqSectionData.description}
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="space-y-2.5 sm:space-y-3">
          {faqSectionData.items.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.045, 0.25),
                  ease: "easeOut",
                }}
                className={`overflow-hidden rounded-lg border transition-colors duration-300 ${
                  isOpen
                    ? "border-[#c18a4e] bg-white shadow-[0_5px_20px_rgba(112,75,35,0.06)]"
                    : "border-[#e6dbce] bg-white/25 hover:border-[#c7a27b]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  className="group flex min-h-[55px] w-full items-center justify-between gap-4 px-4 py-4 text-left sm:min-h-[56px] sm:px-6"
                >
                  <span
                    className={`font-serif text-base leading-6 transition-colors duration-300 sm:text-lg lg:text-xl ${
                      isOpen
                        ? "text-[#a76619]"
                        : "text-[#172337] group-hover:text-[#a76619]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen
                        ? "border-[#b77835] bg-[#b77835] text-white"
                        : "border-[#c9965d] text-[#a76619] group-hover:bg-[#b77835] group-hover:text-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus size={16} strokeWidth={1.8} />
                    ) : (
                      <Plus size={16} strokeWidth={1.8} />
                    )}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.35, ease: "easeInOut" },
                        opacity: { duration: 0.25 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="mx-4 border-t border-[#eee3d7] sm:mx-6" />
                      <p className="px-4 pb-5 pt-3 text-sm leading-7 text-[#626873] sm:px-6 sm:pb-6 sm:text-[15px] lg:text-[16px]">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
