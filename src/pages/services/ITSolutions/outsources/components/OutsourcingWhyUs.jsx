import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import { CheckCircle2 } from "lucide-react";

const items = [
  "End-to-end project delivery with full accountability",
  "Reduced hiring and operational overhead",
  "Access to senior engineering expertise on demand",
  "Faster execution with proven delivery frameworks",
  "Enterprise-grade security and governance",
];

export default function OutsourcingWhyUs() {
  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0B1744,#081235,#050A1F)]" />
      <div className="absolute -top-40 left-1/2 w-160 h-160 bg-cyan-500/10 blur-[160px] rounded-full -translate-x-1/2" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-20 relative z-10">

          <div>
            <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm">
              Why Outsourcing
            </span>

            <h2 className="mt-7 text-4xl font-bold">
              Focus on Growth While We Handle Delivery
            </h2>

            <p className="mt-6 text-slate-300 text-lg">
              Our outsourcing model helps companies reduce complexity and accelerate product delivery.
            </p>

            <div className="mt-10 space-y-5">
              {items.map((i, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle2 className="text-cyan-400 mt-1" />
                  <p className="text-slate-300">{i}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <div className="text-cyan-300 text-sm uppercase tracking-widest">
              Delivery Model
            </div>

            <h3 className="mt-4 text-3xl font-bold">
              Fully Managed Engineering Execution
            </h3>

            <p className="mt-6 text-slate-300">
              We operate as your external engineering department, handling planning, execution, QA, and deployment.
            </p>

            <div className="mt-10 h-1 w-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full" />
          </div>

        </div>
      </Container>
    </section>
  );
}