import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";

import ITHero from "../components/ITHero";
import WebDevOverview from "./WebDevOverview";
import Partner from "./Partner";

import WebDevSolutions from "./WebDevSolutions";
import WebDevWhy from "./WebDevWhy";
import WebDevCaseStudies from "./WebDevCaseStudies";
import WebDevCTA from "./WebDevCTA";

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <ITHero />
      <WebDevOverview />
      <Partner />
      <WebDevSolutions />
      <WebDevWhy />
      <WebDevCaseStudies />
      <WebDevCTA />
      <Footer />
    </>
  );
}
