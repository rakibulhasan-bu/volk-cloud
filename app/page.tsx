import Banner from "@/components/Homepage/Banner/banner";
import Contact from "@/components/Homepage/Contact/contact";
import Features from "@/components/Homepage/Features/features";
import Pricing from "@/components/Homepage/Pricing/pricing";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header/header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* <Header /> */}
      <Banner />
      <Features />
      <Pricing />
      <Contact />
      {/* <Footer /> */}
    </main>
  );
}
