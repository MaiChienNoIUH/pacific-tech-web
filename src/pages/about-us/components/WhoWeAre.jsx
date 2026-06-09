import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";
import officeImg from "../../../assets/office2.png";

export default function WhoWeAre() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src={officeImg}
              alt="Office"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="uppercase text-blue-500 font-bold rounded-full tracking-widest inline-block text-xs bg-blue-50 px-4 py-1.5 mb-2">
              Who We Are
            </p>

            <h2 className="text-4xl font-bold mb-6 leading-tight">
              A technology partner focused on innovation and growth
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5 text-lg">
              Pacific Tech is a software and AI company dedicated to building
              modern digital products for businesses worldwide.
            </p>

            <p className="text-gray-500 leading-relaxed">
              From AI-powered systems to scalable web and mobile applications,
              we combine engineering expertise with forward-thinking solutions
              to help companies grow faster and operate smarter.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}