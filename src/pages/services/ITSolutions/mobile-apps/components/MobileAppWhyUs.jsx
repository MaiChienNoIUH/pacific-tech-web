import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import { CheckCircle2, Paintbrush, ShieldCheck, Rocket, RefreshCw, Users, BadgeCheck } from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Business Analysis",
    desc: "We define product scope, roadmap priorities, and mobile requirements with practical clarity.",
  },
  {
    icon: Paintbrush,
    title: "Platform UX",
    desc: "Native-feeling interfaces are designed for smooth flows, visual consistency, and usability.",
  },
  {
    icon: Users,
    title: "UI Design",
    desc: "Interfaces are planned to be simple, intuitive, and aligned with your brand identity.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    desc: "We validate critical journeys, edge cases, and device compatibility before release.",
  },
  {
    icon: Rocket,
    title: "Launch Readiness",
    desc: "App Store and Play Store release support keeps delivery predictable and fast.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Maintenance",
    desc: "We continue supporting updates, fixes, and improvements after launch.",
  },
];

const bullets = [
  "Cross-platform and native delivery options",
  "Transparent communication and milestone tracking",
  "Security-minded engineering practices",
  "End-to-end support from discovery to maintenance",
];

export default function MobileAppWhyUs() {
  return (
    <section className="py-24 bg-[#f4f7fa] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbe4ee_1px,transparent_1px),linear-gradient(to_bottom,#dbe4ee_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-[0.18]" />

      <Container>
        <div className="relative z-10 grid lg:grid-cols-[420px_1fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="lg:sticky lg:top-20"
          >
            <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-white border border-slate-200 text-sm font-semibold text-cyan-700 shadow-sm">
              Why Us?
            </span>

            <h2 className="mt-6 text-3xl! font-bold text-slate-900 leading-tight tracking-tight">
              Build user-centric mobile apps that perform in the real world
            </h2>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Our mobile team combines product thinking, clean architecture, and delivery discipline to create apps that feel native, stable, and ready to scale.
            </p>

            <div className="mt-8 space-y-4">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-600 mt-1 shrink-0" size={20} />
                  <p className="text-slate-600 leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group p-7 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                  <feature.icon size={24} className="text-cyan-600" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}