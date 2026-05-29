import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

export default function RemoteStaffingCTA() {
  return (
    <section className="py-28 bg-white relative overflow-hidden">
      {/* glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-180 h-180 bg-cyan-100/50 blur-[160px] rounded-full" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-semibold text-cyan-700 shadow-sm">
            Build Your Remote Team
          </span>

          <h2 className="mt-7 text-4xl! font-bold text-slate-900 leading-tight">
            Scale Faster with Flexible Global Talent
          </h2>

          <p className="mt-7 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Access experienced remote professionals tailored to your business,
            workflows, and long-term growth strategy.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <button className="px-8 py-4 rounded-full bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-cyan-300/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}