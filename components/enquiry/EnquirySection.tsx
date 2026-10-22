
"use client";

import { motion } from "framer-motion";
import {
  Gem,
  Phone,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { enquirySectionData } from "@/data";

export default function EnquirySection() {
  return (
    <section
      id="enquiry"
      className="relative overflow-hidden bg-[#fcfaf7] px-4 py-12 sm:px-6 sm:py-12 lg:px-8 lg:py-12"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-52 h-80 w-80 rounded-full bg-[#c18a45]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#d9b783]/15 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1500px]">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-5xl text-center sm:mb-14"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 90 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-px bg-gradient-to-r from-transparent to-[#bd853a]"
            />

            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Gem
                className="h-7 w-7 text-[#b77b30]"
                strokeWidth={1.6}
              />
            </motion.div>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 90 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="h-px bg-gradient-to-l from-transparent to-[#bd853a]"
            />
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#b77b30] sm:text-sm">
            {enquirySectionData.eyebrow}
          </p>

          <h2 className="font-serif text-4xl leading-[1.12] tracking-tight text-[#151b29] sm:text-4xl md:text-4xl lg:text-5xl">
            {enquirySectionData.headingFirst}{" "}
            <span className="text-[#b77b30]">
              {enquirySectionData.headingHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-4xl text-sm leading-7 text-[#747987] sm:text-base sm:leading-8 md:text-lg">
            {enquirySectionData.description}
          </p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 95 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 h-0.5 bg-[#bd853a]"
          />
        </motion.div>

        {/* Image and overlapping assistance card */}
        <div className="relative mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full overflow-hidden rounded-sm bg-[#eee2d1] lg:w-[65%]"
          >
            <div className="aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:aspect-[1.75/1]">
              <motion.img
                src={enquirySectionData.image.src}
                alt={enquirySectionData.image.alt}
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-[100%] w-[100%] object-cover object-center"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#382313]/15 via-transparent to-transparent" />
          </motion.div>

          {/* Assistance card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 mx-3 -mt-8 border border-[#eee1d1] bg-[#fffdfa]/95 p-5 shadow-[0_20px_60px_rgba(76,48,22,0.12)] backdrop-blur-md sm:mx-8 sm:-mt-12 sm:p-8 md:p-10 lg:absolute lg:right-0 lg:top-1/2 lg:mx-0 lg:mt-0 lg:w-[48%] lg:-translate-y-1/2 lg:p-8 xl:w-[47%] xl:p-10"
          >
            <div className="mb-6">
              <div className="mb-4 h-0.5 w-14 bg-[#bd853a]" />

              <h3 className="font-serif text-3xl leading-tight text-[#151b29] sm:text-4xl md:text-5xl">
                {enquirySectionData.assistanceHeading}
              </h3>

              <p className="mt-4 text-sm leading-6 text-[#747987] sm:text-base sm:leading-7">
                {enquirySectionData.assistanceDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
              {/* Call us */}
              <motion.a
                href={enquirySectionData.phoneUrlTemplate.replace(
                  "{number}",
                  enquirySectionData.phoneNumber
                )}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-start gap-3 border-b border-[#eadfce] pb-5 transition-colors sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4"
              >
                <span className="flex h-12 w-12 lg:h-11 lg:w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d9b783] to-[#ae742e] text-white shadow-md transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 lg:h-5 lg:w-5" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1 font-serif text-lg text-[#171b29] sm:text-xl">
                    {enquirySectionData.callLabel}
                    <ArrowUpRight className="h-4 w-4 text-[#b77b30] opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>

                  <span className="mt-1 block break-words font-serif text-base text-[#252936] sm:text-lg">
                    {enquirySectionData.phoneDisplay}
                  </span>

                  <span className="mt-2 block text-xs leading-5 text-[#777b85] sm:text-sm">
                    {enquirySectionData.businessHours}
                  </span>
                </span>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href={enquirySectionData.whatsappUrlTemplate
                  .replace("{number}", enquirySectionData.whatsappNumber)
                  .replace(
                    "{message}",
                    encodeURIComponent(enquirySectionData.whatsappMessage)
                  )}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-start gap-3"
              >
                <span className="flex h-12 w-12 lg:h-11 lg:w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d9b783] to-[#ae742e] text-white shadow-md transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14">
                  <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 lg:h-6 lg:w-6" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-1 font-serif text-lg text-[#171b29] sm:text-xl">
                    {enquirySectionData.whatsappLabel}
                    <ArrowUpRight className="h-4 w-4 text-[#b77b30] opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>

                  <span className="mt-1 block break-words font-serif text-base text-[#252936] sm:text-lg">
                    {enquirySectionData.whatsappDisplay}
                  </span>

                  <span className="mt-2 block text-xs leading-5 text-[#777b85] sm:text-sm">
                    {enquirySectionData.whatsappResponse}
                  </span>
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
