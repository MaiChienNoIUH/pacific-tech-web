import Container from "../../../../../components/ui/Container";
import voicebotIntro from "../../../../../assets/voicebot-intro.jpg";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function VoicebotIntro() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-20 items-center">
          
          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700"
            >
              What is a Voicebot?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 text-4xl md:text-5xl font-semibold text-slate-900 leading-tight"
            >
              Intelligent Voice Automation for Modern Businesses
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 space-y-5 text-lg text-slate-600 leading-relaxed"
            >
              <p>
                Voicebots use artificial intelligence to automate real-time
                customer conversations and phone interactions. They understand
                spoken language, respond naturally, and help businesses deliver
                faster customer experiences.
              </p>

              <p>
                From appointment scheduling and support inquiries to payment
                reminders and operational workflows, Voice AI helps organizations
                reduce manual workload while improving response efficiency.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35 }}
              src={voicebotIntro}
              alt=""
              className="rounded-4xl shadow-2xl object-cover border border-slate-200"
            />

            {/* Glow */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-56 h-56 bg-blue-100/50 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}