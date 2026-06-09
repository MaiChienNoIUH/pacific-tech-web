import { motion } from "framer-motion";
import Container from "../../../../components/ui/Container";

import webDevImage from "../../../../assets/web-app.avif";

export default function WebDevOverview() {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-b border-slate-200">
      {/* glow */}
      <div className="absolute top-0 right-0 w-140 h-140 bg-cyan-100/40 blur-[140px] rounded-full" />

      {/* grid */}
      <div className="hidden absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-[0.18]" />

      <Container>
        <div className="grid lg:grid-cols-[1fr_560px] gap-20 items-center relative z-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-semibold text-cyan-700 shadow-sm">
              Web Development Services
            </span>

            <h2 className="mt-7 text-4xl! font-bold text-slate-900 leading-[1.05] tracking-tight">
              Build scalable web platforms with a product-first approach
            </h2>

            <p className="mt-7 text-lg text-slate-600 leading-relaxed">
              Create modern web applications that are reliable, maintainable, and
              designed to support both user growth and business expansion.
            </p>

            <p className="mt-5 text-lg text-slate-600 leading-relaxed">
              From SaaS products to internal business systems, we design and deliver
              web experiences with strong architecture, performance, and long-term value.
            </p>

            {/* stats */}
            <div className="mt-10 grid grid-cols-2 gap-5 max-w-xl">
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-slate-900">Modern Stack</div>
                <p className="mt-2 text-sm text-slate-500">
                  React, Node.js, Next.js, and cloud-ready tooling
                </p>
              </div>

              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
                <div className="text-3xl font-bold text-slate-900">End-to-End</div>
                <p className="mt-2 text-sm text-slate-500">
                  Strategy, development, and maintenance support
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
              src={webDevImage}
              alt="Web Development Overview"
              className="relative z-10 w-160 rounded-[2.5rem] border border-slate-200 shadow-2xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
