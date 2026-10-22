import CollectionsHero from "@/components/collections/CollectionsHero";
import ProductCollection from "@/components/collections/ProductCollection";

export default function Collections() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <CollectionsHero />
      <ProductCollection />
    </div>
  );
}
