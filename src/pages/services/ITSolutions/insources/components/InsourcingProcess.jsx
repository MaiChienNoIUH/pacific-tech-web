import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

import processImg from "../../../../../assets/insourcing-process2.jpg";

const steps = [
  { title: "Discovery", desc: "Understand requirements and team structure." },
  { title: "Talent Matching", desc: "Select engineers aligned with your stack." },
  { title: "Integration", desc: "Embed team into your workflow." },
  { title: "Delivery", desc: "Start building and iterating quickly." },
  { title: "Scaling", desc: "Expand team size as needed." },
];

export default function InsourcingProcess() {
  return (
    <section className="py-20 bg-[#13203F] text-white relative overflow-hidden">
      <Container>

        {/* HEADER */}
        <span className="text-sm font-medium text-cyan-300 bg-cyan-400/10 border border-cyan-300/20 px-4 py-2 mb-3 rounded-full inline-block backdrop-blur-sm">
          Implementation Process
        </span>

        <h2 className="text-4xl! font-bold mb-16!">
          Build Faster with Our Insourcing Method
        </h2>

        {/* GRID 2 CỘT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: STEPS */}
          <div className="space-y-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-14"
              >
                <div className="absolute -left-1 top-1 text-xs font-semibold tracking-widest text-cyan-300">
                  Step {String(i + 1).padStart(2, "0")}
                </div>

                <div className="absolute left-2 top-6 w-4 h-4 bg-cyan-400 rounded-full" />

                <h3 className="text-2xl font-semibold text-cyan-300">
                  {s.title}
                </h3>

                <p className="text-slate-300 mt-2">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={processImg}
                alt="Process visualization"
                className="w-full h-125 object-cover"
              />
            </div>

            {/* glow effect nhẹ cho đẹp */}
            <div className="absolute -inset-6 bg-cyan-500/10 blur-3xl rounded-full -z-10" />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}