import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";
import heroImg from "../../../assets/about-hero.png";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-linear-to-br from-[#081028] to-[#0f2c6b] text-white">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full z-10"></div>

      <div className="absolute bottom-0 right-0 w-120 h-120 bg-cyan-400/10 blur-3xl rounded-full z-10"></div>

      {/* Full Screen Image */}
      <img
        src={heroImg}
        alt="About"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Content */}
      <Container className="relative h-full z-20">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 -translate-y-1/2 max-w-2xl"
        >
          <p className="uppercase tracking-[0.3em] text-blue-300 text-sm font-semibold mb-4">
            About Pacific Tech
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Building smarter digital experiences for modern businesses
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
            Pacific Tech helps startups and enterprises transform ideas into
            scalable digital products with AI, software engineering, and
            innovative technologies.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}