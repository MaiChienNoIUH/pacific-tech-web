import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

const items = [
  {
    title: "Our Vision",
    desc: "To become a trusted global technology partner delivering innovative and scalable digital experiences.",
  },
  {
    title: "Our Mission",
    desc: "To empower businesses through AI, software engineering, and modern technology solutions.",
  },
];

export default function VisionMission() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-10 rounded-3xl border border-gray-100 shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-3xl font-bold mb-5 text-blue-500">
                {item.title}
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}