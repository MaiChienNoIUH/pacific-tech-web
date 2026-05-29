import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Optimizing Your Testing Lifecycle",
    desc: "Learn best practices for implementing a comprehensive testing strategy that scales with your product.",
    category: "Best Practices",
    link: "#",
  },
  {
    title: "AI-Powered Intelligent Testing",
    desc: "Discover how machine learning and AI are transforming test automation and predictive quality analysis.",
    category: "Technology",
    link: "#",
  },
  {
    title: "Outsourced QA: Accelerating Delivery",
    desc: "Understand how dedicated testing teams can reduce time-to-market while maintaining quality standards.",
    category: "Strategy",
    link: "#",
  },
];

export default function STRelated() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <Container>
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-semibold text-cyan-700">
              Resources
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Insights & Case Studies
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Explore industry knowledge and real-world examples of how quality testing accelerates product success.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <motion.a
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col p-8 rounded-4xl border border-slate-200 bg-linear-to-br from-white to-slate-50 shadow-sm hover:shadow-2xl hover:border-cyan-200 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              {/* top gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-400 via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* category badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-100/50 text-cyan-700 text-xs font-semibold w-fit">
                {article.category}
              </div>

              {/* title */}
              <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors line-clamp-2">
                {article.title}
              </h3>

              {/* description */}
              <p className="mt-4 text-slate-600 grow leading-relaxed">
                {article.desc}
              </p>

              {/* footer with arrow */}
              <div className="mt-8 flex items-center justify-between pt-6 border-t border-slate-200 group-hover:border-cyan-200 transition-colors">
                <span className="text-sm font-semibold text-cyan-600 group-hover:text-cyan-700">
                  Read More
                </span>
                <ArrowRight
                  size={20}
                  className="text-cyan-600 group-hover:translate-x-1 transition-transform"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
