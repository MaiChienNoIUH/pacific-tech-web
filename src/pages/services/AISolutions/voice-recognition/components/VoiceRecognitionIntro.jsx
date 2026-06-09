import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import voiceRecognitionIntro from "../../../../../assets/voice-recognition-intro.webp";

export default function VoiceRecognitionIntro() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 overflow-hidden relative">
      {/* subtle background glow */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-cyan-100/40 blur-[120px] rounded-full pointer-events-none" />

      {/* subtle grid */}
      <div className="hidden absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-[0.18]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-20 items-center relative z-10">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.1,
              }}
              className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-semibold tracking-wide text-cyan-700 shadow-sm"
            >
              What is Voice Recognition?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: 0.15,
              }}
              className="mt-7 text-4xl! md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight"
            >
              Transform Human Speech into Intelligent Business Data
            </motion.h2>

            <motion.div
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
              className="mt-8 space-y-5 text-lg text-slate-600 leading-relaxed"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                Voice recognition technology converts spoken language into
                accurate, structured digital text in real time. Powered by
                artificial intelligence and advanced speech processing models,
                it enables businesses to automate workflows, improve
                accessibility, and analyze conversations at scale.
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                From customer service platforms and meeting transcription to
                healthcare documentation and enterprise automation, AI-powered
                voice recognition helps organizations unlock faster
                communication, operational efficiency, and deeper insights.
              </motion.p>
            </motion.div>

            {/* stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="mt-10 grid grid-cols-2 gap-5 max-w-xl"
            >
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    scale: 0.96,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="group p-5 rounded-3xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300">
                  95%
                </div>

                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Speech recognition accuracy across multilingual datasets
                </p>
              </motion.div>

              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    scale: 0.96,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  },
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="group p-5 rounded-3xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300">
                  Real-Time
                </div>

                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Ultra-low latency transcription and voice processing
                </p>
              </motion.div>
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

            {/* image glow */}
            <div className="absolute inset-0 bg-cyan-200/40 blur-3xl rounded-full scale-90" />

            <img
              src={voiceRecognitionIntro}
              alt="Voice Recognition AI"
              className="relative z-10 w-155 max-w-none rounded-[2.5rem] shadow-2xl object-cover border border-slate-200"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}