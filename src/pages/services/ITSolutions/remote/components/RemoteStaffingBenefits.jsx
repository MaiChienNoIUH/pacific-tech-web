import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import { Users, Rocket } from "lucide-react";

const cards = [
  {
    title: "For SMBs",
    icon: Users,
    desc: "Reduce hiring complexity while expanding operations with dependable remote professionals integrated into your workflows.",
    points: [
      "Lower operational costs",
      "Flexible workforce scaling",
      "Long-term staffing support",
    ],
  },
  {
    title: "For Startups",
    icon: Rocket,
    desc: "Accelerate product development and growth with agile remote teams built for fast-moving environments.",
    points: [
      "Rapid hiring cycles",
      "Specialized technical talent",
      "Startup-friendly flexibility",
    ],
  },
];

export default function RemoteStaffingBenefits() {
  return (
    <section className="py-22 bg-[#f4f7fa] relative overflow-hidden">
      <Container>
        <div className="max-w-3xl mb-18">
          <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-white border border-slate-200 text-sm font-semibold text-cyan-700 shadow-sm">
            Flexible Staffing Models
          </span>

          <h2 className="mt-7 text-4xl! font-bold text-slate-900">
            Built for SMBs & Fast-Growing Startups
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="group p-10 rounded-4xl bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:border-cyan-200 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-8 shadow-lg shadow-cyan-500/20">
                <item.icon className="text-white" size={26} />
              </div>

              <h3 className="text-3xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-5 text-slate-600 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-8 space-y-4">
                {item.points.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}