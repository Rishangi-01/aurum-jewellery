import EnquiryForm from "@/components/enquiry/EnquiryForm";
import EnquiryHero from "@/components/enquiry/EnquiryHero";
import EnquirySection from "@/components/enquiry/EnquirySection";


export default function Enquiry() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <EnquiryHero />
      <EnquirySection />
      <EnquiryForm />
    </div>
  );
}
