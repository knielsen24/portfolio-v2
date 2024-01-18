import "@/components/layout/navbar";
import HeroSection from "@/components/landing/hero";
import ImageSection from "@/components/landing/collage";

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
      <HeroSection />
      <ImageSection />
    </div>
  );
}
