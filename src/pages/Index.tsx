import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrackRecord from "@/components/TrackRecord";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Index = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <TrackRecord />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
};

export default Index;
