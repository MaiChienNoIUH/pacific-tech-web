import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

import insourcingIntro from "../../../../../assets/insourcing-intro.webp";

export default function InsourcingIntro() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 overflow-hidden relative">
      {/* glow */}
      <div className="absolute top-0 right-0 w-130 h-130 bg-cyan-100/40 blur-[130px] rounded-full" />

      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-[0.18]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_560px] gap-20 items-center relative z-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-semibold tracking-wide text-cyan-700 shadow-sm">
              Strategic Team Extension
            </span>

            <h2 className="mt-7 text-4xl! md:text-5xl font-bold text-slate-900 leading-[1.05] tracking-tight">
              Build Scalable Engineering Teams Faster & Smarter
            </h2>

            <div className="mt-8 space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>
                Expand your internal capabilities with dedicated technology
                specialists who integrate seamlessly into your workflows,
                processes, and product delivery cycles.
              </p>

              <p>
                From frontend and backend engineering to DevOps, AI, and cloud
                infrastructure, we help businesses scale efficiently without
                the delays and overhead of traditional hiring.
              </p>
            </div>

            {/* stats */}
            <div className="mt-10 grid grid-cols-2 gap-5 max-w-xl">
              <motion.div
                whileHover={{ y: -6 }}
                className="p-5 rounded-3xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-slate-900">
                  24h
                </div>

                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Rapid engineer matching & onboarding process
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -6 }}
                className="p-5 rounded-3xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-slate-900">
                  Flexible
                </div>

                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Scale development teams up or down anytime
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-cyan-200/40 blur-3xl rounded-full scale-90" />

            <img
              src={insourcingIntro}
              alt="Insourcing Services"
              className="relative z-10 w-160 max-w-none rounded-[2.5rem] shadow-2xl object-cover border border-slate-200"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}