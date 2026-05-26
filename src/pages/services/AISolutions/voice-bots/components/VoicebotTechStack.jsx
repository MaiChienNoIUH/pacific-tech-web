import Container from "../../../../../components/ui/Container";
import {
  Mic,
  BrainCircuit,
  AudioLines,
} from "lucide-react";
import { motion } from "framer-motion";
import voicebotDardboard from "../../../../../assets/voicebot-dardboard1.png";

const items = [
  {
    icon: Mic,
    title: "Speech Recognition",
    desc: "Transforms spoken conversations into text in real time for accurate request processing.",
  },
  {
    icon: BrainCircuit,
    title: "Natural Language Understanding",
    desc: "Understands customer intent, conversational context, and user requests naturally.",
  },
  {
    icon: AudioLines,
    title: "Voice Response Generation",
    desc: "Generates smooth, natural voice responses that feel conversational and human-like.",
  },
];

export default function VoicebotTechStack() {
  return (
    <section className="py-24 bg-[#f8fbff] border-b border-slate-200 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700">
              How It Works
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
              How Voicebots Understand and Respond
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Our Voice AI combines speech recognition, natural language
              understanding, and voice synthesis technologies to create smooth
              and intelligent customer conversations.
            </p>

            <div className="mt-6 space-y-5">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.12,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="bg-white border border-slate-200 rounded-3xl p-7 flex gap-5 transition-all duration-300 hover:shadow-lg"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0"
                  >
                    <item.icon size={24} />
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.img
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              src={voicebotDardboard}
              alt=""
              className="rounded-4xl shadow-2xl border border-slate-200"
            />

            {/* Soft background glow */}
            <div className="absolute -z-10 bottom-0 right-0 w-64 h-64 bg-blue-100/40 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}