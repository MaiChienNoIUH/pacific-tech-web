import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Proactive risk mitigation through continuous quality validation",
  "Enhanced product reliability and user satisfaction",
  "Reduced post-launch defects and production incidents",
  "Faster release cycles with confidence",
  "Comprehensive security and compliance coverage",
];

export default function STBenefits() {
  return (
    <section className="py-22 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0B1744,#081235,#050A1F)]" />
      <div className="absolute -top-40 right-1/3 w-160 h-160 bg-cyan-500/10 blur-[160px] rounded-full" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-semibold">
              Why Our Testing
            </span>

            <h2 className="mt-7 text-4xl font-bold leading-tight">
              Ensure Quality at Every Stage
            </h2>

            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              By integrating intelligent testing practices early in development and maintaining continuous validation throughout the lifecycle, we help organizations deliver software that performs reliably at scale.
            </p>

            <div className="mt-12 space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="flex gap-4 items-start"
                >
                  <CheckCircle2 className="text-cyan-400 mt-1 shrink-0" size={24} />
                  <p className="text-slate-300 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-4xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            {/* gradient accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-cyan-500 via-sky-500 to-transparent" />

            <div className="relative z-10">
              <div className="text-cyan-300 text-sm uppercase tracking-widest font-bold">
                Quality Metrics
              </div>

              <div className="mt-6 space-y-8">
                <div>
                  <div className="text-4xl font-bold">98%</div>
                  <p className="text-slate-300 mt-2">Defect Detection Rate</p>
                </div>

                <div>
                  <div className="text-4xl font-bold">75%</div>
                  <p className="text-slate-300 mt-2">Cost Reduction in Production Issues</p>
                </div>

                <div>
                  <div className="text-4xl font-bold">50%</div>
                  <p className="text-slate-300 mt-2">Faster Release Timeline</p>
                </div>
              </div>

              <div className="mt-12 h-1 w-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
