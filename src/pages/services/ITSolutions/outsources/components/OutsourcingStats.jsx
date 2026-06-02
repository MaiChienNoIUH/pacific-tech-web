import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

const stats = [
  { label: "Projects Delivered", value: "50+" },
  { label: "On-Time Delivery", value: "96%" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Global Teams", value: "15+" },
];

export default function OutsourcingStats() {
  return (
    <section className="py-24 bg-[#f4f7fa]">
      <Container>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="relative group p-8 rounded-4xl bg-white border shadow-sm hover:shadow-xl hover:border-cyan-200 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-cyan-400 via-sky-400 to-blue-500" />

              <div className="text-4xl font-bold text-slate-900 group-hover:text-cyan-700">
                {s.value}
              </div>

              <p className="mt-3 text-slate-500">{s.label}</p>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}