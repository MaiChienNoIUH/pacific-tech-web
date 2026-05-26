import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import { Mic, Languages, Brain, Shield } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Real-Time Speech-to-Text",
    desc: "Convert live audio into accurate text instantly with low latency processing.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    desc: "Detect and transcribe multiple languages and accents automatically.",
  },
  {
    icon: Brain,
    title: "AI Context Understanding",
    desc: "Extract meaning, intent, and structured insights from speech data.",
  },
];

export default function VoiceRecognitionFeatures() {
  return (
    <section className="py-20 bg-[#f4f7fa] overflow-hidden relative">
      {/* subtle background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbe4ee_1px,transparent_1px),linear-gradient(to_bottom,#dbe4ee_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-[0.18]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-18 lg:gap-24 items-start">
          
          {/* LEFT TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-20"
          >
            <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-white border border-slate-200 text-sm font-semibold tracking-wide text-cyan-700 shadow-sm">
              AI Voice Intelligence
            </span>

            <h2 className="mt-7 text-5xl font-bold text-slate-900 leading-[1.05] tracking-tight">
              Key Features
            </h2>

            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-sm">
              Powerful enterprise-grade speech recognition capabilities designed for modern AI workflows.
            </p>
          </motion.div>

          {/* RIGHT FEATURES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-16">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -6 }}
                className="group"
              >
                {/* ICON */}
                <div className="w-16 h-16 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-8 transition-all duration-300 group-hover:shadow-xl group-hover:border-cyan-200">
                  <div className="text-slate-400 transition-all duration-300 group-hover:text-cyan-600 group-hover:scale-110">
                    <f.icon size={32} strokeWidth={1.8} />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-slate-900 leading-snug tracking-tight transition-colors duration-300 group-hover:text-cyan-700">
                  {f.title}
                </h3>

                {/* DESC */}
                <p className="mt-4 text-lg text-slate-500 leading-relaxed max-w-md">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>

      {/* bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-400" />
    </section>
  );
}