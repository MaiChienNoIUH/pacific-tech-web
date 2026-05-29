import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import WhyUsImg from "../../../../../assets/why-us-img.jpg";

const items = [
  "Experienced QA engineers",
  "Automation-first approach",
  "Faster release cycles",
  "Enterprise-grade testing strategy",
  "Seamless CI/CD integration",
  "Comprehensive test coverage",
];

export default function STWhyUs() {
  return (
    <section className="py-18 bg-slate-950 text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl! font-bold pb-3">Why Choose Us</h2>

            <ul className="space-y-5 mt-4">
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md rounded-4xl overflow-hidden border border-white/5 shadow-2xl">
              <img
                src={WhyUsImg}
                alt="Why choose us"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
