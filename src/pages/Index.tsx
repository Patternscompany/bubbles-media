import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";
import Partners from "@/components/Partners";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Stats />
      <Partners />
      <Team />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
