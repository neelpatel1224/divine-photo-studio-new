import Hero from "../components/Hero";
import CoupleStoriesSection from "../components/CoupleStoriesSection";
import FeaturedGallerySection from "../components/FeaturedGallerySection";
import AboutUsSection from "../components/AboutUsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedGallerySection />
      <CoupleStoriesSection />
      <AboutUsSection />
    </>
  );
}
