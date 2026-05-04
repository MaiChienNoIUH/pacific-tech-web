import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Blog from "./components/Blog";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Blog />
      <CTA />
      <Footer />
    </>
  );
}
