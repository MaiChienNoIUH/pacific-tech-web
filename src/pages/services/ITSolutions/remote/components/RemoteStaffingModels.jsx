import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import {
  Users,
  Globe,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const models = [
  {
    title: "Remote Staffing",
    icon: Users,
    desc: "End-to-end staffing support from sourcing and screening to onboarding and retention.",
  },
  {
    title: "Global Payroll",
    icon: Globe,
    desc: "Simplified payroll management for distributed international teams and contractors.",
  },
  {
    title: "Compliance Support",
    icon: ShieldCheck,
    desc: "Reduce legal and operational risks across global remote workforce management.",
  },
  {
    title: "Expansion Support",
    icon: TrendingUp,
    desc: "Scale into new markets with remote infrastructure and operational assistance.",
  },
];

export default function RemoteStaffingModels() {
  return (
    <section className="py-28 relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#163B66_0%,#0E1D54_28%,#0B1744_55%,#081235_100%)]" />

      <Container>
        <div className="relative z-10">
          <div className="max-w-3xl mb-18">
            <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-sm font-semibold text-cyan-300">
              Service Models
            </span>

            <h2 className="mt-7 text-4xl! font-bold">
              Everything You Need to Build Distributed Teams
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {models.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="p-8 rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/20">
                  <item.icon className="text-white" size={24} />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 text-slate-300 leading-relaxed">
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