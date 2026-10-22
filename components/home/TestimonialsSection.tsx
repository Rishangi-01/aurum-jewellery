
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
} from "lucide-react";
import { testimonialsSectionData } from "@/data";

const INTERVAL = 4500;

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const previous = () => {
    setActive((current) =>
      (current - 1 + testimonialsSectionData.testimonials.length) %
      testimonialsSectionData.testimonials.length
    );
  };

  const next = () => {
    setActive((current) =>
      (current + 1) % testimonialsSectionData.testimonials.length
    );
  };

  useEffect(() => {
    if (paused || reduceMotion) return;

    const timer = window.setInterval(() => {
      setActive((current) =>
        (current + 1) % testimonialsSectionData.testimonials.length
      );
    }, INTERVAL);

    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const testimonial = testimonialsSectionData.testimonials[active];

  return (
    <section
      id="testimonials"
      aria-label={testimonialsSectionData.ariaLabel}
      className="relative overflow-hidden bg-[#f7f4f1] py-14 sm:py-20 lg:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (
          !event.currentTarget.contains(
            event.relatedTarget as Node | null
          )
        ) {
          setPaused(false);
        }
      }}
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-8 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-0 lg:px-[6%]">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 mx-auto w-full max-w-[535px] lg:mx-0 lg:-mr-5"
        >
          <div
            aria-hidden="true"
            className="absolute -left-3 top-7 h-full w-full rounded-xl bg-[#b89460] sm:-left-5 sm:top-10"
          />

          <div className="relative aspect-[0.88] overflow-hidden rounded-xl bg-[#e4d6c4]">
            <Image
              src={testimonialsSectionData.image.src}
              alt={testimonialsSectionData.image.alt}
              fill
              priority
              sizes="(max-width: 1023px) 90vw, 42vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-[#6e4d2b]/[0.05] mix-blend-multiply" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex min-h-[430px] flex-col items-center justify-center overflow-hidden bg-[#f1eae1] px-5 py-12 text-center sm:min-h-[450px] sm:px-10 lg:min-h-[510px] lg:px-12 xl:px-16"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-12 -right-10 select-none font-serif text-[240px] leading-none text-[#b89460]/[0.07]"
          >
            ❧
          </div>

          <div className="relative flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#b89460] sm:w-12" />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#a27d49] sm:text-xs sm:tracking-[0.38em]">
              {testimonialsSectionData.eyebrow}
            </span>
            <span className="h-px w-8 bg-[#b89460] sm:w-12" />
          </div>

          <h2 className="relative mt-5 font-serif text-[clamp(2rem,4vw,3.4rem)] leading-tight tracking-[-0.045em] text-[#182b3b]">
            {testimonialsSectionData.heading}
          </h2>

          <Quote
            aria-hidden="true"
            size={38}
            strokeWidth={0}
            fill="#b89460"
            className="relative mt-6 rotate-180"
          />

          <div
            className="relative mt-3 flex min-h-[145px] w-full max-w-[590px] flex-col items-center justify-center"
            aria-live="polite"
            aria-atomic="true"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={testimonial.id}
                initial={{
                  opacity: 0,
                  x: reduceMotion ? 0 : 25,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: reduceMotion ? 0 : -25,
                }}
                transition={{
                  duration: reduceMotion ? 0 : 0.4,
                }}
                className="w-full"
              >
                <p className="font-serif text-[15px] italic leading-[1.85] text-[#70685f] sm:text-base lg:text-[17px]">
                  {testimonial.quote}
                </p>

                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-[#c4a36c]/50 bg-[#dfd0bd] sm:h-[68px] sm:w-[68px]">
                    <Image
                      src={testimonial.image}
                      alt=""
                      fill
                      sizes="68px"
                      className="object-cover"
                    />
                  </div>

                  <div className="text-left">
                    <h3 className="font-serif text-xl leading-tight text-[#202a32] sm:text-2xl">
                      {testimonial.name}
                    </h3>

                    <p className="mt-1 font-serif text-sm italic text-[#7a7168] sm:text-base">
                      {testimonial.location}
                    </p>

                    <div
                      className="mt-1.5 flex gap-1 text-[#d59b28]"
                      aria-label={`${testimonial.rating} ${testimonialsSectionData.ratingLabel}`}
                    >
                      {Array.from(
                        { length: testimonial.rating },
                        (_, index) => (
                          <Star
                            key={index}
                            size={15}
                            strokeWidth={1}
                            fill="currentColor"
                            aria-hidden="true"
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={previous}
            aria-label={testimonialsSectionData.previousLabel}
            className="absolute left-3 top-[55%] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#c6a77b] text-[#a47e48] transition-all duration-300 hover:bg-[#b89460] hover:text-white sm:left-5 sm:h-11 sm:w-11 lg:left-6"
          >
            <ChevronLeft size={22} strokeWidth={1.4} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label={testimonialsSectionData.nextLabel}
            className="absolute right-3 top-[55%] flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#c6a77b] text-[#a47e48] transition-all duration-300 hover:bg-[#b89460] hover:text-white sm:right-5 sm:h-11 sm:w-11 lg:right-6"
          >
            <ChevronRight size={22} strokeWidth={1.4} />
          </button>

          <div className="relative mt-7 flex items-center justify-center gap-2.5">
            {testimonialsSectionData.testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`${testimonialsSectionData.showLabel} ${index + 1}`}
                aria-current={active === index ? "true" : undefined}
                onClick={() => setActive(index)}
                className={`h-3 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b89460] ${
                  active === index
                    ? "w-3 bg-[#b89460]"
                    : "w-3 bg-[#ded4c8] hover:bg-[#c8b292]"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
