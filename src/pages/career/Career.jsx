import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import Hero from "./components/Hero";
import WhyJoinUs from "./components/WhyJoinUs";
import Benefits from "./components/Benefits";
import OpenPositions from "./components/OpenPositions";
import HiringProcess from "./components/HiringProcess";
import CTA from "./components/CTA";

export default function Career() {
  return (
    <>
      <Navbar />

      <Hero />
      <OpenPositions />
      <WhyJoinUs />
      <Benefits />
      <HiringProcess />
      <CTA />

      <Footer />
    </>
  );
}
