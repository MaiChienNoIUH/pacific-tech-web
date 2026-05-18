import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../../../components/ui/Container";
import aiHero from "../../../../assets/ai-hero.png";

// Khởi tạo nội dung slides chuyên sâu về AI Solutions
const slides = [
  {
    title: "Generative AI & Automation",
    desc: "We design secure, scalable and production-ready AI systems for workflow automation, advanced text/voice generation, and operation optimization.",
  },
  {
    title: "Predictive Analytics & Data Insights",
    desc: "Transform corporate data into actionable decisions with custom financial modeling, behavior tracking, and automated predictive intelligence.",
  },
  {
    title: "Enterprise AI Transformation",
    desc: "Seamlessly integrate complex machine learning models directly into your legacy tech stack or cloud infrastructure with enterprise-grade security.",
  },
];

export default function AIHero() {
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
          backgroundImage: `url(${aiHero})`,
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
            ENTERPRISE AI SOLUTIONS
          </motion.span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight text-white!">
            Build Intelligent <br />
            AI Systems <span className="text-blue-300">That Scale</span>
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
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${
                    i === index
                      ? "w-10 bg-blue-400"
                      : "w-6 bg-blue-400/30 hover:bg-blue-400/50"
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