import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

import solution1 from "../../../../../assets/out-solution-1.jpg";
import solution2 from "../../../../../assets/out-solution-2.png";
import solution3 from "../../../../../assets/out-solution-3.jpg";

const solutions = [
  {
    title: "Full Project Outsourcing",
    desc: "We take complete control of your software delivery from planning to deployment with end-to-end responsibility.",
    image: solution1,
  },
  {
    title: "Dedicated Offshore Teams",
    desc: "Hire fully managed remote teams that operate as your extended engineering unit.",
    image: solution2,
  },
  {
    title: "Project-Based Delivery",
    desc: "Ideal for short-term initiatives requiring fast execution and specialized expertise.",
    image: solution3,
  },
];

export default function OutsourcingSolutions() {
  return (
    <section className="py-20 bg-white">
      <Container>

        <div className="max-w-3xl mb-20">
          <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-semibold text-cyan-700">
            Engagement Models
          </span>

          <h2 className="mt-6 text-4xl! md:text-5xl font-bold text-slate-900">
            Flexible Outsourcing Options for Every Business Need
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Choose the right delivery model depending on your timeline, budget, and product complexity.
          </p>
        </div>

        <div className="space-y-24">
          {solutions.map((s, i) => {
            const reverse = i % 2 !== 0;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-3 lg:gap-14 items-center ${
                  reverse ? "lg:flex-row-reverse" : ""
                }`}
              >
                <motion.div whileHover={{ scale: 1.02 }} className="rounded-xl lg:rounded-4xl overflow-hidden border shadow-sm">
                  <img src={s.image} className="w-full h-96 object-cover" />
                </motion.div>

                <div>
                  <h3 className="text-3xl font-bold text-slate-900">
                    {s.title}
                  </h3>

                  <p className="mt-2 lg:mt-5 text-lg text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="mt-2 lg:mt-8 h-1 w-24 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}