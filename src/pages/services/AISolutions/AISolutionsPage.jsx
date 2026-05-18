import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

import AIHero from "./components/AIHero";
import AIOverview from "./components/AIOverview";
import AIUseCases from "./components/AIUseCases";
import WhyAI from "./components/WhyAI";
import CTA from "./components/CTA";
import AICore from "./components/AICore";

export default function AISolutionsPage() {
  return (
    <>
      <Navbar />
      <AIHero />
      <AIOverview />
      <AICore />
      <AIUseCases />
      <WhyAI />
      <CTA />
      <Footer />
    </>
  );
}
