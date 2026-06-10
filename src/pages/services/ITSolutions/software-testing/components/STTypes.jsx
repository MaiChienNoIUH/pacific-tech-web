import { motion } from "framer-motion";
import { ClipboardCheck, FileBarChart2, RefreshCw, TestTubes } from "lucide-react";
import Container from "../../../../../components/ui/Container";
import typeImg from "../../../../../assets/type-cycle.jpg";

const qualityCards = [
  {
    title: "Collaborative Planning",
    desc: "Our team is committed to shift-left testing, participating in grooming and planning sessions to identify issues early in the development cycle.",
    icon: ClipboardCheck,
  },
  {
    title: "Comprehensive Test Coverage",
    desc: "Our test cases cover all functional and non-functional aspects of the application.",
    icon: TestTubes,
  },
  {
    title: "Detailed Reporting",
    desc: "We provide clear and actionable reports on test results, defects, and recommendations for improvement.",
    icon: FileBarChart2,
  },
  {
    title: "Continuous Integration",
    desc: "We integrate testing into your CI/CD pipeline to ensure continuous quality assurance.",
    icon: RefreshCw,
  },
];

export default function TestingTypes() {
  return (
    <section className="py-20 pt-16 bg-[#f4f7fa] relative overflow-hidden">
      <div className="hidden absolute inset-0 bg-[linear-gradient(to_right,#dbe4ee_1px,transparent_1px),linear-gradient(to_bottom,#dbe4ee_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-[0.18]" />

      <Container>
        <div className="relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl! mx-auto! text-center! mb-20"
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

            <div className="mt-4 lg:mt-12 flex justify-center">
              <img
                src={typeImg}
                alt="Software testing process diagram"
                className="w-full max-w-6xl h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>

          {/* LOWER CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-12"
          >
            {qualityCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="group flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-2xl border border-slate-200 bg-white flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-500 group-hover:shadow-lg">
                  <card.icon
                    size={22}
                    className="text-slate-500 group-hover:text-white transition-colors duration-300"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed max-w-md">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
