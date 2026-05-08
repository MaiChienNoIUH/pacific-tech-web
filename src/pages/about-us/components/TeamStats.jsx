import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

const stats = [
  {
    number: "50+",
    label: "Projects Delivered",
  },
  {
    number: "20+",
    label: "Global Clients",
  },
  {
    number: "12+",
    label: "Years Experience",
  },
  {
    number: "10+",
    label: "Tech Experts",
  },
];

export default function TeamStats() {
  return (
    <section className="py-24 bg-linear-to-r from-[#081028] to-[#0f2c6b] text-white">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl font-bold text-blue-400 mb-3">
                {item.number}
              </h3>

              <p className="text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}