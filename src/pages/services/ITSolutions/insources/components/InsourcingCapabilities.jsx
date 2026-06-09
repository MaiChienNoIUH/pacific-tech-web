import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

import {
  Users,
  ShieldCheck,
  Layers3,
  Cloud,
  Brain,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    icon: Users,
    title: "Embedded Engineering Teams",
    desc: "Dedicated developers integrated directly into your delivery workflows and internal processes.",
  },
  {
    icon: Workflow,
    title: "Agile Collaboration",
    desc: "Seamless communication and sprint execution aligned with your business objectives.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Secure development practices and compliance-ready engineering operations.",
  },
  {
    icon: Layers3,
    title: "Cross-Functional Expertise",
    desc: "Frontend, backend, QA, DevOps, UI/UX, and architecture specialists in one ecosystem.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    desc: "Scalable cloud-native deployment pipelines and infrastructure optimization.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    desc: "Modern AI-powered systems integrated into business workflows and customer experiences.",
  },
];

export default function InsourcingCapabilities() {
  return (
    <section className="py-24 bg-[#f4f7fa] relative overflow-hidden">
      <div className="hidden absolute inset-0 bg-[linear-gradient(to_right,#dbe4ee_1px,transparent_1px),linear-gradient(to_bottom,#dbe4ee_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-[0.18]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-20">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-20 h-fit"
          >
            <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-white border border-slate-200 text-sm font-semibold tracking-wide text-cyan-700 shadow-sm">
              Core Capabilities
            </span>

            <h2 className="mt-7 text-5xl font-bold text-slate-900 leading-[1.05] tracking-tight">
              High-Performance Technology Teams
            </h2>

            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Flexible engineering capabilities designed to accelerate delivery,
              reduce hiring friction, and strengthen long-term product growth.
            </p>
          </motion.div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {capabilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.06,
                }}
                whileHover={{ y: -6 }}
                className="group p-8 rounded-4xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-cyan-200 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-full bg-linear-to-br from-cyan-50 to-blue-50 border border-slate-200 flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:border-cyan-200 transition-all duration-300">
                  <item.icon
                    size={28}
                    strokeWidth={2}
                    className="text-cyan-600 group-hover:text-cyan-500 transition-colors"
                  />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900 leading-tight tracking-tight group-hover:text-cyan-700 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
