import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

const items = [
  "Experienced QA engineers",
  "Automation-first approach",
  "Faster release cycles",
  "Enterprise-grade testing strategy",
];

export default function STWhyUs() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <Container>

        <h2 className="text-4xl font-bold pb-3">
          Why Choose Us
        </h2>

        <ul className="space-y-5">
          {items.map((i, idx) => (
            <motion.li
              key={idx}
              whileHover={{ x: 10 }}
              className="flex gap-3 text-slate-300"
            >
              <span className="text-cyan-400">✔</span>
              {i}
            </motion.li>
          ))}
        </ul>

      </Container>
    </section>
  );
}