import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";

import ITHero from "../components/ITHero";
import MobileAppOverview from "./components/MobileAppOverview";
import Partner from "./components/Partner";
import MobileAppSolutions from "./components/MobileAppSolutions";
import MobileAppWhyUs from "./components/MobileAppWhyUs";
import MobileAppCaseStudies from "./components/MobileAppCaseStudies";
import MobileAppCTA from "./components/MobileAppCTA";

export default function MobileAppPage() {
  return (
    <>
      <Navbar />
      <ITHero />
      <MobileAppOverview />
      <Partner />
      <MobileAppSolutions />
      <MobileAppWhyUs />
      <MobileAppCaseStudies />
      <MobileAppCTA />
      <Footer />
    </>
  );
}