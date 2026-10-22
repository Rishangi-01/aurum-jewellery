
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Maximize2,
  X,
  Star,
} from "lucide-react";
import { productDetailsData } from "@/data";

export default function ProductDetails() {
  const [activeImage, setActiveImage] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const { images, product, modal } = productDetailsData;

  return (
    <section className="overflow-hidden bg-[#faf8f4] px-4 py-10 text-[#202020] sm:px-6 sm:py-14 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)] lg:gap-12 xl:gap-16">

        {/* Product gallery */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-[100%_minmax(0,1fr)] gap-3 sm:grid-cols-[100%_minmax(0,1fr)] sm:gap-4 h-[100%]"
        >
          {/* <div className="flex flex-col gap-3">
            {images.map((image, index) => (
              <motion.button
                key={image.src}
                type="button"
                whileHover={{ scale: 1.035 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveImage(index)}
                aria-label={productDetailsData.viewImageLabelTemplate.replace(
                  "{index}",
                  String(index + 1)
                )}
                aria-pressed={activeImage === index}
                className={`relative aspect-square w-full overflow-hidden rounded-sm border-2 bg-[#f0eae2] transition-colors ${
                  activeImage === index
                    ? "border-[#ad7945]"
                    : "border-transparent hover:border-[#d6bd9b]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </motion.button>
            ))}
          </div> */}
          
          <div className="relative overflow-hidden rounded-sm bg-[#f0eae2]">
            <AnimatePresence mode="wait">
              <motion.div
                key={images.src}
                initial={{ opacity: 0, scale: 1.025 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 max-h-[85vh]"
              >
                <Image
                  src={images.src}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 75vw, 48vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.035]"
                />
              </motion.div>
            </AnimatePresence>

            <motion.button
              type="button"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setZoomOpen(true)}
              aria-label={productDetailsData.enlargeImageLabel}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/95 shadow-md transition-colors hover:bg-[#ad7945] hover:text-white sm:right-5 sm:top-5"
            >
              <Maximize2 size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Product information */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="pt-1 sm:pt-3 lg:pt-0"
        >
          <div className="mb-4 flex items-center gap-4">
            <span className="text-sm font-semibold tracking-[0.22em] text-[#ad7945]">
              {product.category}
            </span>
            <span className="h-px w-20 bg-[#c7a77d]" />
          </div>

          <h1 className="font-serif text-3xl leading-[1.2] tracking-tight sm:text-4xl xl:text-[46px]">
            {product.name}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-[#66615d] sm:text-lg sm:leading-9">
            {product.description}
          </p>

          {/* Enquiry button */}
          <motion.a
            type="button"
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.98 }}
            href={productDetailsData.enquiryButtonHref}
            className="group mt-7 inline-flex min-h-[58px] w-full items-center justify-center gap-5 rounded-sm bg-[#b77b45] px-8 py-4 text-base font-medium text-white shadow-sm transition-colors duration-300 hover:bg-[#925c30] sm:w-auto sm:min-w-[250px] sm:text-lg"
          >
            {productDetailsData.enquiryButtonLabel}
            <ArrowRight
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </motion.a>
        </motion.div>
      </div>

      <AnimatePresence>
        {zoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5"
            role="dialog"
            aria-modal="true"
            aria-label={productDetailsData.enlargedImageDialogLabel}
          >
            <button
              type="button"
              onClick={() => setZoomOpen(false)}
              aria-label={modal.closeLabel}
              className="absolute right-5 top-5 z-10 rounded-full bg-white p-3 text-black hover:bg-[#e9d6bd]"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(event) => event.stopPropagation()}
              className="relative h-[85vh] w-full max-w-4xl"
            >
              <Image
                src={images.src}
                alt={product.name}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
