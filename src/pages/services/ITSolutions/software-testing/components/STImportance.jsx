import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import { ChevronRight, ShieldAlert, TrendingUp, Lock, Zap } from "lucide-react";

import testingImg from "../../../../../assets/software-testing-dashboard.png";

const benefits = [
  {
    title: "Early Issue Detection",
    desc: "Catch quality gaps at the earliest stages to prevent expensive production failures.",
    icon: ShieldAlert,
  },
  {
    title: "Product Excellence",
    desc: "Comprehensive validation ensures your software exceeds user expectations.",
    icon: TrendingUp,
  },
  {
    title: "Security Hardening",
    desc: "Advanced security assessments eliminate vulnerabilities before deployment.",
    icon: Lock,
  },
  {
    title: "Rapid Delivery",
    desc: "Continuous validation practices accelerate time-to-market without compromise.",
    icon: Zap,
  },
];

export default function STImportance() {
  return (
    <section className="py-28 bg-white border-b border-slate-200 overflow-hidden relative">
      {/* glow */}
      <div className="absolute top-0 right-0 w-130 h-130 bg-cyan-100/40 blur-[130px] rounded-full" />

      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-[0.18]" />

      <Container>
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-20 items-center relative z-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-semibold tracking-wide text-cyan-700 shadow-sm">
              Quality Assurance Excellence
            </span>

            <h2 className="mt-7 text-4xl! font-bold leading-[1.05] tracking-tight text-slate-900">
              Why Software Testing Matters for Modern Products
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed">
              Effective software testing ensures your applications meet business
              requirements, deliver consistent user experiences, and maintain
              high operational reliability across all deployment environments.
            </p>

            <div className="mt-10 rounded-4xl overflow-hidden border border-slate-200 shadow-2xl">
              <img
                src={testingImg}
                alt="Software testing dashboard"
                className="w-full h-105 object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="mt-12 space-y-6">
              {benefits.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="group p-6 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    {/* icon */}
                    <div className="w-13 h-13 rounded-2xl bg-cyan-100 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-cyan-500">
                      <item.icon
                        size={24}
                        className="text-cyan-700 group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    {/* content */}
                    <div>
                      <div className="flex items-center gap-2">
                        <ChevronRight size={18} className="text-cyan-500" />

                        <h3 className="text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* glow */}
            <div className="absolute -bottom-16 -right-10 w-80 h-80 bg-cyan-100/30 blur-[120px] rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
