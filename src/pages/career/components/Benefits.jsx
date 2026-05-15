import Container from "../../../components/ui/Container";
import { motion } from "framer-motion";
import {
  Wallet,
  Laptop,
  BookOpen,
  Users,
  Cpu,
  Gift,
} from "lucide-react";

const benefits = [
  {
    title: "Competitive Salary",
    icon: Wallet,
    color: "from-blue-400 to-cyan-400",
  },
  {
    title: "Remote Flexibility",
    icon: Laptop,
    color: "from-violet-400 to-fuchsia-400",
  },
  {
    title: "Learning & Growth",
    icon: BookOpen,
    color: "from-orange-400 to-pink-400",
  },
  {
    title: "Global Team Culture",
    icon: Users,
    color: "from-emerald-400 to-lime-400",
  },
  {
    title: "Modern Technologies",
    icon: Cpu,
    color: "from-sky-400 to-indigo-400",
  },
  {
    title: "Performance Bonuses",
    icon: Gift,
    color: "from-yellow-400 to-orange-400",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-linear-to-br from-[#09132f] via-[#1d4ed8] to-[#312e81] text-white relative overflow-hidden">

      {/* DECOR */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-400/20 blur-3xl rounded-full"></div>

      <Container>

        <motion.div
          className="text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.3em] text-blue-200 font-bold mb-4">
            Benefits
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            More than just a job
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:bg-white/15 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </Container>
    </section>
  );
}