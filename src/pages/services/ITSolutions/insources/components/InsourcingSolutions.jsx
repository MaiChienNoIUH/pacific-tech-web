import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

import solution1 from "../../../../../assets/insourcing-solution-1.webp";
import solution2 from "../../../../../assets/insourcing-solution-2.png";
import solution3 from "../../../../../assets/ind-solution-3.jpg";

const solutions = [
  {
    title: "Dedicated Development Teams",
    desc: "Build long-term engineering squads fully aligned with your product vision and internal culture.",
    image: solution1,
  },
  {
    title: "Project-Based Scaling",
    desc: "Rapidly scale your engineering capacity for short-term or high-priority initiatives.",
    image: solution2,
  },
  {
    title: "Full-Stack Delivery Support",
    desc: "End-to-end support from architecture to deployment across web, mobile, and cloud systems.",
    image: solution3,
  },
];

export default function InsourcingSolutions() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <Container>
        <div className="max-w-3xl mb-20">
          <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-semibold text-cyan-700">
            Engineering Solutions
          </span>

          <h2 className="mt-6 text-4xl! md:text-5xl font-bold text-slate-900">
            Flexible Team Models for Every Stage
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Choose the engagement model that best fits your product roadmap and scaling strategy.
          </p>
        </div>

        <div className="space-y-24">
          {solutions.map((item, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
                  reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-4xl overflow-hidden border border-slate-200 shadow-sm"
                >
                  <img
                    src={item.image}
                    className="w-full h-96 object-cover"
                  />
                </motion.div>

                {/* TEXT */}
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-lg text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-8 h-1 w-24 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}