import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";

import ITHero from "../components/ITHero";

import OutsourcingIntro from "./components/OutsourcingIntro";
import OutsourcingSolutions from "./components/OutsourcingSolutions";
import OutsourcingWhyUs from "./components/OutsourcingWhyUs";
import OutsourcingStats from "./components/OutsourcingStats";
import OutsourcingIndustries from "./components/OutsourcingIndustries";
import OutsourcingProcess from "./components/OutsourcingProcess";
import OutsourcingCTA from "./components/OutsourcingCTA";

export default function OutsourcingServicesPage() {
  return (
    <>
      <Navbar />

      <ITHero />

      <OutsourcingIntro />
      <OutsourcingSolutions />
      <OutsourcingWhyUs />
      <OutsourcingStats />
      <OutsourcingIndustries />
      <OutsourcingProcess />
      <OutsourcingCTA />

      <Footer />
    </>
  );
}