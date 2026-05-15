import Container from "../../../components/ui/Container";
import { motion } from "framer-motion";

const steps = [
  "Apply",
  "Interview",
  "Technical Assessment",
  "Final Discussion",
  "Offer",
];

export default function HiringProcess() {
  return (
    <section className="py-24 bg-white">

      <Container>

        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-blue-500 font-bold mb-4">
            Hiring Process
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Simple and transparent
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-3xl p-8 text-center shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-5">
                {index + 1}
              </div>

              <h3 className="text-lg font-semibold">
                {step}
              </h3>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}