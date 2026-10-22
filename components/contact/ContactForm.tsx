
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Gem,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { contactFormData } from "@/data";

const contactIcons = [MapPin, Phone, Mail, Clock];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const inputClass =
  "w-full min-w-0 border border-[#e8dfd4] bg-white/70 px-4 py-4 text-sm text-[#25252b] outline-none transition-all duration-300 placeholder:text-[#85858e] hover:border-[#c28a42] focus:border-[#b77b30] focus:ring-2 focus:ring-[#b77b30]/10";

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateField = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setStatus("idle");
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setError("");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError(contactFormData.errors.email);
      return;
    }

    if (!/^[0-9+\s()-]{7,20}$/.test(form.phone)) {
      setError(contactFormData.errors.phone);
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 600));

      setStatus("success");
      setForm(initialForm);
    } catch {
      setError(contactFormData.errors.send);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfaf7] text-[#171b29]">
      
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-72 h-80 w-80 rounded-full bg-[#d8ae71]/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-96 h-96 w-96 rounded-full bg-[#c38b43]/10 blur-[120px]"
      />

     
      <section className="relative px-5 pb-10 pt-12 text-center sm:px-8 sm:pt-12 lg:pb-12 lg:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-[#bd853a]" />
            <Gem className="h-6 w-6 text-[#b77b30]" strokeWidth={1.5} />
            <span className="h-px w-14 bg-[#bd853a]" />
          </div>

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#b77b30] sm:text-sm">
            {contactFormData.eyebrow}
          </p>

          <h1 className="font-serif text-5xl leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            {contactFormData.headingFirst}{" "}
            <span className="text-[#b77b30]">
              {contactFormData.headingHighlight}
            </span>
          </h1>

          <p className="mx-auto mt-2 max-w-3xl text-sm leading-7 text-[#737783] sm:text-base sm:leading-8 md:text-lg">
            {contactFormData.description}
          </p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-5 h-0.5 bg-[#bd853a]"
          />
        </motion.div>
      </section>

      
      <section className="relative mx-auto max-w-[1440px] px-4 pb-8 sm:px-6 lg:px-8 lg:pb-8">
        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-7">
         
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="border border-[#eee5da] bg-[#f9f5ef]/90 px-6 py-3 sm:px-9 sm:py-5 lg:px-10"
          >
            {contactFormData.contactDetails.map((item, index) => {
              const Icon = contactIcons[index];

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className={`flex gap-4 py-5 sm:gap-6 sm:py-5 lg:py-5 ${
                    index !== contactFormData.contactDetails.length - 1
                      ? "border-b border-[#e8dfd4]"
                      : ""
                  }`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f3eadc] transition duration-300 hover:scale-110 hover:bg-[#ead8bd] sm:h-16 sm:w-16">
                    <Icon
                      className="h-6 w-6 text-[#b77b30] sm:h-7 sm:w-7"
                      strokeWidth={1.7}
                    />
                  </div>

                  <div className="min-w-0 flex-1 pt-0.5">
                    <h2 className="mb-2 font-serif text-xl sm:text-2xl">
                      {item.title}
                    </h2>

                    <div className="space-y-1">
                      {item.lines.map((line, index) => (
                        <p
                          key={`${line}-${index}`}
                          className="break-words text-sm leading-6 text-[#737783] sm:text-base sm:leading-7"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7 }}
            className="border border-[#eee5da] bg-white/80 p-5 sm:p-8 md:p-10 lg:p-9 xl:p-10"
          >
            <div className="mb-8">
              <h2 className="font-serif text-3xl sm:text-4xl">
                {contactFormData.messageHeading}
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#737783] sm:text-base">
                {contactFormData.messageDescription}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  minLength={2}
                  value={form.name}
                  onChange={updateField}
                  placeholder={contactFormData.fields.name.placeholder}
                  aria-label={contactFormData.fields.name.ariaLabel}
                  className={inputClass}
                />

                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={updateField}
                  placeholder={contactFormData.fields.email.placeholder}
                  aria-label={contactFormData.fields.email.ariaLabel}
                  className={inputClass}
                />

                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  value={form.phone}
                  onChange={updateField}
                  placeholder={contactFormData.fields.phone.placeholder}
                  aria-label={contactFormData.fields.phone.ariaLabel}
                  className={inputClass}
                />

                <input
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={updateField}
                  placeholder={contactFormData.fields.subject.placeholder}
                  aria-label={contactFormData.fields.subject.ariaLabel}
                  className={inputClass}
                />
              </div>

              <textarea
                name="message"
                required
                minLength={10}
                value={form.message}
                onChange={updateField}
                placeholder={contactFormData.fields.message.placeholder}
                aria-label={contactFormData.fields.message.ariaLabel}
                rows={5}
                className={`${inputClass} min-h-40 resize-y`}
              />

              {error && (
                <p role="alert" className="text-sm text-red-600">
                  {error}
                </p>
              )}

              {status === "success" && (
                <p
                  role="status"
                  className="flex items-center gap-2 text-sm text-green-700"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0" />
                  {contactFormData.successMessage}
                </p>
              )}

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                className="flex w-full items-center justify-center gap-3 bg-gradient-to-r from-[#bd853a] to-[#a96a22] px-5 py-4 text-sm font-semibold uppercase tracking-[0.13em] text-white shadow-[0_8px_22px_rgba(166,106,34,0.15)] transition duration-300 hover:shadow-[0_12px_28px_rgba(166,106,34,0.28)] disabled:cursor-not-allowed disabled:opacity-70 sm:py-5"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    {contactFormData.sendingLabel}
                  </>
                ) : (
                  <>
                    {contactFormData.submitLabel}
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#b77b30]">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
