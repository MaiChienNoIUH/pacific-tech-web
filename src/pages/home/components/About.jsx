import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="relative py-24 bg-linear-to-b from-white to-gray-50 overflow-hidden">
      {/* 🔵 Background decoration */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl"></div>

      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              About <span className="text-blue-500">Pacific Tech</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed pt-2">
              Pacific Tech is a trusted technology partner specializing in
              scalable, intelligent, and high-performance software solutions.
              Our team combines strong engineering expertise with modern
              technologies and AI to deliver impactful digital products.
            </p>

            <p className="text-gray-500 pt-2">
              We have worked with clients across various industries, helping
              businesses transform ideas into reliable solutions that scale and
              create long-term value.
            </p>

            {/* CTA */}
            <Link to="/about">
              <Button className="bg-blue-500 text-white hover:bg-blue-600 mt-5">
                More About Us →
              </Button>
            </Link>
          </motion.div>

          {/* RIGHT CONTENT (Highlight Cards) */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-blue-500">12+</h3>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-blue-500">50+</h3>
              <p className="text-gray-600 mt-2">Projects Delivered</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-blue-500">20+</h3>
              <p className="text-gray-600 mt-2">Global Clients</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-blue-500">AI</h3>
              <p className="text-gray-600 mt-2">Focused Solutions</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
