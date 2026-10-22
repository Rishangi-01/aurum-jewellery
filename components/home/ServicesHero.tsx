
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicesHeroData } from "@/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServicesHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative isolate flex min-h-[440px] items-end justify-center overflow-hidden bg-[#251b16] text-white sm:min-h-[520px] lg:min-h-[min(680px,73svh)]"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: reduceMotion ? 1 : 1.07,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: reduceMotion ? 0 : 1.6,
          ease,
        }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src={servicesHeroData.image.src}
          alt={servicesHeroData.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 -z-10" />

      <div className="absolute inset-0 -z-10" />

      <div className="mx-auto flex w-full max-w-[1700px] flex-col items-center px-5 pb-10 lg:pb-10 text-center sm:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 18,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: 0.2,
            ease,
          }}
          className="flex items-center justify-center gap-4 sm:gap-6"
        >
          <span className="h-px w-8 bg-[#c4a064] sm:w-12 lg:w-14" />

          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#d9bd87] sm:text-xs sm:tracking-[0.4em]">
            {servicesHeroData.eyebrow}
          </span>

          <span className="h-px w-8 bg-[#c4a064] sm:w-12 lg:w-14" />
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 30,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.95,
            delay: 0.35,
            ease,
          }}
          className="mt-2 max-w-[1250px] font-serif text-[clamp(2.25rem,4vw,5.5rem)] leading-[1.12] tracking-[-0.045em] text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.2)] sm:mt-2"
        >
          {servicesHeroData.heading}
        </motion.h1>

        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            delay: 0.75,
            ease,
          }}
          className="mt-3 h-[2px] w-14 origin-center bg-[#c4a064] sm:mt-3 sm:w-20"
        />

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 18,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: 0.85,
            ease,
          }}
          className="mt-3 sm:mt-5"
        >
          <Link
            href={servicesHeroData.link.href}
            className="group relative inline-flex min-h-[50px] min-w-[200px] items-center justify-between gap-6 overflow-hidden border border-[#c4a064] bg-black/10 px-5 py-3.5 text-white backdrop-blur-[2px] transition-colors duration-300 hover:bg-[#a98549] sm:min-h-[45px] sm:min-w-[200px] sm:px-8"
          >
            <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-700 group-hover:translate-x-full" />

            <span className="relative text-[10px] font-medium uppercase tracking-[0.2em] sm:text-xs sm:tracking-[0.25em]">
              {servicesHeroData.link.label}
            </span>

            <ArrowRight
              size={20}
              strokeWidth={1.4}
              className="relative transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#c4a064]/70 to-transparent" />
    </section>
  );
}
