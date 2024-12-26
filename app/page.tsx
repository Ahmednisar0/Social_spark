import Footer from "@/components/Footer";
import HeroSection from "@/components/Herosec";
import LastDiv from "@/components/lastdiv";
import Navbar from "@/components/Navbar";
import Services from "@/components/services";
import WhyChooseUs from "@/components/Whychoseup";


export default function Home() {
  return (
    <div className="bg-gray-950">
      <Navbar/>
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <LastDiv />
      <Footer />
    </div>
  );
}
