
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import { footerData } from "@/data";

const socialIcons: Record<string, IconType> = {
  facebook: FaFacebookF,
  twitter: FaTwitter,
  dribbble: FaDribbble,
  instagram: FaInstagram,
};

export default function Footer() {
  const reduceMotion = useReducedMotion();
  const pathname = usePathname();
  const currentPath =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  const isActive = (href: string) =>
    currentPath === href ||
    (href !== "/" && currentPath.startsWith(`${href}/`));

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 22,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <footer className="relative isolate overflow-hidden bg-[#f6eee3] text-[#29251f]">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={footerData.backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 -z-10" />

      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-14">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex justify-center pt-12 sm:pt-16 lg:pt-20"
        >
          <Link
            href={footerData.logo.href}
            aria-label={footerData.logo.ariaLabel}
            className="group inline-flex items-center justify-center"
          >
            <Image
              src={footerData.logo.src}
              alt={footerData.logo.alt}
              width={470}
              height={150}
              priority={false}
              className="h-auto w-[230px] object-contain transition-transform duration-500 group-hover:scale-[1.025] sm:w-[310px] lg:w-[390px]"
            />
          </Link>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          aria-label={footerData.navigationAriaLabel}
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1 }}
          className="mt-9 sm:mt-12 lg:mt-14"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 sm:gap-x-7 lg:gap-x-9 xl:gap-x-10">
            {footerData.navigation.map((item, index) => {
              const active = isActive(item.href);

              return (
                <motion.li
                  key={item.label}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 10,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: reduceMotion ? 0 : index * 0.045,
                    duration: reduceMotion ? 0 : 0.4,
                  }}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative block py-1 font-serif text-sm transition-colors duration-300 hover:text-[#a67d37] sm:text-base lg:text-[17px] ${
                      active
                        ? "text-[#a67d37]"
                        : "text-[#29251f]"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-[#b38b48] transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </motion.nav>

        {/* Social links */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 flex items-center justify-center gap-3 sm:mt-10 sm:gap-5"
        >
          {footerData.socialLinks.map(({ label, href, icon }, index) => {
            const Icon = socialIcons[icon];

            return (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: reduceMotion ? 0 : index * 0.08,
                  duration: reduceMotion ? 0 : 0.4,
                }}
                whileHover={reduceMotion ? undefined : {
                  y: -4,
                  scale: 1.04,
                }}
                whileTap={reduceMotion ? undefined : {
                  scale: 0.96,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d9c6a9] bg-white/10 text-[#654a23] transition-colors duration-300 hover:border-[#b38b48] hover:bg-[#b38b48] hover:text-white sm:h-[58px] sm:w-[58px]"
              >
                <Icon size={20} aria-hidden="true" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: reduceMotion ? 1 : 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: 0.15,
          }}
          className="my-8 h-px origin-center bg-[#c9b69b]/80 sm:my-10 lg:my-12"
        />

        {/* Copyright */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="pb-8 text-center sm:pb-10"
        >
          <p className="font-serif text-sm text-[#77716a] sm:text-base lg:text-lg">
            {footerData.copyright.brand} © {footerData.copyright.year}.{" "}
            {footerData.copyright.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
