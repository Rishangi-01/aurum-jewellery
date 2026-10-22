import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import StatsSection from "@/components/about/StatsSection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import AboutSection from "@/components/home/AboutSection";

export default function About() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <AboutHero />
      <AboutSection />
      <MissionVision />
      <StatsSection />
      <WhyChooseUs />
    </div>
  );
}
