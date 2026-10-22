
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { aboutHeroData } from "@/data";

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="about-heading"
      className="relative isolate flex min-h-[300px] items-center overflow-hidden bg-[#5c4636] sm:min-h-[430px] lg:min-h-[500px] xl:min-h-[465px]"
    >
      <motion.div
        className="absolute inset-0 -z-20"
        initial={{
          scale: reduceMotion ? 1 : 1.08,
          opacity: 0,
        }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: reduceMotion ? 0 : 1.5,
          ease,
        }}
      >
        <Image
          src={aboutHeroData.image.src}
          alt={aboutHeroData.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_center] sm:object-center"
        />
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#34251c]/75 via-[#463326]/45 to-[#39261b]/25" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#302218]/15 via-transparent to-[#302218]/10" />

      <div className="mx-auto w-full max-w-[1800px] px-6 py-16 sm:px-10 sm:py-20 lg:px-[7.5%] lg:py-24">
        <div className="max-w-[720px]">
          <motion.div
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 12,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: 0.15,
              ease,
            }}
            className="mb-5 flex w-fit items-center gap-4 sm:mb-7 sm:gap-6"
            aria-hidden="true"
          >
            <span className="h-px w-16 bg-[#c9a35d] sm:w-24 lg:w-28" />

            <svg
              viewBox="0 0 48 48"
              className="h-8 w-8 text-[#c9a35d] sm:h-10 sm:w-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M24 34C13 34 8 27 8 27s7-2 12 2c-1-9 4-19 4-19s5 10 4 19c5-4 12-2 12-2s-5 7-16 7Z" />
              <path d="M24 34V17M15 33h18M19 37h10" />
            </svg>

            <span className="h-px w-16 bg-[#c9a35d] sm:w-24 lg:w-28" />
          </motion.div>

          <motion.h1
            id="about-heading"
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 32,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              delay: 0.28,
              ease,
            }}
            className="font-serif text-[clamp(3.4rem,7vw,6.5rem)] leading-[1.04] tracking-[-0.045em] text-white"
          >
            {aboutHeroData.heading}
          </motion.h1>

          <motion.nav
            aria-label={aboutHeroData.breadcrumbLabel}
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduceMotion ? 0 : 0.75,
              delay: 0.48,
              ease,
            }}
            className="mt-6 sm:mt-8"
          >
            <ol className="flex flex-wrap items-center gap-3 font-serif text-xl sm:gap-5 sm:text-2xl lg:text-[34px]">
              <li>
                <Link
                  href={aboutHeroData.homeHref}
                  className="text-white/95 transition-colors duration-300 hover:text-[#e6c27f]"
                >
                  {aboutHeroData.homeLabel}
                </Link>
              </li>

              <li
                aria-hidden="true"
                className="font-light text-white/90"
              >
                /
              </li>

              <li
                aria-current="page"
                className="text-[#e2bd76]"
              >
                {aboutHeroData.currentLabel}
              </li>
            </ol>
          </motion.nav>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#c9a35d]/70 to-transparent" />
    </section>
  );
}
