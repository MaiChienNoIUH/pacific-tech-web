import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

import healthcareImg from "../../../../../assets/voice-healthcare.webp";
import bankingImg from "../../../../../assets/voice-banking.jpg";
import retailImg from "../../../../../assets/voice-retail.png";
import telecomImg from "../../../../../assets/voice-telecom.webp";
import logisticsImg from "../../../../../assets/voice-logistics.webp";

const cases = [
  {
    title: "Healthcare",
    desc: "Enable voice-assisted appointment scheduling, patient verification, and hands-free documentation workflows for medical staff.",
    image: healthcareImg,
  },
  {
    title: "Banking & Financial",
    desc: "Automate voice authentication, onboarding workflows, and fraud detection with secure biometric voice recognition.",
    image: bankingImg,
  },
  {
    title: "Retail & E-Commerce",
    desc: "Deliver personalized shopping experiences through voice assistants and multilingual customer support automation.",
    image: retailImg,
  },
  {
    title: "Telecom & Utilities",
    desc: "Streamline customer service with voice-enabled IVR systems, real-time sentiment analysis, and multilingual support.",
    image: telecomImg,
  },
  {
    title: "Transportation & Logistics",
    desc: "Optimize fleet management and customer support with voice-activated dispatch systems and real-time communication tools.",
    image: logisticsImg,
  }
];

export default function VoiceRecognitionUseCases() {
  return (
    <section className="py-28 bg-[#f4f7fa] overflow-hidden relative">
      {/* subtle background */}
      <div className="absolute top-0 left-0 w-105 h-105 bg-cyan-100/50 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-24">
          
          {/* LEFT TITLE */}
          <motion.div
            className="lg:sticky lg:top-2 h-fit"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-white border border-slate-200 text-sm font-semibold tracking-wide text-cyan-700 shadow-sm">
              Industry Solutions
            </span>

            <h2 className="mt-2 text-3xl! font-bold text-slate-900 leading-[1.05] tracking-tight">
              Industry Applications
            </h2>

            <p className="mt-2 text-slate-700 leading-relaxed">
              AI-powered voice recognition systems tailored for real-world operational workflows.
            </p>
          </motion.div>

          {/* RIGHT LIST */}
          <div className="space-y-14">
            {cases.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -4 }}
                className="group border-b border-slate-200 pb-14"
              >
                <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-3 md:gap-2 lg:gap-10 items-center">
                  
                  {/* IMAGE */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden rounded-4xl bg-white shadow-sm border border-slate-200"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-45 object-cover transition-transform duration-700"
                    />
                  </motion.div>

                  {/* CONTENT */}
                  <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-2 items-start">
                    
                    <motion.h3
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: 0.12,
                      }}
                      className="text-3xl font-bold text-slate-900 tracking-tight leading-tight group-hover:text-cyan-700 transition-colors duration-300"
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: 0.18,
                      }}
                      className="text-lg text-slate-600 leading-relaxed max-w-2xl"
                    >
                      {item.desc}
                    </motion.p>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}