import CaseStudy from "@/components/CaseStudy/CaseStudy";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import Trending from "@/components/Trending/Trending";
import GrowthMarketing from "@/components/Pulse/GrowthMarketing";
import GrowthMarketingHero from "@/components/Hero/GrowthMarketing";
import GrowthMarketingOffering from "@/components/Offering/GrowthMarketingOffering";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Marketing Services | Growth Mantra",
  description:
    "Accelerate business growth with our data-driven growth marketing strategies that deliver results",
};

export default function Home() {
  return (
    <>
      <Header />
      <GrowthMarketingHero />
      <GrowthMarketingOffering />
      <GrowthMarketing />
      <WhyChooseUs />
      <CaseStudy />
      <Trending />
      <Footer />
    </>
  );
}
