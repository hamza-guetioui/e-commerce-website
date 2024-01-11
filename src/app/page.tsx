import {
  Topbar,
  Navbar,
  Hero,
  FeatureShowcase,
  ProductShowcases,
  StoriesSection,
  OfferBox,
  AboutUs,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="w-full">
      <Topbar />
      <Navbar />
      <Hero />
      {/* ValueCards Component: Displays four cards highlighting provided values or services */}
      <FeatureShowcase />
      <ProductShowcases />
      <StoriesSection />
      <OfferBox />
      <AboutUs />
      <Footer />
    </main>
  );
}
