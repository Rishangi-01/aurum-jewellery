
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Minus } from "lucide-react";
import { heroSectionData } from "@/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.85,
        ease,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-[480px] overflow-hidden text-[#202126] sm:min-h-[650px] lg:min-h-[min(610px,calc(135svh-100px))] lg:h-[min(780px,calc(100svh-100px))] lg:max-h-[550px]"
    >
      
      <motion.div
        initial={{
          opacity: 0,
          scale: shouldReduceMotion ? 1 : 1.06,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: shouldReduceMotion ? 0 : 1.5,
          ease,
        }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src={heroSectionData.image.src}
          alt={heroSectionData.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-[60%_center] lg:object-center"
        />
      </motion.div>

      <div className="absolute inset-0 -z-10" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#8b7967]/[0.06] mix-blend-multiply" />

      <div className="mx-auto flex h-full min-h-[480px] max-w-[1800px] items-center px-6 py-20 sm:min-h-[650px] sm:px-10 lg:min-h-0 lg:px-[7.2%] lg:py-16">
        <div className="w-full max-w-[600px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.2 }}
            className="mb-6 flex items-center gap-5 sm:mb-7"
          >
            <span className="text-[10px] font-medium uppercase tracking-[0.32em] sm:text-xs sm:tracking-[0.38em]">
              {heroSectionData.eyebrow}
            </span>

            <span className="h-px w-16 bg-[#49443e]/80 sm:w-24" />
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.35 }}
            className="font-serif text-[clamp(3.4rem,7.3vw,6.5rem)] leading-[0.94] tracking-[-0.065em] text-[#202126]"
          >
            {heroSectionData.headingFirstLine}
            <br />
            <span className="whitespace-nowrap">
              {heroSectionData.headingSecondLine}
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.55 }}
            className="mt-7 max-w-[460px] text-[10px] font-medium uppercase leading-6 tracking-[0.22em] text-[#383633] sm:text-xs sm:tracking-[0.28em]"
          >
            {heroSectionData.description}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={reveal}
            transition={{ delay: 0.7 }}
            className="mt-7 sm:mt-8"
          >
            <Link
              href={heroSectionData.link.href}
              className="group relative inline-flex min-h-[48px] items-center gap-3 overflow-hidden bg-white px-5 py-3 transition-colors duration-300 hover:bg-[#c6a46c] sm:min-h-[54px] sm:gap-4 sm:px-6"
            >
              <Minus
                size={19}
                strokeWidth={1}
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              />

              <span className="relative text-[10px] font-semibold uppercase tracking-[0.24em] sm:text-[11px]">
                {heroSectionData.link.label}
              </span>

              <ArrowRight
                size={19}
                strokeWidth={1.4}
                className="ml-1 transition-transform duration-300 group-hover:translate-x-1.5"
              />

              <span className="absolute inset-0 -translate-x-full bg-white/30 transition-transform duration-700 group-hover:translate-x-full" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/50" />
    </section>
  );
}
