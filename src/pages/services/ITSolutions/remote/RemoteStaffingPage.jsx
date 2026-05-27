// RemoteStaffingPage.tsx

import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";

import AIHero from "../components/ITHero";

import RemoteStaffingOverview from "./components/RemoteStaffingOverview";
import RemoteStaffingBenefits from "./components/RemoteStaffingBenefits";
import RemoteStaffingModels from "./components/RemoteStaffingModels";
import RemoteStaffingRoles from "./components/RemoteStaffingRoles";
import RemoteStaffingProcess from "./components/RemoteStaffingProcess";
import RemoteStaffingTestimonials from "./components/RemoteStaffingTestimonials";
import RemoteStaffingCTA from "./components/RemoteStaffingCTA";
import Partner from "./components/Partner";

export default function RemoteStaffingPage() {
  return (
    <>
      <Navbar />

      <AIHero />

      <RemoteStaffingOverview />
      <RemoteStaffingBenefits />
      <RemoteStaffingModels />
      <RemoteStaffingRoles />
      <Partner />
      <RemoteStaffingProcess />
      <RemoteStaffingTestimonials />
      <RemoteStaffingCTA />

      <Footer />
    </>
  );
}
