import ContactUs1 from "@/components/contact";
import Footer4Col from "@/components/Footer";
import BentoGrid1 from "@/components/Grid";
import MinimalHero from "@/components/Hero";
import HeroGeometric from "@/components/Hero";
import Globe3D from "@/components/Hero";
import Component from "@/components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Component />
      <HeroGeometric />
      <BentoGrid1 />
      <ContactUs1 />
      <Footer4Col />
    </div>
  );
}
