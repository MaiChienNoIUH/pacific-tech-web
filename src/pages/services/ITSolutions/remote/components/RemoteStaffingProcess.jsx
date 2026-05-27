import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

import processImg from "../../../../../assets/insourcing-process2.jpg";

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "Understand your business goals, workflows, and staffing requirements.",
  },
  {
    step: "02",
    title: "Talent Matching",
    desc: "Identify remote professionals aligned with your stack and culture.",
  },
  {
    step: "03",
    title: "Candidate Interviews",
    desc: "Review and interview shortlisted candidates with your internal team.",
  },
  {
    step: "04",
    title: "Team Onboarding",
    desc: "Quickly integrate remote professionals into your operations and tools.",
  },
];


export default function RemoteStaffingProcess() {
  return (
    <section className="py-20 bg-[#13203F] text-white relative overflow-hidden">
      <Container>
        {/* HEADER */}
       <div className="max-w-3xl mb-20">
            <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-sm font-semibold text-cyan-300">
              Hiring Process
            </span>

            <h2 className="mt-7 text-4xl! font-bold leading-tight">
              A Streamlined Remote Staffing Workflow
            </h2>
          </div>

        {/* GRID 2 CỘT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: STEPS */}
          <div className="space-y-12 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />

            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="relative pl-14"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
              >
                <div className="absolute left-2 top-2 w-4 h-4 bg-cyan-400 rounded-full" />

                <div className="text-sm text-cyan-300">
                  Step {String(i + 1).padStart(2, "0")}
                </div>

                <h3 className="text-2xl font-semibold text-cyan-200">
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