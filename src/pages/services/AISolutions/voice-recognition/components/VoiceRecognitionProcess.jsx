import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import voiceRecognitionProcess from "../../../../../assets/voice-recognition-process.jpeg";

const steps = [
  {
    title: "Audio Capture",
    desc: "Capture raw voice input from calls, devices, or streaming sources.",
  },
  {
    title: "Speech-to-Text Engine",
    desc: "Convert audio into structured text with high accuracy models.",
  },
  {
    title: "Language Detection",
    desc: "Automatically identify language and dialect in real time.",
  },
  {
    title: "AI Understanding",
    desc: "Extract intent, sentiment, and key entities from speech.",
  },
];

export default function VoiceRecognitionProcess() {
  return (
    <section className="py-24 bg-slate-950 text-white overflow-hidden relative">
       {/* BACKGROUND */}
  <div className="absolute inset-0 bg-[linear-gradient(135deg,#163B66_0%,#0E1D54_28%,#0B1744_55%,#081235_100%)]" />

  {/* LEFT CYAN GLOW */}
  <div className="absolute -bottom-45 -left-35 w-130 h-130 bg-cyan-400/35 blur-[130px] rounded-full" />

  {/* SUBTLE DARK DEPTH */}
  <div className="absolute inset-0 bg-black/10" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-20 items-center relative z-10">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm font-semibold tracking-wide text-cyan-400 backdrop-blur-sm">
              Voice Processing Pipeline
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-7 leading-tight tracking-tight">
              How Voice Recognition Works
            </h2>

            <motion.div
              className="mt-8 space-y-10 border-l border-slate-700 pl-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.12,
                  },
                },
              }}
            >
              {steps.map((s, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: -30,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    x: 8,
                  }}
                  className="relative group"
                >
                  {/* animated dot */}
                  <motion.div
                    whileHover={{
                      scale: 1.3,
                      boxShadow: "0 0 25px rgba(34,211,238,0.7)",
                    }}
                    transition={{ duration: 0.25 }}
                    className="absolute -left-11.5 top-1.5 w-4 h-4 rounded-full bg-cyan-400 border-4 border-slate-950"
                  />

                  {/* glass card */}
                  <div className="rounded-3xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6 transition-all duration-300 group-hover:border-cyan-500/30 group-hover:bg-slate-900/70 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                    <h3 className="text-xl font-semibold text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300">
                      {s.title}
                    </h3>

                    <p className="text-slate-400 mt-3 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative hidden lg:flex items-center justify-center"
          >
            
            {/* top floating card */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-10 z-20 p-5 rounded-3xl bg-slate-900/95 shadow-2xl border border-slate-800 backdrop-blur-xl"
            >
              <div className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                AI Processing
              </div>

              <div className="mt-2 text-2xl font-bold text-white">
                Speech Intelligence
              </div>

              <div className="mt-3 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-slate-400">
                  Real-time analysis active
                </span>
              </div>
            </motion.div>

            {/* image glow */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full scale-90" />

            {/* image */}
            <motion.img
              whileHover={{
                scale: 1.03,
                rotate: -1,
              }}
              transition={{
                duration: 0.45,
              }}
              src={voiceRecognitionProcess}
              alt="Voice Recognition Process"
              className="relative z-10 w-162.5 max-w-none rounded-[2.5rem] border border-slate-800 shadow-2xl object-cover"
            />

            {/* floating bottom metric */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 right-0 z-20 rounded-3xl border border-cyan-500/20 bg-slate-900/95 backdrop-blur-xl px-6 py-5 shadow-2xl"
            >
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                Accuracy
              </div>

              <div className="mt-2 text-3xl font-bold text-white">
                95%
              </div>

              <p className="mt-1 text-sm text-slate-400">
                Multilingual speech recognition
              </p>
            </motion.div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}