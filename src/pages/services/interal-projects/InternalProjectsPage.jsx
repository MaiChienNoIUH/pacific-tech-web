import InternalHero from "./components/InternalHero";
import InternalOverview from "./components/InternalOverview";
import InternalServicesList from "./components/InternalServicesList";

import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

export default function InternalProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <InternalHero />
      <InternalOverview />
      <InternalServicesList />
      <Footer />
    </main>
  );
}
