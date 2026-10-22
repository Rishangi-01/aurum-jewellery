import CollectionDetailHero from "@/components/collections-details/CollectionDetailHero";
import ProductDescription from "@/components/collections-details/ProductDescription";
import ProductDetails from "@/components/collections-details/ProductDetails";
import ProductSpecifications from "@/components/collections-details/ProductSpecifications";

export default function CollectionsDetails() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <CollectionDetailHero />
      <ProductDetails />
      <ProductDescription />
      <ProductSpecifications />
    </div>
  );
}
