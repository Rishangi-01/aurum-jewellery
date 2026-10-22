import CustomerReviews from "@/components/testimonials/CustomerReviews";
import TestimonialHero from "@/components/testimonials/TestimonialHero";

export default function Testimonials() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans dark:bg-black">
      <TestimonialHero />
      <CustomerReviews />
    </div>
  );
}
