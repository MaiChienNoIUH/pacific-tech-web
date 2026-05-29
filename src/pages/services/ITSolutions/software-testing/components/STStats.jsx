import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

const stats = [
  { label: "Test Coverage", value: "95%" },
  { label: "Bug Detection Rate", value: "99%" },
  { label: "Delivery Speed", value: "2x Faster" },
  { label: "Projects", value: "120+" },
];

export default function STStats() {
  return (
    <section className="py-24 bg-[#f4f7fa]">
      <Container>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-8 rounded-4xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-cyan-200 transition-all duration-500 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-linear-to-br from-cyan-50/70 via-sky-50/40 to-blue-50/70 rounded-4xl" />
              <div className="relative">
              <div className="text-3xl font-bold">{s.value}</div>
              <p className="text-slate-500 mt-2">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}