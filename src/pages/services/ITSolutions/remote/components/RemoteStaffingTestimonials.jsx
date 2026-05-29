import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

const testimonials = [
  {
    quote:
      "The remote staffing model helped us scale engineering capacity much faster while reducing hiring overhead.",
    name: "David Chen",
    role: "Startup Founder",
  },
  {
    quote:
      "We were able to onboard high-quality remote professionals aligned perfectly with our operational workflows.",
    name: "Sophia Martinez",
    role: "Operations Director",
  },
  {
    quote:
      "Their distributed team support gave us the flexibility to scale globally without traditional recruitment delays.",
    name: "Michael Lee",
    role: "Product Executive",
  },
];

export default function RemoteStaffingTestimonials() {
  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-180 h-180 bg-cyan-500/10 blur-[180px] rounded-full" />

      <Container>
        <div className="relative z-10">
          <div className="max-w-3xl mb-20">
            <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-sm font-semibold text-cyan-300">
              Client Feedback
            </span>

            <h2 className="mt-7 text-4xl! font-bold">
              Trusted by Growing Businesses Worldwide
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group p-8 rounded-4xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-300/30 transition-all duration-500"
              >
                <div className="text-6xl leading-none text-cyan-400/30 font-serif">
                  "
                </div>

                <p className="mt-6 text-slate-300 leading-relaxed">
                  {item.quote}
                </p>

                <div className="mt-10">
                  <div className="font-semibold text-white">
                    {item.name}
                  </div>

                  <div className="mt-1 text-sm text-cyan-300">
                    {item.role}
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