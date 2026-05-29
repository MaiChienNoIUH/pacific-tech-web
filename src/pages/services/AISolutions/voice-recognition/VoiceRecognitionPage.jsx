import Navbar from "../../../../components/layout/Navbar";
import Footer from "../../../../components/layout/Footer";

import Hero from "../components/AIHero";
import VoiceRecognitionIntro from "./components/VoiceRecognitionIntro";
import VoiceRecognitionFeatures from "./components/VoiceRecognitionFeatures";
import VoiceRecognitionProcess from "./components/VoiceRecognitionProcess";
import VoiceRecognitionUseCases from "./components/VoiceRecognitionUseCases";
import VoiceRecognitionSteps from "./components/VoiceRecognitionSteps";

export default function VoiceRecognitionPage() {
  return (
    <>
      <Navbar />

      <Hero />
      <VoiceRecognitionIntro />
      <VoiceRecognitionFeatures />
      <VoiceRecognitionProcess />
      <VoiceRecognitionUseCases />
      <VoiceRecognitionSteps />

      <Footer />
    </>
  );
}
