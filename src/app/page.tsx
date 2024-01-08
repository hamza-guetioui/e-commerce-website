// import Topbar from '@/components/Topbar'

import Image from "next/image";
import {
  Topbar,
  Navbar,
  Hero,
  FeatureShowcase,
  ProductShowcases,
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
      <ProductShowcases />
      
    </main>
  );
}
