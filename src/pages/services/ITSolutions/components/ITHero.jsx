import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../../../components/ui/Container";
import ITHero2 from "../../../../assets/ITHero.png";

const slides = [
  {
    title: "Insourcing & Outsourcing Excellence",
    desc: "Scale your internal capabilities or deploy full-cycle dedicated software engineering teams tailored perfectly to your roadmap.",
  },
  {
    title: "Global Tech Talent & Remote Staffing",
    desc: "Access highly-vetted remote developers, designers, and QA engineers to eliminate local hiring constraints instantly.",
  },
  {
    title: "Robust Testing & Web/Mobile Development",
    desc: "Ensure flawless user experiences with rigorous automation testing and high-performance cross-platform digital platforms.",
  },
];

export default function ITHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-[#eef5ff]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${ITHero2})`,
        }}
      />

      {/* Overlay nhẹ để giữ readability + tone AI */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0b1f4d]/3 via-transparent to-transparent" />

      <Container>
        <div className="relative z-10 text-left max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full bg-blue-500/10 text-blue-200 border border-blue-400/20 mb-6"
          >
            ENTERPRISE IT SOLUTIONS
          </motion.span>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8 tracking-tight text-white!">
            Scale Your Engineering <br />
            Capabilities{" "}
            <span className="text-blue-300">With Expert Teams</span>
          </h1>

          <div className="relative min-h-27.5 md:min-h-20 flex flex-col items-start justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="max-w-2xl"
              >
                <h3 className="text-lg md:text-xl font-bold text-blue-300 mb-2">
                  {slides[index].title}
                </h3>
                <p className="text-blue-100/80 text-base md:text-lg leading-relaxed">
                  {slides[index].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-start gap-3 mt-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-10 bg-blue-400"
                    : "w-6 bg-blue-400/30 hover:bg-blue-400/50"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
