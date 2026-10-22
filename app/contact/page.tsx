import ContactForm from "@/components/contact/ContactForm";
import ContactHero from "@/components/contact/ContactHero";
import LocationSection from "@/components/contact/LocationSection";

export default function Contact() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <ContactHero />
      <ContactForm />
      <LocationSection />
    </div>
  );
}
