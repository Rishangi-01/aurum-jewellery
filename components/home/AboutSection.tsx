
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { aboutSectionData } from "@/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-[#faf7f2] py-20 text-[#171717] sm:py-16 lg:min-h-[650px] lg:py-16 xl:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#dfc9a7]/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-0 -z-10 h-[350px] w-[350px] rounded-full bg-[#e6d9c8]/30 blur-[100px]"
      />

      <div className="mx-auto grid max-w-[1700px] grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:px-[7%] xl:gap-16 xl:px-[7.1%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative z-10 max-w-[680px]"
        >
          <motion.div
            variants={reveal}
            className="mb-7 flex items-center gap-4 sm:mb-9"
          >
            <span className="h-[2px] w-12 bg-[#b49662] sm:w-16" />

            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#9a7b47] sm:text-xs sm:tracking-[0.4em]">
              {aboutSectionData.label}
            </span>

            <span className="h-px w-7 bg-[#b49662]/60 sm:w-10" />
          </motion.div>

          <motion.h2
            variants={reveal}
            className="font-serif text-[clamp(3rem,5vw,5.8rem)] leading-[0.99] tracking-[-0.055em] text-[#171717]"
          >
            {aboutSectionData.headingFirstLine}
            <br />
            <span className="text-[#171717]">
              {aboutSectionData.headingSecondLine}
            </span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="mt-3 max-w-[620px] text-[15px] leading-[1.8] text-[#77736e] sm:mt-8 sm:text-base lg:max-w-[590px] xl:text-[17px]"
          >
            {aboutSectionData.description}
          </motion.p>

          <motion.div variants={reveal} className="mt-5 sm:mt-7">
            <Link
              href={aboutSectionData.storyLink.href}
              className="group relative inline-flex min-h-[56px] items-center justify-between gap-7 overflow-hidden bg-[#a98549] px-6 py-4 text-white transition-colors duration-300 hover:bg-[#8e6d37] sm:min-w-[280px] sm:px-8"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative font-serif text-base sm:text-lg">
                {aboutSectionData.storyLink.label}
              </span>

              <ArrowRight
                size={22}
                strokeWidth={1.4}
                className="relative shrink-0 transition-transform duration-300 group-hover:translate-x-2"
              />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            x: reduceMotion ? 0 : 35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            ease,
          }}
          className="relative mx-auto w-full max-w-[650px] lg:ml-auto lg:mr-0"
        >
          <div className="relative ml-auto w-[68%]">
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-full w-full border-2 border-[#b89a68]/60 sm:-right-5 sm:-top-5"
            />

            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.015 }}
              transition={{ duration: 0.5, ease }}
              className="relative aspect-[0.83] overflow-hidden bg-[#e3d8ca]"
            >
              <Image
                src={aboutSectionData.images[0].src}
                alt={aboutSectionData.images[0].alt}
                fill
                sizes="(max-width: 1023px) 75vw, 40vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-[#8c6b47]/[0.06] mix-blend-multiply" />
            </motion.div>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 28,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: reduceMotion ? 0 : 0.25,
              duration: reduceMotion ? 0 : 0.85,
              ease,
            }}
            className="relative z-10 -mt-[60%] w-[60%] max-w-[430px]"
          >
            <div
              aria-hidden="true"
              className="absolute -bottom-3 -left-3 h-full w-full border-2 border-[#b89a68]/70 sm:-bottom-5 sm:-left-5"
            />

            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.025 }}
              transition={{ duration: 0.5, ease }}
              className="relative aspect-[0.91] overflow-hidden bg-[#d9c3a9]"
            >
              <Image
                src={aboutSectionData.images[1].src}
                alt={aboutSectionData.images[1].alt}
                fill
                sizes="(max-width: 1023px) 60vw, 32vw"
                className="object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
