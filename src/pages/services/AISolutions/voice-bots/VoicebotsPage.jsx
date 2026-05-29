import VoicebotCapabilities from "./components/VoicebotCapabilities";
import VoicebotTechStack from "./components/VoicebotTechStack";
import VoicebotIndustry from "./components/VoicebotIndustry";
import VoicebotSteps from "./components/VoicebotSteps";
import Hero from "../components/AIHero";
import VoicebotIntro from "./components/VoicebotIntro";
import VoicebotBanner from "./components/VoicebotBanner";

import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";

export default function VoicebotsPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <VoicebotIntro />
      <VoicebotCapabilities />
      <VoicebotTechStack />
      <VoicebotIndustry />
      <VoicebotBanner />
      <VoicebotSteps />
      <Footer />
    </>
  );
}
