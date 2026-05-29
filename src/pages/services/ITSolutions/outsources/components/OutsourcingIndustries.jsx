import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

import healthcare from "../../../../../assets/out-health.jpg";
import finance from "../../../../../assets/out-finance.jpg";
import retail from "../../../../../assets/out-retail.jpg";
import logistics from "../../../../../assets/out-logistics.jpg";

const industries = [
  {
    title: "Healthcare",
    desc: "Build secure and compliant digital healthcare systems.",
    image: healthcare,
  },
  {
    title: "Finance",
    desc: "Develop secure fintech platforms and automation systems.",
    image: finance,
  },
  {
    title: "Retail",
    desc: "Create scalable e-commerce and customer experience platforms.",
    image: retail,
  },
  {
    title: "Logistics",
    desc: "Optimize supply chain and operational tracking systems.",
    image: logistics,
  },
];

export default function OutsourcingIndustries() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <div className="max-w-3xl mb-16">
          <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-semibold text-cyan-700">
            Industry Coverage
          </span>

          <h2 className="text-4xl! font-bold text-slate-900">
            Industries We Support
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((i, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="rounded-4xl overflow-hidden border bg-white shadow-sm group"
            >
              <img
                src={i.image}
                className="h-52 w-full object-cover transition"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold group-hover:text-cyan-700">
                  {i.title}
                </h3>

                <p className="mt-3 text-sm text-slate-500">{i.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
