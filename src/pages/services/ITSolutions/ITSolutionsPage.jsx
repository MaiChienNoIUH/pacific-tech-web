import ITHero from "./components/ITHero";
import ITOverview from "./components/ITOverview";
import ITServicesList from "./components/ITServicesList";
import ITAbout from "./components/ITAbout";
import CTA from "./components/CTA";

import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

export default function ITSolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ITHero />
      <ITOverview />
      <ITServicesList />
      <ITAbout />
      <CTA />
      <Footer />
    </main>
  );
}
