import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Faster onboarding compared to traditional hiring",
  "Dedicated engineers fully integrated into your team",
  "Transparent communication & reporting",
  "Scalable team size on demand",
  "Enterprise-grade security practices",
];

export default function InsourcingWhyUs() {
  return (
    <section className="py-22 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0B1744,#081235,#050A1F)]" />
      <div className="absolute -top-40 left-1/2 w-160 h-160 bg-cyan-500/10 blur-[160px] rounded-full -translate-x-1/2" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-semibold">
              Why Choose Us
            </span>

            <h2 className="mt-7 text-3xl! font-bold leading-tight">
              A Smarter Way to Scale Engineering Teams
            </h2>

            <p className="mt-6 text-slate-300 text-lg">
              We help companies accelerate delivery by embedding highly skilled engineers directly into their ecosystem.
            </p>

            <div className="mt-10 space-y-5">
              {items.map((i, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 className="text-cyan-400 mt-1" />
                  <p className="text-slate-300">{i}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-4xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-2xl"
          >
            <div className="text-cyan-300 text-sm uppercase tracking-widest font-bold">
              Engagement Model
            </div>

            <div className="mt-4 text-3xl font-bold">
              Embedded Team Partnership
            </div>

            <p className="mt-6 text-slate-300 leading-relaxed">
              Your dedicated engineers work as an extension of your internal team with full alignment on processes, tools, and goals.
            </p>

            <div className="mt-10 h-1 w-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}