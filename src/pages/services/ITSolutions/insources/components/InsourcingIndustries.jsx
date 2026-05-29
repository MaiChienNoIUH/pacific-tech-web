import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

import healthcare from "../../../../../assets/ind-health.webp";
import finance from "../../../../../assets/ind-finance.webp";
import retail from "../../../../../assets/ind-retail.webp";
import logistics from "../../../../../assets/ind-logistics.webp";

const industries = [
  {
    title: "Healthcare",
    desc: "Enable secure patient workflows, voice-assisted documentation, and intelligent medical support systems.",
    image: healthcare,
  },
  {
    title: "Finance",
    desc: "Support fraud detection, voice authentication, and automated customer banking interactions.",
    image: finance,
  },
  {
    title: "Retail",
    desc: "Deliver personalized shopping experiences with AI-driven voice assistants and automation.",
    image: retail,
  },
  {
    title: "Logistics",
    desc: "Optimize fleet coordination, delivery tracking, and real-time voice communication systems.",
    image: logistics,
  },
];

export default function InsourcingIndustries() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-semibold tracking-wide text-cyan-700 shadow-sm">
            Industry Coverage
          </span>

          <h2 className="mt-6 text-4xl! font-bold text-slate-900">
            Built for Multiple Industries
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((i, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="rounded-4xl overflow-hidden border border-slate-200 shadow-sm group bg-white"
            >
              <img
                src={i.image}
                className="h-52 w-full object-cover transition-transform duration-700"
                alt={i.title}
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                  {i.title}
                </h3>

                <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                  {i.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
