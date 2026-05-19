import Hero from "../components/AIHero";
import ChatbotFeatures from "./components/ChatbotFeatures";
import ChatbotApplications from "./components/ChatbotApplications";
import ChatbotSteps from "./components/ChatbotSteps";

import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";

export default function ChatbotPage() {
  return (
    <main className="min-h-screen bg-white">
        <Navbar />
      <Hero />
      <ChatbotFeatures />
      <ChatbotApplications />
      <ChatbotSteps />
        <Footer />
    </main>
  );
}