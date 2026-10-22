
"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import { navbarData } from "@/data";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentPath =
    pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  const isActive = (href: string) =>
    currentPath === href ||
    (href !== "/" && currentPath.startsWith(`${href}/`));

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-50 w-full bg-[#fcf8f1]"
    >
      <nav
        aria-label={navbarData.ariaLabel}
        className="mx-auto flex min-h-[88px] max-w-[1920px] items-center justify-between gap-6 px-5 py-2 sm:px-8 lg:min-h-[90px] lg:px-12 xl:px-[3.1%]"
      >
        
        <Link
          href={navbarData.logo.href}
          aria-label={navbarData.logo.ariaLabel}
          className="group relative z-10 flex shrink-0 items-center"
        >
          <motion.div
            whileHover={{ scale: 1.035 }}
            transition={{ duration: 0.35 }}
            className="relative"
          >
            <div className="flex items-center gap-2 sm:gap-3">

              <div className="flex flex-col h-[60px] ">
                <img src={navbarData.logo.src} alt={navbarData.logo.alt} className="h-full w-full object-contain" />
              </div>
            </div>
          </motion.div>
        </Link>


        <div className="hidden flex-1 items-center justify-end gap-7 lg:flex xl:gap-8 2xl:gap-10">

          <div className="flex items-center gap-6 xl:gap-8 2xl:gap-10">
            {navbarData.links.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + index * 0.07,
                  duration: 0.45,
                }}
                className="relative"
              >
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`relative block whitespace-nowrap py-3 font-serif text-[15px] transition-colors duration-300 xl:text-[17px] 2xl:text-[18px] ${
                    isActive(link.href)
                      ? "text-[#b58a3b]"
                      : "text-[#29251f] hover:text-[#b58a3b]"
                  }`}
                >
                  {link.name}

                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-[#c5a15d]"
                    initial={false}
                    animate={{
                      width: isActive(link.href) ? "100%" : "0%",
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  />

                  <span className="absolute inset-0 -z-10 scale-75 rounded-full bg-[#c5a15d]/0 transition-all duration-300 hover:scale-100 hover:bg-[#c5a15d]/[0.06]" />
                </Link>
              </motion.div>
            ))}
          </div>

           <motion.div
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.98 }}
            className="shrink-0"
          >
            <Link
              href={navbarData.enquiry.href}
              className="group relative flex min-h-[50px] min-w-[205px] items-center justify-between gap-6 overflow-hidden bg-[#cfad6d] px-7 text-[#1d1912] transition-colors duration-300 hover:bg-[#bd9854] xl:min-w-[180px] xl:px-5"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-full" />

              <span className="relative font-serif text-[17px] xl:text-[19px]">
                {navbarData.enquiry.label}
              </span>

              <ArrowRight
                size={23}
                strokeWidth={1.6}
                className="relative transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </Link>
          </motion.div>

        </div>

      
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={
            mobileOpen
              ? navbarData.mobileMenu.closeLabel
              : navbarData.mobileMenu.openLabel
          }
          aria-expanded={mobileOpen}
          className="relative z-20 flex h-11 w-11 items-center justify-center border border-[#c5a15d]/40 text-[#9b762e] transition-colors hover:bg-[#c5a15d]/10 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 45, scale: 0.7 }}
              transition={{ duration: 0.18 }}
              className="flex"
            >
              {mobileOpen ? <X size={23} /> : <Menu size={23} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="absolute left-0 right-0 top-full z-50 overflow-hidden border-b border-[#d9c7a4] bg-[#fcf8f1] shadow-xl lg:hidden"
          >
            <div className="mx-auto max-w-2xl px-5 pb-6 pt-3 sm:px-8">
              {navbarData.links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.045 }}
                >
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    onClick={() => {
                      setMobileOpen(false);
                    }}
                    className={`flex items-center justify-between border-b border-[#d9c7a4]/50 py-3.5 font-serif text-[17px] transition-colors hover:pl-2 hover:text-[#b58a3b] ${
                      isActive(link.href)
                        ? "text-[#b58a3b]"
                        : "text-[#29251f]"
                    }`}
                  >
                    {link.name}
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </Link>
                </motion.div>
              ))}

              <Link
                href={navbarData.enquiry.href}
                onClick={() => setMobileOpen(false)}
                className="group mt-5 flex min-h-[54px] items-center justify-between bg-[#cfad6d] px-5 text-[#1d1912] transition-colors hover:bg-[#bd9854]"
              >
                <span className="font-serif text-[17px]">
                  {navbarData.enquiry.label}
                </span>
                <ArrowRight
                  size={21}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
