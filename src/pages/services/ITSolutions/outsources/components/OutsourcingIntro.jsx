import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

import outsourcingIntro from "../../../../../assets/outsourcing-intro.jpg";

export default function OutsourcingIntro() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-130 h-130 bg-cyan-100/40 blur-[140px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] opacity-[0.18]" />

      <Container>
        <div className="grid lg:grid-cols-[1fr_560px] gap-20 items-center relative z-10">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-semibold text-cyan-700">
              End-to-End Delivery Model
            </span>

            <h2 className="mt-7 text-4xl! md:text-5xl font-bold text-slate-900 leading-tight">
              Deliver Faster with Fully Managed Engineering Teams
            </h2>

            <div className="mt-8 space-y-5 text-lg text-slate-600">
              <p>
                Pacific 
                <span className="font-semibold text-blue-600"> Tech</span> takes
                full responsibility for your software delivery — from planning,
                design, development to deployment and support.
              </p>

              <p>
                Instead of building internal teams, you gain access to a
                complete outsourced engineering unit that executes projects with
                speed, structure, and accountability.
              </p>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            className="relative hidden lg:flex"
          >
            <div className="absolute inset-0 bg-cyan-200/40 blur-3xl rounded-full scale-90" />

            <img
              src={outsourcingIntro}
              className="relative z-10 rounded-[2.5rem] border border-slate-200 shadow-2xl"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
