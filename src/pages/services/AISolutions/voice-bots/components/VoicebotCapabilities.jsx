import Container from "../../../../../components/ui/Container";
import {
  ShieldCheck,
  Zap,
  Layers,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const capabilities = [
  {
    icon: Zap,
    title: "24/7 Automated Support",
    desc: "Deliver instant customer assistance around the clock without increasing support headcount.",
    iconWrap: "bg-cyan-100",
    iconColor: "text-cyan-700",
  },
  {
    icon: Layers,
    title: "Seamless System Integration",
    desc: "Connect voicebots directly with CRMs, booking systems, helpdesks, and enterprise workflows.",
    iconWrap: "bg-blue-100",
    iconColor: "text-blue-700",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Enterprise Ready",
    desc: "Built with secure infrastructure, encrypted communication, and scalable deployment architecture.",
    iconWrap: "bg-indigo-100",
    iconColor: "text-indigo-700",
  },
  {
    icon: Users,
    title: "Human-Like Conversations",
    desc: "Provide natural conversational experiences with smooth escalation to live support agents.",
    iconWrap: "bg-purple-100",
    iconColor: "text-purple-700",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function VoicebotCapabilities() {
  return (
    <section className="py-24 bg-[#f8fbff] border-b border-slate-200 overflow-hidden">
      <Container>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700">
            Key Benefits
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-slate-900 leading-tight">
            Designed for Scalable Customer Communication
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Improve operational efficiency, automate repetitive interactions,
            and deliver faster customer service experiences with enterprise AI
            voice solutions.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-7"
        >
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="group relative bg-white border border-slate-200 rounded-4xl p-8 hover:shadow-2xl hover:border-slate-300 transition-all duration-300 overflow-hidden"
            >

              {/* Soft Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                whileHover={{ rotate: 4, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 260 }}
                className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.iconWrap} ${item.iconColor}`}
              >
                <item.icon size={26} />
              </motion.div>

              <h3 className="relative z-10 text-2xl font-semibold text-slate-900 mb-4">
                {item.title}
              </h3>

              <p className="relative z-10 text-slate-600 leading-relaxed">
                {item.desc}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}