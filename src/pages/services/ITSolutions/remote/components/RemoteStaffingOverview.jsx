import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

import staffingImg from "../../../../../assets/remote-staffing-overview.webp";

export default function RemoteStaffingOverview() {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-b border-slate-200">
      {/* glow */}
      <div className="absolute top-0 right-0 w-140 h-140 bg-cyan-100/40 blur-[140px] rounded-full" />

      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-[0.18]" />

      <Container>
        <div className="grid lg:grid-cols-[1fr_560px] gap-20 items-center relative z-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-semibold text-cyan-700 shadow-sm">
              Remote Staffing Solutions
            </span>

            <h2 className="mt-7 text-5xl font-bold text-slate-900 leading-[1.05] tracking-tight">
              Build Remote Teams Without Traditional Hiring Bottlenecks
            </h2>

            <p className="mt-7 text-lg text-slate-600 leading-relaxed">
              Access highly skilled remote professionals across engineering,
              operations, support, AI, and digital services while maintaining
              flexibility, speed, and operational efficiency.
            </p>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              Our remote staffing model helps startups and SMBs scale faster
              with global talent aligned to your workflows, tools, and business
              objectives.
            </p>

            {/* stats */}
            <div className="mt-10 grid grid-cols-2 gap-5 max-w-xl">
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-slate-900">
                  60%
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  Average operational cost savings
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-slate-900">
                  21 Days
                </div>

                <p className="mt-2 text-sm text-slate-500">
                  Average remote onboarding timeline
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative hidden lg:flex justify-center"
          >
            <div className="absolute inset-0 bg-cyan-200/30 blur-3xl rounded-full" />

            <img
              src={staffingImg}
              alt="Remote Staffing"
              className="relative z-10 w-160 rounded-[2.5rem] border border-slate-200 shadow-2xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}