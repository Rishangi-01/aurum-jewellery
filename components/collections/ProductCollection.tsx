"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Heart, ChevronLeft, ChevronRight, Gem } from "lucide-react";
import { productCollectionData } from "@/data";

const products = productCollectionData.products;
const ITEMS_PER_PAGE = productCollectionData.itemsPerPage;

export default function ProductCollection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState<number[]>([]);
  const reduceMotion = useReducedMotion();

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const visibleProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const changePage = (page: number) => {
    const nextPage = Math.min(Math.max(page, 1), totalPages);
    setCurrentPage(nextPage);

    document
      .getElementById("our-collection")
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  const toggleFavorite = (id: number) => {
    setFavorites((previous) =>
      previous.includes(id)
        ? previous.filter((favoriteId) => favoriteId !== id)
        : [...previous, id]
    );
  };

  return (
    <section
      id="our-collection"
      aria-label={productCollectionData.sectionAriaLabel}
      className="scroll-mt-24 overflow-hidden bg-[#faf8f4] px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-[1440px]">
      
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: reduceMotion ? 0 : 0.65 }}
          className="mb-8 text-center sm:mb-10"
        >
          <div className="mb-3 flex items-center justify-center gap-3 text-[#b7834d]">
            <span className="h-px w-7 bg-[#b7834d]" />
            <Gem size={18} strokeWidth={1.4} aria-hidden="true" />
            <span className="h-px w-7 bg-[#b7834d]" />
          </div>

          <h2 className="font-serif text-3xl tracking-tight text-[#24201d] sm:text-4xl md:text-5xl">
            {productCollectionData.headingPrefix}{" "}
            <span className="text-[#b7834d]">
              {productCollectionData.headingHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#77716b] sm:text-base">
            {productCollectionData.description}
          </p>
        </motion.div>


        <div
          aria-live="polite"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: reduceMotion ? 0 : -12 }}
              transition={{ duration: reduceMotion ? 0 : 0.3 }}
              className="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {visibleProducts.map((product, index) => (
                <motion.article
                  key={product.id}
                  initial={{
                    opacity: 0,
                    y: reduceMotion ? 0 : 18,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion ? 0 : index * 0.045,
                  }}
                  className="group relative flex min-w-0 flex-col overflow-hidden bg-[#ede9e6] transition-all duration-300 hover:-translate-y-1 hover:border-[#c7a474] hover:shadow-[0_12px_35px_rgba(120,85,45,0.10)]"
                >
                  <div className="relative aspect-[2] overflow-hidden bg-[#f1efeb]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Favourite button */}
                    {/* <button
                      type="button"
                      onClick={() => toggleFavorite(product.id)}
                      aria-label={
                        favorites.includes(product.id)
                          ? `${productCollectionData.removeFavoriteLabel} ${product.name} ${productCollectionData.removeFavoriteSuffix}`
                          : `${productCollectionData.addFavoriteLabel} ${product.name} ${productCollectionData.addFavoriteSuffix}`
                      }
                      aria-pressed={favorites.includes(product.id)}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#332b25] shadow-sm transition-all duration-300 hover:scale-110 hover:text-[#b7834d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b7834d]"
                    >
                      <Heart
                        size={18}
                        strokeWidth={1.8}
                        className={
                          favorites.includes(product.id)
                            ? "fill-[#b7834d] text-[#b7834d]"
                            : ""
                        }
                      />
                    </button> */}

                    <span className="absolute bottom-3 left-3 bg-white/90 px-2.5 py-1 text-[10px] tracking-[0.12em] text-[#66584a] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {product.material.toUpperCase()}
                    </span>
                  </div>

                  <a href={`/collections/collections-details`} className="flex flex-1 flex-col items-center px-3 pb-4 pt-3 text-center sm:px-4">
                    <p className="text-[10px] font-medium tracking-[0.06em] text-[#6a645e] sm:text-[11px]">
                      {product.category}
                    </p>
                    <span className="h-px w-6 bg-[#c9a35d] sm:w-24 lg:w-6 mt-2"></span>
                  </a>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <nav
          aria-label={productCollectionData.pagesAriaLabel}
          className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:mt-8"
        >
          <button
            type="button"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label={productCollectionData.previousPageLabel}
            className="flex h-10 w-10 items-center justify-center border border-[#e1d7ca] text-[#8d6945] transition-colors hover:bg-[#b7834d] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#8d6945]"
          >
            <ChevronLeft size={18} />
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                type="button"
                onClick={() => changePage(page)}
                aria-label={`${productCollectionData.goToPageLabel} ${page}`}
                aria-current={currentPage === page ? "page" : undefined}
                className={`flex h-10 min-w-10 items-center justify-center border px-3 text-sm transition-all duration-300 ${currentPage === page
                    ? "border-[#b7834d] bg-[#b7834d] text-white shadow-sm"
                    : "border-[#e1d7ca] bg-transparent text-[#8d6945] hover:border-[#b7834d] hover:bg-[#f0e4d4]"
                  }`}
              >
                {page}
              </button>
            )
          )}

          <button
            type="button"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label={productCollectionData.nextPageLabel}
            className="flex h-10 w-10 items-center justify-center border border-[#e1d7ca] text-[#8d6945] transition-colors hover:bg-[#b7834d] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#8d6945]"
          >
            <ChevronRight size={18} />
          </button>
        </nav>

        <p className="mt-3 text-center text-xs text-[#91877b]">
          {productCollectionData.showingLabel}{" "}
          {(currentPage - 1) * ITEMS_PER_PAGE + 1}
          {productCollectionData.rangeSeparator}
          {Math.min(currentPage * ITEMS_PER_PAGE, products.length)}{" "}
          {productCollectionData.ofLabel} {products.length}{" "}
          {productCollectionData.productsLabel}
        </p>
      </div>
    </section>
  );
}