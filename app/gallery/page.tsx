import GalleryHero from "@/components/gallery/GalleryHero";
import GallerySection from "@/components/gallery/GallerySection";


export default function Gallery() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <GalleryHero />
      <GallerySection />
    </div>
  );
}
