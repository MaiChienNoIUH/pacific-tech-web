import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

export default function FounderMessage() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-[#0b1a3a] to-[#0f2c6b] rounded-3xl p-10 md:p-16 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>

          <p className="text-blue-300 uppercase tracking-widest text-sm mb-6">
            Founder Message
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8 max-w-4xl text-white">
            “We don’t just build software — we create long-term digital value for businesses.”
          </h2>

          <div>
            <p className="font-semibold text-lg">Pacific Tech Team</p>
            <p className="text-gray-300">Innovation • Technology • Growth</p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}