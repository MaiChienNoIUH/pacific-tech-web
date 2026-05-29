import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import { AppWindow, Smartphone, Workflow } from "lucide-react";

const solutions = [
  {
    icon: AppWindow,
    title: "Hybrid App Development",
    desc: "Blend modern web technologies with mobile-native access to ship powerful apps for Android and iOS faster.",
    tech: "Flutter | React Native | Vue Native",
  },
  {
    icon: Smartphone,
    title: "iOS App Development",
    desc: "Build polished iPhone and iPad experiences with clean architecture, smooth performance, and robust automation.",
    tech: "Swift | Objective-C | Fastlane | CircleCI | Firebase",
  },
  {
    icon: Workflow,
    title: "Android App Development",
    desc: "Deliver Android products tuned for a wide device ecosystem with modern design and stable engineering practices.",
    tech: "Kotlin | Java | Flutter | React Native | Firebase",
  },
];

export default function MobileAppSolutions() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-14">
          <span className="inline-block px-4 py-1.5 mb-3 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100 text-sm font-semibold">
            Solutions
          </span>

          <h2 className="mt-6 text-3xl! md:text-4xl font-bold text-slate-900 tracking-tight">
            Mobile app services built for product teams that move quickly
          </h2>

          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            We help startups and enterprises turn app ideas into dependable mobile experiences with clear architecture and practical delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff, #f8fbff)] shadow-sm hover:shadow-2xl hover:border-cyan-200 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                <item.icon size={26} className="text-cyan-600" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-6 pt-5 border-t border-slate-200 text-sm text-slate-500 leading-relaxed">
                {item.tech}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}