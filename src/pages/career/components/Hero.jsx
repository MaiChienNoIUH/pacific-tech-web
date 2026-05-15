import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import { motion } from "framer-motion";
import careerHero from "../../../assets/career-hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <img
        src={careerHero}
        alt="Career Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#081028]/35"></div>

      {/* BLUE GRADIENT EFFECT */}
      <div className="absolute inset-0 bg-linear-to-r from-[#081028]/60 via-[#081028]/20 to-transparent"></div>

      {/* BLUR LIGHT */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl"
        >
          <p className="uppercase tracking-[0.3em] text-blue-300 mb-5">
            Careers at Pacific Tech
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Build the future
            <br />
            with <span className="text-blue-400">Pacific Tech</span>
          </h1>

          <p className="text-gray-300 mt-8 text-lg leading-relaxed max-w-2xl">
            Join a global team building AI-driven software solutions, scalable
            systems, and next-generation digital products.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
