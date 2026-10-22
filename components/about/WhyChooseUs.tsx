"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Gem,
  UsersRound,
  ShieldCheck,
  Headset,
  ArrowRight,
} from "lucide-react";
import { whyChooseUsData } from "@/data";

const featureIcons: Record<string, typeof Gem> = {
  gem: Gem,
  users: UsersRound,
  shield: ShieldCheck,
  support: Headset,
};

export default function WhyChooseUs() {
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
        duration: reduceMotion ? 0 : 0.75,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#faf7f2] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#d6b78a]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#b77851]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1500px]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[0.95fr_1.15fr_0.95fr] lg:gap-0">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative z-20 order-2 bg-white/95 px-6 py-8 shadow-[0_15px_60px_rgba(90,60,30,0.06)] sm:px-9 sm:py-10 lg:order-1 lg:-mr-8 lg:px-8 lg:py-10 xl:px-10"
          >
            <div className="space-y-2 sm:space-y-2">
              {whyChooseUsData.features.map((feature, index) => {
                const Icon = featureIcons[feature.icon];

                return (
                  <motion.div
                    key={feature.title}
                    initial={{
                      opacity: 0,
                      x: reduceMotion ? 0 : -20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.55,
                      delay: reduceMotion ? 0 : index * 0.12,
                    }}
                    className="group flex items-start gap-4 sm:gap-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#a87335] transition-all duration-300 group-hover:-translate-y-1 group-hover:text-[#75451f] sm:h-14 sm:w-14">
                      <Icon
                        size={39}
                        strokeWidth={1.35}
                        className="h-8 w-8 sm:h-9 sm:w-9"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="flex-1 border-b border-[#eadfd1] pb-3 last:border-0 sm:pb-3">
                      <h3 className="font-serif text-base uppercase tracking-[0.07em] text-[#302820] sm:text-lg">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-5 text-[#aba59e] sm:text-base sm:leading-6">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Central jewellery craftsmanship image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: reduceMotion ? 1 : 0.96,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease: "easeOut",
            }}
            className="group relative order-1 mx-auto h-[360px] w-full max-w-[580px] overflow-hidden bg-[#e7d5c2] sm:h-[500px] lg:order-2 lg:mx-0 lg:h-[600px] lg:max-w-none"
          >
            <Image
              src={whyChooseUsData.image.src}
              alt={whyChooseUsData.image.alt}
              fill
              priority={false}
              sizes="(max-width: 1023px) 100vw, 40vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-[1.045]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative z-20 order-3 bg-[#b47c5c] px-7 py-9 text-[#fffaf3] shadow-[0_20px_55px_rgba(90,50,30,0.12)] sm:px-10 sm:py-12 lg:-ml-8 lg:px-8 lg:py-10 xl:px-10 xl:py-14"
          >
            <div className="mb-7 h-[2px] w-16 bg-[#e3bd83] sm:mb-9 sm:w-20" />

            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#f3d6b3] sm:text-sm">
              {whyChooseUsData.eyebrow}
            </p>

            <h2 className="max-w-md font-serif text-4xl leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              {whyChooseUsData.headingFirstLine}
              <br />
              {whyChooseUsData.headingSecondLine}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/90 sm:mt-7 sm:text-base sm:leading-8">
              {whyChooseUsData.description}
            </p>

            {/* <motion.a
              href={whyChooseUsData.link.href}
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              className="group mt-7 inline-flex min-h-[54px] w-full items-center justify-between gap-5 border border-[#fff1df] px-5 py-3 font-serif text-base transition-colors duration-300 hover:bg-[#fffaf3] hover:text-[#8b5b3e] sm:mt-9 sm:w-auto sm:min-w-[245px] sm:px-6 sm:text-lg"
            >
              <span>{whyChooseUsData.link.label}</span>
              <ArrowRight
                size={21}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              />
            </motion.a> */}

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-4 right-5 font-serif text-7xl text-white/[0.08] sm:bottom-5 sm:right-7 sm:text-8xl"
            >
              {whyChooseUsData.monogram}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}