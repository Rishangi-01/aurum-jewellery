"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { productDescriptionData } from "@/data";

export default function ProductDescription() {
  return (
    <section className="relative overflow-hidden bg-[#fcfaf7] px-5 py-8 sm:px-8 sm:py-8 lg:px-16 lg:py-8">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full border border-[#b78650]/10" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full border border-[#b78650]/10" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        {/* Product description */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.3em] text-[#ad7946]">
            {productDescriptionData.eyebrow}
          </span>

          <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#202020] sm:text-4xl lg:text-[42px]">
            {productDescriptionData.heading}
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 66 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 h-[3px] bg-gradient-to-r from-[#a66c32] to-[#e3c69c]"
          />

          <div className="mt-7 space-y-5 text-base leading-8 text-[#62605d] sm:text-lg sm:leading-[1.9]">
            {productDescriptionData.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* Key features card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative border border-[#b78650]/20 bg-white/60 p-6 shadow-[0_10px_40px_rgba(90,65,35,0.04)] sm:p-8 lg:p-10"
        >
          <div className="absolute left-0 top-0 h-12 w-[3px] bg-[#b78650]" />

          <h3 className="font-serif text-2xl font-semibold text-[#242424] sm:text-3xl">
            {productDescriptionData.featuresHeading}
          </h3>

          <div className="mt-7 space-y-5">
            {productDescriptionData.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: 0.2 + index * 0.1,
                }}
                className="group flex items-start gap-3.5"
              >
                <CheckCircle2
                  size={23}
                  strokeWidth={2}
                  className="mt-1 shrink-0 text-[#ad7946] transition-transform duration-300 group-hover:scale-110"
                />

                <p className="text-sm leading-7 text-[#454340] transition-colors duration-300 group-hover:text-[#a66c32] sm:text-base lg:text-lg">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}