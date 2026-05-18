import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../../components/ui/Container";
import heroImage from "../../../assets/service-hero.png";

const slides = [
  {
    title: "AI Automation & Intelligent Systems",
    desc: "We build AI-powered solutions that automate workflows and help businesses make smarter decisions in real time.",
  },
  {
    title: "Modern Web & Mobile Development",
    desc: "We design and develop high-performance web and mobile applications with scalable architecture and smooth user experience.",
  },
  {
    title: "Enterprise IT & Digital Transformation",
    desc: "We deliver enterprise systems and internal platforms that streamline operations and improve overall business efficiency.",
  },
];

export default function ServicesHero() {
  const [index, setIndex] = useState(0);

  // auto rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-[#eef5ff]">
      {/* IMAGE BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="services background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-[#061634]/15 via-[#0b1f4d]/8 to-transparent" />

      {/* glow nhẹ hơn */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-blue-400/8 blur-[140px]" />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* badge */}
          <span className="inline-flex items-center px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-600 text-sm font-medium mb-8">
            OUR SERVICES
          </span>

          {/* title */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-10 text-white!">
            Smart Digital
            <span className="text-blue-600"> Solutions</span>
            <br />
            For Modern Businesses
          </h1>

          {/* SLIDER CONTENT */}
          <div className="relative min-h-27.5 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl"
              >
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {slides[index].title}
                </h3>

                <p className="text-blue-100/85 text-base md:text-lg leading-relaxed">
                  {slides[index].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* DOTS (dạng thanh ngang) */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${
                    i === index
                      ? "w-10 bg-blue-600"
                      : "w-6 bg-blue-600/30 hover:bg-blue-600/50"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
