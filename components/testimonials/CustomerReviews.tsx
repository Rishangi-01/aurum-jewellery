
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { customerReviewsData } from "@/data";

export default function CustomerReviews() {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(
        customerReviewsData.reviews.length / customerReviewsData.pageSize
    );
    const visibleReviews = customerReviewsData.reviews.slice(
        (page - 1) * customerReviewsData.pageSize,
        page * customerReviewsData.pageSize
    );

    const changePage = (nextPage: number) => {
        if (nextPage < 1 || nextPage > totalPages) return;
        setPage(nextPage);
    };

    return (
        <section
            id="reviews"
            className="relative overflow-hidden bg-[#fcf9f4] px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-8"
        >
            {/* Decorative background */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#bd8043]/[0.06] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-[#bd8043]/[0.07] blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-10 text-center sm:mb-12"
                >
                    <div className="mb-3 flex items-center justify-center gap-3">
                        <span className="h-px w-10 bg-[#bb7a3d]" />
                        <span className="text-xl text-[#ad6b30]">✧</span>
                        <span className="h-px w-10 bg-[#bb7a3d]" />
                    </div>

                    <h2 className="font-serif text-3xl tracking-tight text-[#282421] sm:text-4xl md:text-5xl">
                        {customerReviewsData.headingFirst}{" "}
                        <span className="text-[#b7793d]">
                            {customerReviewsData.headingHighlight}
                        </span>
                    </h2>

                    <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
                        {customerReviewsData.description}
                    </p>
                </motion.div>


                <AnimatePresence mode="wait">
                    <motion.div
                        key={page}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35 }}
                        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {visibleReviews.map((review, index) => (
                            <motion.article
                                key={review.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.055,
                                }}
                                whileHover={{ y: -5 }}
                                className="group flex h-full flex-col rounded-sm border border-[#e9dfd2] bg-white/70 p-3.5 shadow-[0_2px_12px_rgba(80,50,20,0.025)] transition-shadow duration-300 hover:border-[#c99a68] hover:shadow-[0_12px_30px_rgba(100,60,20,0.09)] sm:p-4"
                            >

                                <div className="flex items-center gap-3">
                                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#e9d5bd] sm:h-14 sm:w-14 lg:h-20 lg:w-20">
                                        <Image
                                            src={review.avatar}
                                            alt={customerReviewsData.avatarAltTemplate.replace(
                                                "{name}",
                                                review.name
                                            )}
                                            fill
                                            sizes="56px"
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <h3 className="font-serif text-sm font-semibold text-[#292521] sm:text-base lg:text-xl">
                                            {review.name}
                                        </h3>

                                        <div
                                            className="mt-1 flex items-center gap-0.5"
                                            aria-label={customerReviewsData.ratingLabelTemplate.replace(
                                                "{rating}",
                                                String(review.rating)
                                            )}
                                        >
                                            {Array.from(
                                                { length: customerReviewsData.ratingScale },
                                                (_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        strokeWidth={1.5}
                                                        className={
                                                            i < review.rating
                                                                ? "fill-[#e99a17] text-[#e99a17]"
                                                                : "text-gray-300"
                                                        }
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex h-8 w-8 lg:h-15 lg:w-15 shrink-0 items-center justify-center rounded-full border border-[#f1dfcb] bg-[#fcf2e7] text-[#b96d2b]">
                                        <Quote size={22} fill="currentColor" />
                                    </div>
                                </div>

                                {/* Review text */}
                                <p className="mt-4 min-h-[84px] flex-1 text-[13px] leading-[1.7] text-[#55504b] sm:text-sm lg:text-[18px]">
                                    &ldquo;{review.text}&rdquo;
                                </p>

                                {/* Product image */}
                                <div className="relative mt-3 h-36 w-full overflow-hidden rounded-sm bg-[#f6f0e8] sm:h-40">
                                    <Image
                                        src={review.product}
                                        alt={customerReviewsData.productAltTemplate.replace(
                                            "{name}",
                                            review.name
                                        )}
                                        fill
                                        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#6e4522]/10 to-transparent opacity-60" />
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Pagination */}
                <nav
                    aria-label={customerReviewsData.paginationAriaLabel}
                    className="mt-9 flex flex-wrap items-center justify-center gap-2 sm:mt-10"
                >
                    <button
                        type="button"
                        onClick={() => changePage(page - 1)}
                        disabled={page === 1}
                        aria-label={customerReviewsData.previousPageLabel}
                        className="flex h-10 w-10 items-center justify-center border border-[#e5d7c8] text-[#9e6937] transition hover:bg-[#b7783d] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#9e6937]"
                    >
                        <ChevronLeft size={17} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (pageNumber) => (
                            <button
                                key={pageNumber}
                                type="button"
                                onClick={() => changePage(pageNumber)}
                                aria-label={customerReviewsData.goToPageLabelTemplate.replace(
                                    "{page}",
                                    String(pageNumber)
                                )}
                                aria-current={page === pageNumber ? "page" : undefined}
                                className={`flex h-10 min-w-10 items-center justify-center border px-3 text-sm transition-all duration-300 ${page === pageNumber
                                        ? "border-[#b7783d] bg-[#b7783d] text-white shadow-md"
                                        : "border-[#e5d7c8] bg-white/50 text-[#8b5a31] hover:border-[#b7783d] hover:bg-[#f7eee3]"
                                    }`}
                            >
                                {pageNumber}
                            </button>
                        )
                    )}

                    <button
                        type="button"
                        onClick={() => changePage(page + 1)}
                        disabled={page === totalPages}
                        aria-label={customerReviewsData.nextPageLabel}
                        className="flex h-10 w-10 items-center justify-center border border-[#e5d7c8] text-[#9e6937] transition hover:bg-[#b7783d] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-[#9e6937]"
                    >
                        <ChevronRight size={17} />
                    </button>
                </nav>

                <p className="mt-4 text-center text-xs tracking-wide text-gray-500">
                    {customerReviewsData.showingLabel}{" "}
                    {(page - 1) * customerReviewsData.pageSize + 1}
                    {customerReviewsData.rangeSeparator}
                    {Math.min(
                        page * customerReviewsData.pageSize,
                        customerReviewsData.reviews.length
                    )}{" "}
                    {customerReviewsData.ofLabel}{" "}
                    {customerReviewsData.reviews.length}{" "}
                    {customerReviewsData.reviewsLabel}
                </p>
            </div>
        </section>
    );
}
