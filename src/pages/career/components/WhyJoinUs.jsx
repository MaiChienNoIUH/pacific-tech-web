import Container from "../../../components/ui/Container";
import { motion } from "framer-motion";
import {
  Globe,
  Cpu,
  Briefcase,
  Rocket,
} from "lucide-react";

const reasons = [
  {
    title: "Global Projects",
    desc: "Collaborate with international clients and innovative startups.",
    icon: Globe,
    color: "from-blue-500 to-cyan-400",
  },
  {
    title: "Modern Technologies",
    desc: "Work with AI, cloud systems, scalable web platforms, and modern tools.",
    icon: Cpu,
    color: "from-violet-500 to-fuchsia-400",
  },
  {
    title: "Flexible Environment",
    desc: "Remote-friendly culture focused on productivity and work-life balance.",
    icon: Briefcase,
    color: "from-emerald-500 to-lime-400",
  },
  {
    title: "Career Growth",
    desc: "Continuous learning, mentorship, and growth opportunities.",
    icon: Rocket,
    color: "from-orange-500 to-pink-400",
  },
];

export default function WhyJoinUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* DECOR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl opacity-40"></div>

      <Container>

        <motion.div
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-blue-500 font-bold mb-4">
            Why Join Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Build meaningful products
            <br />
            with a passionate team
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* TOP GLOW */}
                <div
                  className={`absolute top-0 left-0 h-1 w-full bg-linear-to-r ${item.color}`}
                ></div>

                {/* ICON */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

                {/* HOVER BG */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500 -z-10"></div>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}