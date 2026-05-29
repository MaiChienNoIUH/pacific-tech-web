import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import { Users, Clock, Zap } from "lucide-react";

const models = [
  {
    icon: Users,
    title: "Dedicated QA Team",
    desc: "Full-time testing specialists embedded within your organization, working exclusively on your projects.",
    benefits: [
      "24/7 availability",
      "Deep product knowledge",
      "Seamless collaboration",
    ],
  },
  {
    icon: Clock,
    title: "Project-Based Testing",
    desc: "Focused quality assurance for specific initiatives or product launches with defined timelines.",
    benefits: ["Fixed scope", "Clear deliverables", "Cost predictable"],
  },
  {
    icon: Zap,
    title: "Augmented QA Support",
    desc: "Flexible resource scaling to supplement your existing testing team during peak periods.",
    benefits: [
      "On-demand scaling",
      "Specialized expertise",
      "No long-term commitment",
    ],
  },
];

export default function STEngagementModels() {
  return (
    <section className="py-28 bg-[#f4f7fa] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbe4ee_1px,transparent_1px),linear-gradient(to_bottom,#dbe4ee_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-[0.18]" />

      <Container>
        <div className="relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-20"
          >
            <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-white border border-slate-200 text-sm font-semibold text-cyan-700 shadow-sm">
              Engagement Options
            </span>

            <h2 className="mt-7 text-5xl font-bold text-slate-900 leading-[1.05]">
              Flexible Partnership Models
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Choose the testing model that aligns with your team's capacity,
              budget, and project timeline.
            </p>
          </motion.div>

          {/* MODELS GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-4xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-cyan-200 transition-all duration-500 overflow-hidden"
              >
                {/* gradient top */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-linear-to-br from-cyan-50/70 via-sky-50/40 to-blue-50/70 rounded-4xl" />

                {/* content */}
                <div className="relative z-10">
                  {/* icon */}
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-cyan-50 to-blue-50 border border-slate-200 flex items-center justify-center shadow-sm group-hover:shadow-lg group-hover:border-cyan-200 transition-all duration-300">
                    <model.icon
                      size={32}
                      strokeWidth={2}
                      className="text-cyan-600 group-hover:text-cyan-600 group-hover:scale-110 transition-all duration-300"
                    />
                  </div>

                  {/* title & desc */}
                  <h3 className="mt-6 text-2xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {model.title}
                  </h3>

                  <p className="mt-4 text-slate-600 leading-relaxed">
                    {model.desc}
                  </p>

                  {/* benefits */}
                  <ul className="mt-8 space-y-3">
                    {model.benefits.map((benefit, bidx) => (
                      <li
                        key={bidx}
                        className="flex items-center gap-3 text-slate-600"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
