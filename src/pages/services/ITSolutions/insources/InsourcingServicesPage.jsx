import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";

import AIHero from "../components/ITHero";

import InsourcingIntro from "./components/InsourcingIntro";
import InsourcingCapabilities from "./components/InsourcingCapabilities";
import InsourcingSolutions from "./components/InsourcingSolutions";
import InsourcingWhyUs from "./components/InsourcingWhyUs";
import InsourcingStats from "./components/InsourcingStats";
import InsourcingIndustries from "./components/InsourcingIndustries";
import InsourcingProcess from "./components/InsourcingProcess";
import InsourcingCTA from "./components/InsourcingCTA";

export default function InsourcingServicesPage() {
  return (
    <>
      <Navbar />

      <AIHero />

      <InsourcingIntro />
      <InsourcingCapabilities />
      <InsourcingSolutions />
      <InsourcingWhyUs />
      <InsourcingStats />
      <InsourcingIndustries />
      <InsourcingProcess />
      <InsourcingCTA />

      <Footer />
    </>
  );
}