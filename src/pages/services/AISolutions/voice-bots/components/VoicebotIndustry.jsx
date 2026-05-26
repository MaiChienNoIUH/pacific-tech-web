import Container from "../../../../../components/ui/Container";
import voicebot1 from "../../../../../assets/voicebot-1.webp";
import voicebot2 from "../../../../../assets/voicebot-2.png";
import voicebot3 from "../../../../../assets/voicebot-3.png";

import { Landmark, ShieldAlert, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

const verticals = [
  {
    icon: Landmark,
    title: "Banking & Finance",
    desc: "Automate high-volume customer interactions securely and efficiently.",
    cases: [
      "Balance inquiries",
      "Card activation",
      "Loan application updates",
      "Fraud alerts",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Insurance",
    desc: "Improve customer response times and streamline claims communication.",
    cases: [
      "Claims updates",
      "Policy renewals",
      "Emergency assistance",
      "Payment reminders",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Reduce administrative workload with automated patient communication.",
    cases: [
      "Appointment scheduling",
      "Patient reminders",
      "Prescription notifications",
      "Service support",
    ],
  },
];

export default function VoicebotIndustry() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-start">
          
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-14"
            >
              <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700">
                Industry Applications
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
                Voice AI Solutions Across Industries
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Voicebots can be tailored to different industries and
                operational environments, helping organizations automate
                customer interactions at scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-6">
              {verticals.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.015,
                  }}
                  className="p-8 rounded-3xl bg-[#0F1F4A] border border-cyan-900/40 text-left flex flex-col justify-between hover:border-cyan-700/60 transition-all duration-300 group relative overflow-hidden"
                >

                  {/* Hover Line */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-cyan-400 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />

                  <div>
                    <motion.div
                      whileHover={{ rotate: 6 }}
                      transition={{ duration: 0.25 }}
                      className="w-12 h-12 rounded-xl bg-linear-to-tr from-cyan-500 to-blue-600 text-slate-950 flex items-center justify-center mb-6 shadow-md shadow-cyan-500/10 font-bold"
                    >
                      <item.icon size={22} />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-full min-h-155 hidden lg:block"
          >
            <motion.img
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              src={voicebot1}
              alt=""
              className="absolute top-0 left-0 w-70 rounded-4xl shadow-2xl object-cover border border-slate-200"
            />

            <motion.img
              initial={{ y: 40 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              src={voicebot2}
              alt=""
              className="absolute top-40 right-0 w-65 rounded-4xl shadow-2xl object-cover border border-slate-200"
            />

            <motion.img
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              src={voicebot3}
              alt=""
              className="absolute bottom-0 left-14 w-75 rounded-4xl shadow-2xl object-cover border border-slate-200"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}