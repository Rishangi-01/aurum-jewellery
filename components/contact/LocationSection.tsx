
"use client";

import { motion } from "framer-motion";
import { Gem, MapPin, ExternalLink, Navigation } from "lucide-react";
import { locationSectionData } from "@/data";

export default function LocationSection() {
  return (
    <section className="relative overflow-hidden bg-[#fcfaf7] px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-8">
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#c28a42]/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#dfc6a5]/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 lg:mb-8"
        >
          <div className="mb-3 flex items-center justify-center gap-4">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 95 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent to-[#bd853a]"
            />

            <motion.div
            >
              <Gem
                className="h-7 w-7 text-[#b77b30]"
                strokeWidth={1.8}
              />
            </motion.div>

            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: 95 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px bg-gradient-to-l from-transparent to-[#bd853a]"
            />
          </div>

          <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#151b29] sm:text-5xl md:text-6xl">
            {locationSectionData.headingFirst}{" "}
            <span className="text-[#b77b30]">
              {locationSectionData.headingHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-[#777b85] sm:text-base sm:leading-8 md:text-lg lg:text-xl">
            {locationSectionData.description}
          </p>
        </motion.div>

        {/* Map container */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-sm border border-[#e7ddd0] bg-white shadow-[0_15px_50px_rgba(74,54,31,0.08)]"
        >

          <div className="relative h-[340px] w-full sm:h-[360px] md:h-[380px] lg:h-[400px] xl:h-[420px]">
            <iframe
              title={locationSectionData.mapTitle}
              src={locationSectionData.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />

            {/* Map action card */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute left-4 top-5 z-10 max-w-[calc(100%-2rem)] border border-[#eee4d7] bg-white/95 p-4 shadow-lg backdrop-blur-md sm:left-7 sm:top-7 sm:max-w-sm sm:p-6"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f7eee0]">
                  <MapPin
                    className="h-5 w-5 text-[#b77b30]"
                    strokeWidth={1.8}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-xl font-semibold text-[#171b29] sm:text-2xl">
                    {locationSectionData.showroomLabel}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#777b85]">
                    {locationSectionData.address}
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-[#eee5da] pt-4">
                <a
                  href={locationSectionData.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#b77b30] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition duration-300 hover:bg-[#915b20] sm:text-sm"
                >
                  <Navigation className="h-4 w-4" />
                  {locationSectionData.directionsLabel}
                </a>

                <a
                  href={locationSectionData.largerMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#9b672d] transition-colors hover:text-[#684019] sm:text-sm"
                >
                  {locationSectionData.largerMapLabel}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom address strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 flex flex-col items-start justify-between gap-3 border border-[#eee5da] bg-white/70 px-5 py-4 sm:flex-row sm:items-center sm:px-7"
        >
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 shrink-0 text-[#b77b30]" />

            <p className="text-sm leading-6 text-[#777b85]">
              <span className="font-semibold text-[#252936]">
                {locationSectionData.visitLabel}
              </span>{" "}
              {locationSectionData.address}
            </p>
          </div>

          <a
            href={locationSectionData.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#a86b25] transition-colors hover:text-[#704319]"
          >
            {locationSectionData.getDirectionsLabel}
            <Navigation className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
