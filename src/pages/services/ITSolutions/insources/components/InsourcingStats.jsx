import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

const stats = [
  { label: "Engineers", value: "50+" },
  { label: "Client Retention", value: "98%" },
  { label: "Delivery Speed", value: "2x Faster" },
  { label: "Industries Served", value: "12+" },
];

export default function InsourcingStats() {
  return (
    <section className="py-24 bg-[#f4f7fa] relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            //   whileHover={{ y: -6 }}
              className="relative group p-8 rounded-4xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300 overflow-hidden"
            >
              {/* gradient top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500 opacity-80" />

              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-linear-to-br from-cyan-50/60 via-transparent to-blue-50/40" />

              {/* content */}
              <div className="relative z-10">
                <div className="text-4xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300">
                  {s.value}
                </div>

                <p className="mt-3 text-slate-500 group-hover:text-slate-600 transition-colors">
                  {s.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}