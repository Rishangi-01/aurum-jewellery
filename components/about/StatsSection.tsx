
"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import {
  Gem,
  Store,
} from "lucide-react";
import { useRef } from "react";
import { PiUsersThree } from "react-icons/pi";
import { GiBigDiamondRing } from "react-icons/gi";
import type { ElementType } from "react";
import { statsSectionData } from "@/data";

const statIcons: Record<string, ElementType> = {
  gem: Gem,
  users: PiUsersThree,
  diamondRing: GiBigDiamondRing,
  store: Store,
};

const ease = [0.22, 1, 0.36, 1] as const;

function AnimatedCounter({
  value,
  suffix,
  active,
  reducedMotion,
}: {
  value: number;
  suffix: string;
  active: boolean;
  reducedMotion: boolean | null;
}) {
  const [count, setCount] = useState(
    reducedMotion ? value : 0
  );

  useEffect(() => {
    if (!active) return;

    if (reducedMotion) {
      setCount(value);
      return;
    }

    let frame = 0;
    let animationFrame = 0;
    const duration = 1800;
    let startTime: number | null = null;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      // Smooth ease-out counter animation.
      const eased = 1 - Math.pow(1 - progress, 4);
      frame = Math.round(eased * value);
      setCount(frame);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [active, value, reducedMotion]);

  return (
    <span>
      {count.toLocaleString(statsSectionData.locale)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.2,
  });
  const reducedMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      aria-label={statsSectionData.ariaLabel}
      className="relative isolate overflow-hidden px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `url('${statsSectionData.backgroundImage}')`,
          }}
        />
      </div>

      <div className="absolute inset-0 -z-10" />

      <div className="mx-auto max-w-[980px]">
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-0">
          {statsSectionData.stats.map((stat, index) => {
            const Icon = statIcons[stat.icon];

            return (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 28,
                  scale: reducedMotion ? 1 : 0.94,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }
                    : undefined
                }
                transition={{
                  duration: reducedMotion ? 0 : 0.75,
                  delay: reducedMotion
                    ? 0
                    : index * 0.13,
                  ease,
                }}
                className="group relative flex aspect-square w-full max-w-[300px] items-center justify-center rounded-full border-2 border-[#c7a16b]/65 bg-white/10 transition-colors duration-500 hover:bg-white/30 sm:max-w-[320px] lg:-mr-px lg:max-w-none lg:min-h-[280px] lg:min-w-[280px]"
              >
                {/* Circle hover accent */}
                <div className="pointer-events-none absolute inset-2 rounded-full border border-transparent transition-all duration-500 group-hover:inset-3 group-hover:border-[#c7a16b]/40" />

                <div className="relative z-10 flex flex-col items-center px-3 text-center">
                  {/* Icon */}
                  <motion.div
                    animate={
                      isInView && !reducedMotion
                        ? { y: [0, -4, 0] }
                        : undefined
                    }
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    className="mb-5 text-[#b47a30] sm:mb-6"
                  >
                    <Icon
                      size={43}
                      strokeWidth={1.35}
                      className="h-9 w-9 sm:h-11 sm:w-11"
                      aria-hidden="true"
                    />
                  </motion.div>

                  {/* Animated number */}
                  <div className="font-serif text-[42px] leading-none tracking-tight text-[#a36b2e] sm:text-5xl lg:text-[clamp(2.5rem,3.2vw,4rem)]">
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      active={isInView}
                      reducedMotion={reducedMotion}
                    />
                  </div>

                  {/* Gold separator */}
                  <div className="my-4 h-px w-24 max-w-[70%] bg-[#d6b887]/80 sm:my-5" />

                  {/* Label */}
                  <p className="max-w-[220px] font-serif text-base leading-snug text-[#302b26] sm:text-lg lg:text-[clamp(0.9rem,1.15vw,1.25rem)]">
                    {stat.label}
                  </p>
                </div>

                {/* Small gold diamond between desktop circles */}
                {index < statsSectionData.stats.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-[5px] top-1/2 z-20 hidden -translate-y-1/2 text-xl text-[#b98a49] lg:block"
                  >
                    ✦
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
