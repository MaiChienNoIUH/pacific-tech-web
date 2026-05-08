import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import FounderMessage from "./components/FounderMessage";
import VisionMission from "./components/VisionMission";
import WhyChooseUs from "./components/WhyChooseUs";
import Timeline from "./components/Timeline";
import TeamStats from "./components/TeamStats";
// import Partner from "./components/Partner";
import CTA from "./components/CTA";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhoWeAre />
      <FounderMessage />
      <VisionMission />
      <WhyChooseUs />
      <Timeline />
      <TeamStats />
      {/* <Partner /> */}
      <CTA />
      <Footer />
    </>
  );
}
