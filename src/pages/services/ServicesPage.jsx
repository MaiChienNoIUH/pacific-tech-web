import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import ServicesHero from "./components/ServicesHero";
import ServiceGrid from "./components/ServiceGrid";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessSection from "./components/ProcessSection";
import CTA from "./components/CTA";
import Partner from "./components/Partner";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <ServicesHero />
      <Partner />
      <ServiceGrid />
      <WhyChooseUs />
      <ProcessSection />
      <CTA />
      <Footer />
    </>
  );
}
