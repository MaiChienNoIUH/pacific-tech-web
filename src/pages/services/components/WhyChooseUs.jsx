import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

const features = [
  "Experienced development team",
  "Modern technologies & AI integration",
  "Scalable enterprise solutions",
  "Fast communication & support",
  "Agile development workflow",
  "Long-term partnership",
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 relative overflow-hidden bg-linear-to-b from-[#0b1536] via-[#112255] to-[#0b1536] text-white">
      <div className="absolute right-[-10%] top-1/4 w-120 h-120 bg-blue-500/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute left-[-10%] bottom-1/4 w-100 h-100 bg-cyan-400/15 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-300 font-semibold uppercase tracking-widest text-sm bg-blue-400/10 px-4 py-1.5 rounded-full inline-block mb-5 border border-blue-400/20">
              Why Choose Us
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-linear-to-r from-white to-blue-100 bg-clip-text text-transparent">
              We Build Technology <br />
              That Creates Impact
            </h2>

            <p className="text-blue-100/70 text-lg leading-relaxed max-w-xl">
              Our team combines creativity, technical expertise, and business
              understanding to deliver digital products that help companies
              grow and innovate faster.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-white/10 bg-white/4 backdrop-blur-md hover:bg-white/8 hover:border-blue-400/40 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-cyan-300 transition-colors duration-300 shrink-0" />
                  <div className="text-base md:text-lg font-medium text-blue-50 group-hover:text-white transition-colors duration-300">
                    {item}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}