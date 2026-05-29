// SoftwareTestingPage.tsx
import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";

import ITHero from "../components/ITHero";

import STIntro from "./components/STIntro";
import STImportance from "./components/STImportance";
import STServices from "./components/STServices";
import STTypes from "./components/STTypes";
import STIndustries from "./components/STIndustries";
import STEngagementModels from "./components/STEngagementModels";
import STWhyUs from "./components/STWhyUs";
import STStats from "./components/STStats";
import STBenefits from "./components/STBenefits";
import STRelated from "./components/STRelated";
import STCTA from "./components/STCTA";

export default function SoftwareTestingPage() {
  return (
    <>
      <Navbar />

      <ITHero />
      <STIntro />
      <STImportance />
      <STServices />
      <STTypes />
      <STIndustries />
      <STEngagementModels />
      <STWhyUs />
      <STBenefits />
      <STStats />
      <STRelated />
      <STCTA />

      <Footer />
    </>
  );
}
