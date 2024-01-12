import Banner from "@/components/Homepage/Banner/banner";
import Contact from "@/components/Homepage/Contact/contact";
import Features from "@/components/Homepage/Features/features";
import Pricing from "@/components/Homepage/Pricing/pricing";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <Features />
      <Pricing />
      <Contact />
    </main>
  );
}
