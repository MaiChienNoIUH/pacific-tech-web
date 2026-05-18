import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../../../components/ui/Container";

const slides = [
  {
    title: "Next-Gen Working Utilities",
    desc: "Boosting team productivity and operational efficiency with tailored enterprise tools, internal dashboards, and automated management software.",
  },
  {
    title: "Immersive & Engaging Games",
    desc: "Crafting creative interactive games with rich mechanics, fluid graphics, and optimized architectures for digital entertainment ecosystems.",
  },
];

export default function InternalHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden bg-[#eef5ff]">
      <div className="absolute inset-0 bg-linear-to-b from-[#0e275d]/10 via-[#eef5ff]/40 to-[#eef5ff]" />

      <Container>
        <div className="relative z-10 text-left max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-2 rounded-full bg-blue-500/10 text-blue-600 border border-blue-500/20 mb-6 font-medium text-sm"
          >
            PACIFIC TECH ECOSYSTEM
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold text-[#0b1a3a] leading-tight mb-8 tracking-tight">
            Innovative Internal Products <br />
            <span className="text-blue-600">Built From Scratch</span>
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
                <h3 className="text-lg md:text-xl font-bold text-blue-600 mb-2">
                  {slides[index].title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
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
                  i === index ? "w-10 bg-blue-600" : "w-6 bg-blue-600/30 hover:bg-blue-600/50"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}