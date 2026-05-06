import Container from "../../../components/ui/Container";
import { motion } from "framer-motion";

const values = [
  {
    title: "Commitment",
    description:
      "Dedication to delivering superior quality and exceeding expectations in every endeavor.",
  },
  {
    title: "Synergy",
    description:
      "Leveraging collective expertise to achieve results that surpass individual efforts.",
  },
  {
    title: "Creativity",
    description:
      "Driving progress through original thinking and adaptive problem-solving strategies.",
  },
  {
    title: "Transparency",
    description:
      "Maintaining absolute honesty and ethical standards in all our professional interactions.",
  },
  {
    title: "Vibrancy",
    description:
      "Injecting energy and deep-rooted enthusiasm into every stage of the development process.",
  },
  {
    title: "Client Success",
    description:
      "Prioritizing long-term partnerships by aligning our goals with your business growth.",
  },
];

export default function Value() {
  return (
    <section className="py-24 bg-linear-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#1e40af] text-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2">
            <p className="text-blue-300 font-bold text-sm uppercase tracking-[0.3em] mb-4">
              Core Principles
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1] mb-6">
              Empowering progress <br />
              through <span className="text-[#60a5fa]">shared values</span>
            </h2>
            <p className="text-blue-100 text-lg max-w-md opacity-90">
              Our culture is built on a foundation of trust, innovation, and an
              unwavering focus on delivering value to our partners.
            </p>
          </div>

          {/* RIGHT GRID CARDS */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#f8faff] p-8 rounded-4xl ..."
              >
                <h3 className="text-blue-800 font-bold text-xl mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
