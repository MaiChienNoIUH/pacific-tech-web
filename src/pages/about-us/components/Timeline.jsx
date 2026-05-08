import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

const timeline = [
  {
    year: "2009",
    title: "Pacific Tech Founded",
    desc: "Started with a vision to build modern digital solutions.",
  },
  {
    year: "2016",
    title: "Expanded AI & Automation Services",
    desc: "Introduced AI-driven products and automation systems.",
  },
  {
    year: "2024",
    title: "Worked With International Clients",
    desc: "Delivered scalable solutions for global businesses.",
  },
  {
    year: "2026",
    title: "Scaled Enterprise Software Solutions",
    desc: "Focused on large-scale enterprise-grade systems.",
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-linear-to-b from-white via-blue-50/30 to-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="uppercase text-blue-500 tracking-[0.3em] font-semibold mb-4">
            Our Journey
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Milestones That Define Our Growth
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Line */}
          <div className="absolute left-1/2 top-0 w-0.5 h-full bg-linear-to-b from-blue-300 via-blue-200 to-transparent -translate-x-1/2"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Card */}
              <div className="bg-white/90 backdrop-blur-md border border-blue-100 shadow-md rounded-2xl p-6 w-[45%] hover:shadow-xl transition">
                <p className="text-blue-600 font-bold text-lg mb-1">
                  {item.year}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Dot */}
              <div className="absolute left-1/2 w-5 h-5 bg-linear-to-br from-blue-500 to-cyan-400 rounded-full -translate-x-1/2 border-4 border-white shadow-md"></div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}