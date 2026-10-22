import AboutSection from "@/components/home/AboutSection";
import CollectionsSection from "@/components/home/CollectionsSection";
import CollectionsSlider from "@/components/home/CollectionsSlider";
import HeroSection from "@/components/home/HeroSection";
import ServicesHero from "@/components/home/ServicesHero";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <HeroSection />
      <AboutSection />
      <CollectionsSection />
      <CollectionsSlider />
      <ServicesHero />
      <TestimonialsSection />
    </div>
  );
}
