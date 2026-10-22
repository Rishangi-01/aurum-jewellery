
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { productSpecificationsData } from "@/data";

export default function ProductSpecifications() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="product-specifications"
      className="relative overflow-hidden bg-[#fbf9f5] px-4 py-8 sm:px-6 sm:py-8 lg:px-10 lg:py-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#c49a65]/10 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1.15fr_0.95fr] lg:gap-14">
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, x: -35 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full min-w-0"
        >
          <div className="mb-6 sm:mb-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#a77743]">
              {productSpecificationsData.eyebrow}
            </p>

            <h2 className="font-serif text-3xl font-medium tracking-tight text-[#24211e] sm:text-4xl lg:text-[42px]">
              {productSpecificationsData.heading}
            </h2>

            <motion.div
              initial={shouldReduceMotion ? false : { width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-4 h-[3px] bg-[#b88950]"
            />
          </div>

          <div className="overflow-hidden rounded-sm border border-[#e8e0d6] bg-white/60 shadow-[0_8px_35px_rgba(93,66,36,0.04)]">
            {productSpecificationsData.specifications.map((item, index) => (
              <motion.div
                key={item.label}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 12 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.055,
                }}
                className={`group grid grid-cols-1 transition-colors duration-300 hover:bg-[#f7f0e7] sm:grid-cols-[0.9fr_1.1fr] ${
                  index !== productSpecificationsData.specifications.length - 1
                    ? "border-b border-[#e8e0d6]"
                    : ""
                }`}
              >
                <div className="border-b border-[#eee7df] px-4 py-2.5 text-sm font-semibold text-[#292622] sm:border-b-0 sm:border-r sm:border-[#e8e0d6] sm:px-5 sm:py-4 sm:text-base lg:px-6 lg:text-[17px]">
                  {item.label}
                </div>

                <div className="px-4 py-2.5 text-sm leading-relaxed text-[#625d56] sm:px-5 sm:py-4 sm:text-base lg:px-6 lg:text-[17px]">
                  {item.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 20 }
          }
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            delay: shouldReduceMotion ? 0 : 0.15,
            ease: "easeOut",
          }}
          className="group relative w-full"
        >
          <div className="absolute -inset-2 rounded-sm border border-[#c9a475]/40 transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1 sm:-inset-3" />

          <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-[#eee6dc] sm:aspect-[1.04/1] lg:aspect-[1.02/1]">
            <Image
              src={productSpecificationsData.image.src}
              alt={productSpecificationsData.image.alt}
              fill
              priority={false}
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#4a3422]/10 via-transparent to-white/5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
