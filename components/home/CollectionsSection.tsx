
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { collectionsSectionData } from "@/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CollectionsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="collections"
      className="relative isolate flex min-h-[500px] items-end justify-center overflow-hidden bg-[#82766b] text-white sm:min-h-[500px] lg:min-h-[min(750px,76svh)]"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: reduceMotion ? 1 : 1.08,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: reduceMotion ? 0 : 1.5,
          ease,
        }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src={collectionsSectionData.image.src}
          alt={collectionsSectionData.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] sm:object-center"
        />
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#34251c]/75 via-[#463326]/45 to-[#39261b]/25" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#302218]/15 via-transparent to-[#302218]/10" />

      <div className="mx-auto w-full px-5 pb-10 lg:pb-8 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: 0.2,
            ease,
          }}
          className="mx-auto flex max-w-[1050px] flex-col items-center"
        >
          <h1 className="font-serif text-[clamp(3.2rem,8.2vw,7rem)] leading-[1.05] tracking-[-0.055em] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.12)]">
            {collectionsSectionData.heading}
          </h1>

          <motion.span
            initial={{ width: 0 }}
            animate={{ width: reduceMotion ? 48 : 64 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: 0.75,
              ease,
            }}
            className="mt-3 block h-[2px] bg-[#c5a366] sm:mt-3"
          />

          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: 0.55,
              ease,
            }}
            className="mt-5 text-[9px] font-medium uppercase tracking-[0.24em] text-white/95 sm:mt-5 sm:text-xs sm:tracking-[0.38em] md:text-sm"
          >
            {collectionsSectionData.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: 0.8,
              ease,
            }}
            className="mt-5 sm:mt-3"
          >
            <Link
              href={collectionsSectionData.link.href}
              className="group relative inline-flex min-h-[48px] min-w-[190px] items-center justify-center gap-5 overflow-hidden border border-[#c5a366] bg-black/10 px-6 py-3 text-white backdrop-blur-[2px] transition-colors duration-300 hover:bg-[#b18c4c] sm:min-h-[56px] sm:min-w-[228px] sm:gap-6"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative text-[10px] font-medium uppercase tracking-[0.13em] sm:text-xs">
                {collectionsSectionData.link.label}
              </span>

              <ArrowRight
                size={20}
                strokeWidth={1.3}
                className="relative transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/20" />
    </section>
  );
}
