import FAQSection from "@/components/faqs/FAQSection";
import FaqsHero from "@/components/faqs/FaqsHero";

export default function Faqs() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <FaqsHero />
      <FAQSection />
    </div>
  );
}
