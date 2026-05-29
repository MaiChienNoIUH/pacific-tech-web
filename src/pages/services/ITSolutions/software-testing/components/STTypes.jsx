import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

const testingTypes = [
  "Functional Testing",
  "Performance Testing",
  "Security Testing",
  "Automation Testing",
  "API Testing",
  "Mobile Testing",
  "Regression Testing",
  "UAT Support",
];

const processSteps = [
  { title: "Requirements Review", num: "01" },
  { title: "Test Planning", num: "02" },
  { title: "Environment Setup", num: "03" },
  { title: "Test Design", num: "04" },
  { title: "Execution", num: "05" },
  { title: "Defect Tracking", num: "06" },
];

export default function TestingTypes() {
  return (
    <section className="py-28 bg-[#f4f7fa] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbe4ee_1px,transparent_1px),linear-gradient(to_bottom,#dbe4ee_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-[0.18]" />

      <Container>
        <div className="relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-20"
          >
            <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-white border border-slate-200 text-sm font-semibold tracking-wide text-cyan-700 shadow-sm">
              Testing Methodology
            </span>

            <h2 className="mt-7 text-5xl font-bold text-slate-900 leading-[1.05] tracking-tight">
              Agile-First Testing Approach
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We employ adaptive testing methodologies that emphasize intelligent validation, rapid issue detection, and seamless integration with your delivery pipeline.
            </p>
          </motion.div>

          {/* PROCESS CIRCULAR DIAGRAM - Simplified version */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-20 items-center">
            {/* LEFT - Process Steps */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {processSteps.map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-full bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-white font-bold text-lg">{step.num}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">{step.title}</h4>
                    <p className="text-slate-500 mt-1">Comprehensive validation</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* RIGHT - Testing Types Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {testingTypes.map((type, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:border-cyan-200 hover:bg-cyan-50/30 transition-all duration-300 text-center group"
                >
                  <p className="font-semibold text-slate-900 group-hover:text-cyan-700 transition-colors">
                    {type}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
