import Contact from "@/components/Contact";
import Feature from "@/components/Feature";
import Feature2 from "@/components/Feature2";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LogoCloud from "@/components/LogoCloud";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import MobileFeature from "@/components/MobileFeature";
import Pricing from "@/components/Pricing";
import OurBlog from "@/components/OurBlog";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="flex xl:w-[1300px] px-4 xl:px-0 flex-col items-center  py-[84px]">
        <HeroSection />
        <LogoCloud />
        <Feature />
        <Feature2 />
        <MobileFeature />
        <Testimonials />
        <Pricing/>
        <OurBlog/>
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}
