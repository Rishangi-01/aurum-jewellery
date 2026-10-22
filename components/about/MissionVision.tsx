
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { missionVisionData } from "@/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function MissionVision() {
  const reduceMotion = useReducedMotion();

  const revealLeft = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : -35,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.85,
        ease,
      },
    },
  };

  const revealRight = {
    hidden: {
      opacity: 0,
      x: reduceMotion ? 0 : 35,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.85,
        ease,
      },
    },
  };

  return (
    <section
      aria-label={missionVisionData.ariaLabel}
      className="relative isolate overflow-hidden bg-[#faf7f2] px-5 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-12 xl:px-[3%] xl:py-6"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 bottom-4 -z-10 h-44 w-44 rounded-full border border-[#c49a60]/15 sm:h-64 sm:w-64"
      />

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:grid-cols-[0.95fr_1.2fr_0.95fr] lg:gap-x-6 xl:gap-x-6">
        <motion.div
          variants={revealLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative order-2 flex flex-col md:order-1 lg:order-1 lg:px-8"
        >
          <motion.div
            whileHover={
              reduceMotion ? undefined : { y: -5 }
            }
            transition={{ duration: 0.4, ease }}
            className="relative mb-8 aspect-[1.35/1] w-full overflow-hidden sm:mb-10"
          >
            <Image
              src={missionVisionData.missionImage.src}
              alt={missionVisionData.missionImage.alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 30vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </motion.div>

          <SectionLabel>{missionVisionData.sectionLabel}</SectionLabel>

          <h2 className="mt-2 font-serif text-5xl leading-tight tracking-[-0.045em] text-[#9c6836] sm:text-6xl xl:text-[76px]">
            {missionVisionData.missionHeading}
          </h2>

          <p className="mt-4 max-w-[390px] text-[15px] leading-[1.75] tracking-[0.015em] text-[#68645f] sm:text-base">
            {missionVisionData.mission}
          </p>

          <div
            aria-hidden="true"
            className="mt-7 h-px w-20 bg-[#c6a16b]/70"
          />
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: reduceMotion ? 0 : 35,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: reduceMotion ? 0 : 1,
            delay: 0.12,
            ease,
          }}
          className="relative order-1 mx-auto w-full max-w-[480px] md:order-2 lg:order-2 lg:pt-[94px] lg:px-16"
        >
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : { y: [0, -8, 0] }
            }
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-2 -top-8 z-10 h-20 w-20 rounded-full border-2 border-[#c49a60]/65 sm:-right-4 sm:top-9 sm:h-24 sm:w-24 lg:right-25 lg:top-12 lg:h-25 lg:w-25"
          />

          <div className="relative aspect-[0.68/1] w-full overflow-hidden border-x-2 border-x-[#b89a68]/60 bg-[#e8ded2]">
            <Image
              src={missionVisionData.centerImage.src}
              alt={missionVisionData.centerImage.alt}
              fill
              priority={false}
              sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 36vw"
              className="object-cover object-center transition-transform duration-1000 hover:scale-[1.025]"
            />
          </div>

        </motion.div>

        <motion.div
          variants={revealRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative order-3 flex flex-col md:col-span-2 md:order-3 md:grid md:grid-cols-2 md:items-center md:gap-8 lg:col-span-1 lg:grid-cols-1 lg:gap-0 lg:mt-[198px] lg:px-8"
        >
          <div>
            <SectionLabel>{missionVisionData.sectionLabel}</SectionLabel>

            <h2 className="mt-2 font-serif text-5xl leading-tight tracking-[-0.045em] text-[#9c6836] sm:text-6xl xl:text-[76px]">
              {missionVisionData.visionHeading}
            </h2>

            <p className="mt-4 max-w-[390px] text-[15px] leading-[1.75] tracking-[0.015em] text-[#68645f] sm:text-base">
              {missionVisionData.vision}
            </p>
          </div>

          <motion.div
            whileHover={
              reduceMotion ? undefined : { y: -5 }
            }
            transition={{ duration: 0.4, ease }}
            className="relative mt-8 aspect-[1.45/1] w-full overflow-hidden md:mt-0 lg:mt-10"
          >
            <Image
              src={missionVisionData.visionImage.src}
              alt={missionVisionData.visionImage.alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 30vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </motion.div>
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[32%] top-1/2 hidden -translate-y-1/2 text-2xl text-[#c7a064] lg:block"
      >
        ✦
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-2/3 top-1/2 hidden -translate-y-1/2 text-2xl text-[#c7a064] lg:block"
      >
        ✦
      </div>
    </section>
  );
}

function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 text-sm font-medium tracking-[0.16em] text-[#77716b]">
      <span>{children}</span>
      <span className="h-px w-20 bg-[#c49a60]/80" />
    </div>
  );
}
