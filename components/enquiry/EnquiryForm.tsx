
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { enquiryFormData } from "@/data";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  category: "",
  jewelleryType: "",
  budget: "",
  message: "",
};

type FormData = typeof initialForm;

const fieldVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function EnquiryForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setForm((previous) => ({ ...previous, [field]: value }));
    setError("");
    setSubmitted(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSubmitted(false);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError(enquiryFormData.emailError);
      return;
    }

    if (!/^[+\d\s()-]{7,20}$/.test(form.phone)) {
      setError(enquiryFormData.phoneError);
      return;
    }

    // Connect your API endpoint here to save the enquiry.
    // This frontend demo does not send data to a server.
    setSubmitted(true);
    setForm(initialForm);
  };

  const inputClass =
    "mt-2 w-full rounded-[4px] border border-[#dedbd5] bg-white/70 px-5 py-4 text-[15px] text-[#172033] outline-none transition-all duration-300 placeholder:text-[#9298a3] hover:border-[#bd8746] focus:border-[#ad712c] focus:ring-2 focus:ring-[#bd8746]/15";

  const labelClass =
    "block font-serif text-[16px] font-medium text-[#20202a]";

  return (
    <section
      id="enquiry"
      className="relative overflow-hidden bg-[#fcfaf7] px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-8"
    >
      {/* Subtle decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#c38b4a]/[0.07] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#d7b78d]/[0.12] blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
        className="relative mx-auto max-w-6xl border border-[#e7cda9] bg-white/55 p-5 shadow-[0_12px_50px_rgba(103,72,35,0.035)] sm:p-8 md:p-10 lg:p-11"
      >
        {/* Heading */}
        <div className="mb-8 sm:mb-10">

          <h2 className="font-serif text-3xl font-medium leading-tight tracking-[-0.04em] text-[#111827] sm:text-4xl md:text-5xl lg:text-[54px]">
            {enquiryFormData.headingFirst}{" "}
            <span className="text-[#ad712c]">
              {enquiryFormData.headingHighlight}
            </span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 108 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-5 h-[3px] bg-gradient-to-r from-[#c18a48] to-[#e1bd8d]"
          />

          <p className="mt-5 max-w-4xl text-sm leading-7 text-[#777f8e] sm:text-base">
            {enquiryFormData.description}
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            role="status"
            className="flex flex-col items-center justify-center rounded-lg border border-[#d9c4a7] bg-[#fcfaf6] px-5 py-14 text-center"
          >
            <CheckCircle2
              size={48}
              className="mb-4 text-[#ad712c]"
              strokeWidth={1.5}
            />
            <h3 className="font-serif text-2xl text-[#172033]">
              {enquiryFormData.successHeading}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-6 text-[#777f8e]">
              {enquiryFormData.successDescription}
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm font-semibold text-[#a96b27] underline underline-offset-4"
            >
              {enquiryFormData.submitAnotherLabel}
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ staggerChildren: 0.08 }}
              className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-7"
            >
              <motion.div variants={fieldVariants} transition={{ duration: 0.45 }}>
                <label htmlFor="enquiry-name" className={labelClass}>
                  {enquiryFormData.labels.name}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="enquiry-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  placeholder={enquiryFormData.placeholders.name}
                  className={inputClass}
                />
              </motion.div>

              <motion.div variants={fieldVariants} transition={{ duration: 0.45 }}>
                <label htmlFor="enquiry-email" className={labelClass}>
                  {enquiryFormData.labels.email}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  placeholder={enquiryFormData.placeholders.email}
                  className={inputClass}
                />
              </motion.div>

              <motion.div variants={fieldVariants} transition={{ duration: 0.45 }}>
                <label htmlFor="enquiry-phone" className={labelClass}>
                  {enquiryFormData.labels.phone}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  placeholder={enquiryFormData.placeholders.phone}
                  className={inputClass}
                />
              </motion.div>

              <motion.div variants={fieldVariants} transition={{ duration: 0.45 }}>
                <label htmlFor="enquiry-category" className={labelClass}>
                  {enquiryFormData.labels.category}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="enquiry-category"
                  name="category"
                  required
                  value={form.category}
                  onChange={(e) => updateField("category", e.target.value)}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>
                    {enquiryFormData.placeholders.category}
                  </option>
                  {enquiryFormData.categories.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </motion.div>

              <motion.div variants={fieldVariants} transition={{ duration: 0.45 }}>
                <label htmlFor="enquiry-type" className={labelClass}>
                  {enquiryFormData.labels.type}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="enquiry-type"
                  name="jewelleryType"
                  required
                  value={form.jewelleryType}
                  onChange={(e) => updateField("jewelleryType", e.target.value)}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>
                    {enquiryFormData.placeholders.type}
                  </option>
                  {enquiryFormData.jewelleryTypes.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </motion.div>

              <motion.div variants={fieldVariants} transition={{ duration: 0.45 }}>
                <label htmlFor="enquiry-budget" className={labelClass}>
                  {enquiryFormData.labels.budget}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  id="enquiry-budget"
                  name="budget"
                  required
                  value={form.budget}
                  onChange={(e) => updateField("budget", e.target.value)}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>
                    {enquiryFormData.placeholders.budget}
                  </option>
                  {enquiryFormData.budgets.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </motion.div>

              <motion.div
                variants={fieldVariants}
                transition={{ duration: 0.45 }}
                className="md:col-span-2"
              >
                <label htmlFor="enquiry-message" className={labelClass}>
                  {enquiryFormData.labels.message}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="enquiry-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder={enquiryFormData.placeholders.message}
                  className={`${inputClass} min-h-32 resize-y`}
                />
              </motion.div>
            </motion.div>

            {error && (
              <p role="alert" className="mt-5 text-sm text-red-600">
                {error}
              </p>
            )}

            <motion.button
              type="submit"
              whileHover={{ y: -2, boxShadow: "0 10px 24px rgba(173,113,44,0.2)" }}
              whileTap={{ scale: 0.99 }}
              className="group mt-6 flex min-h-[62px] w-full items-center justify-center gap-4 rounded-[4px] bg-gradient-to-r from-[#b77a31] via-[#c18a3e] to-[#a96b27] px-5 py-4 text-sm font-semibold tracking-[0.14em] text-white transition-all duration-300 hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#bd8746]/30 sm:mt-7 sm:text-base"
            >
              <span>{enquiryFormData.submitLabel}</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#a96b27] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={20} />
              </span>
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
}
