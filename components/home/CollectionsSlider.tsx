
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { collectionsSliderData } from "@/data";

const AUTO_SLIDE_INTERVAL = 4500;

export default function CollectionsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const move = useCallback((direction: number) => {
    setActiveIndex((current) => {
      return (
        (current + direction + collectionsSliderData.collections.length) %
        collectionsSliderData.collections.length
      );
    });
  }, []);

  const next = useCallback(() => move(1), [move]);
  const previous = useCallback(() => move(-1), [move]);

  // Automatic infinite carousel
  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const timer = window.setInterval(
      next,
      AUTO_SLIDE_INTERVAL
    );

    return () => window.clearInterval(timer);
  }, [isPaused, next, reduceMotion]);

  // Reorder cards cyclically without cloning DOM elements
  const orderedCollections = collectionsSliderData.collections.map(
    (_, position) =>
      collectionsSliderData.collections[
        (activeIndex + position) % collectionsSliderData.collections.length
      ]
  );

  const cardVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? 45 : -45,
    }),
    center: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? -45 : 45,
      transition: {
        duration: reduceMotion ? 0 : 0.3,
      },
    }),
  };

  // Desktop layout mirrors the staggered reference design.
  const verticalPositions = [
    "lg:mt-0",
    "lg:mt-[94px]",
    "lg:mt-[198px]",
  ];

  return (
    <section
      aria-label={collectionsSliderData.ariaLabel}
      className="overflow-hidden bg-[#f7f3ee] py-16 sm:py-20 lg:py-12"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget as Node | null
          )
        ) {
          setIsPaused(false);
        }
      }}
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-[7.7%]">
        {/* Controls */}
        <div className="mb-8 flex justify-end gap-3 lg:mb-0">
          <button
            type="button"
            onClick={previous}
            aria-label={collectionsSliderData.previousLabel}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#282828] text-[#282828] transition-all duration-300 hover:border-[#b28d50] hover:bg-[#b28d50] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b28d50]"
          >
            <ChevronLeft size={21} strokeWidth={1.5} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label={collectionsSliderData.nextLabel}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#282828] text-[#282828] transition-all duration-300 hover:border-[#b28d50] hover:bg-[#b28d50] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b28d50]"
          >
            <ChevronRight size={21} strokeWidth={1.5} />
          </button>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-[7%]"
          initial={false}
          drag={undefined}
        >
          <AnimatePresence
            initial={false}
            custom={1}
            mode="popLayout"
          >
            {orderedCollections.map((item, index) => (
              <motion.article
                key={item.id}
                custom={1}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                layout={!reduceMotion}
                transition={{
                  layout: {
                    duration: reduceMotion ? 0 : 0.45,
                  },
                }}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                className={`group mx-auto w-full max-w-[360px] overflow-hidden sm:max-w-none ${verticalPositions[index]}`}
              >
                <Link
                  href={item.href}
                  aria-label={`${collectionsSliderData.exploreLabel} ${item.title}`}
                  className="relative block aspect-[0.84] overflow-hidden bg-[#e7ddd0]"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 639px) 90vw, (max-width: 1023px) 43vw, 30vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.04]" />
                </Link>

                {/* Text panel */}
                <div className="flex min-h-[168px] flex-col items-center bg-gradient-to-b from-[#f8f4ee] to-[#f2ece4] px-4 py-6 text-center sm:min-h-[180px] sm:px-5">
                  <h3 className="font-serif text-[25px] leading-tight tracking-[-0.04em] text-[#24211e] sm:text-[27px]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-[270px] text-[12px] leading-[1.7] text-[#77716b] sm:text-[13px]">
                    {item.description}
                  </p>

                  <Link
                    href={item.href}
                    className="group/button mt-4 inline-flex min-h-[34px] w-full max-w-[220px] items-center justify-between gap-3 border border-[#b99a69] px-4 py-2 text-[9px] font-medium uppercase tracking-[0.14em] text-[#28231c] transition-all duration-300 hover:bg-[#b18b4e] hover:text-white sm:mt-4"
                  >
                    <span>{collectionsSliderData.viewCollectionLabel}</span>
                    <ArrowRight
                      size={15}
                      strokeWidth={1.4}
                      className="transition-transform duration-300 group-hover/button:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
