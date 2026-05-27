import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/Homepage";
import AboutPage from "./pages/about-us/AboutPage";
import Career from "./pages/career/Career";
import ServicesPage from "./pages/services/ServicesPage";
import AISolutionsPage from "./pages/services/AISolutions/AISolutionsPage"
import ITSolutionsPage from "./pages/services/ITSolutions/ITSolutionsPage"
import InternalProjectsPage from "./pages/services/interal-projects/InternalProjectsPage";
import ChatbotPage from "./pages/services/AISolutions/chat-bot/ChatbotPage";
import VoicebotsPage from "./pages/services/AISolutions/voice-bots/VoicebotsPage";
import VoiceRecognitionPage from "./pages/services/AISolutions/voice-recognition/VoiceRecognitionPage";
import InsourcingPage from "./pages/services/ITSolutions/insources/InsourcingServicesPage";
import OutsourcePage from "./pages/services/ITSolutions/outsources/OutsourcingServicesPage";
import RemoteStaffingPage from "./pages/services/ITSolutions/remote/RemoteStaffingPage";

import ScrollToTop from "./components/layout/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<Career />} />

        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/ai-solutions" element={<AISolutionsPage />} />
        <Route path="/services/it-solutions" element={<ITSolutionsPage />} />
        <Route path="/services/internal-projects" element={<InternalProjectsPage />} />

        <Route path="/services/ai-solutions/chatbots" element={<ChatbotPage />} />
        <Route path="/services/ai-solutions/voicebots" element={<VoicebotsPage />} />
        <Route path="/services/ai-solutions/voice-recognition" element={<VoiceRecognitionPage />} />
        <Route path="/services/it-solutions/insourcing" element={<InsourcingPage />} />
        <Route path="/services/it-solutions/outsourcing" element={<OutsourcePage />} />
        <Route path="/services/it-solutions/remote-staffing" element={<RemoteStaffingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;