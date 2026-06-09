import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

const steps = [
  {
    step: "Step 1",
    title: "Discovery & Consultation",
    desc: "We work with your team to understand challenges, user behaviors, and business goals.",
    gradient: "from-cyan-300 to-sky-400",
  },
  {
    step: "Step 2",
    title: "Custom Solution Design",
    desc: "Tailored voice flows and intents designed with precision for your use case.",
    gradient: "from-sky-400 to-blue-400",
  },
  {
    step: "Step 3",
    title: "Development & Integration",
    desc: "Seamless integration with your CRM, databases, or APIs using secure, scalable infrastructure.",
    gradient: "from-blue-400 to-indigo-400",
  },
  {
    step: "Step 4",
    title: "Testing & Optimization",
    desc: "Voice systems are trained, tested, and refined using real-world data for optimal performance.",
    gradient: "from-indigo-400 to-violet-400",
  },
  {
    step: "Step 5",
    title: "Deployment & Support",
    desc: "Go live with confidence — supported by our engineers and continuous improvement plans.",
    gradient: "from-violet-400 to-cyan-300",
  },
];

export default function VoiceRecognitionSteps() {
  return (
    <section className="py-28 bg-[#13203F] relative overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-cyan-400/10 blur-[190px] rounded-full" />

      {/* subtle grid */}
      <div className="hidden absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-40" />

      <Container>
        {/* Header */}
        <div className="max-w-3xl mb-20 relative z-10">
          <span className="text-sm font-medium text-cyan-300 bg-cyan-400/10 border border-cyan-300/20 px-4 py-2 mb-3 rounded-full inline-block backdrop-blur-sm">
            Implementation Process
          </span>

          <h2 className="text-4xl! md:text-5xl font-bold text-white! mt-6 leading-tight tracking-tight">
            Our Voice Recognition Implementation Process
          </h2>

          <p className="text-slate-300 mt-6 text-lg leading-relaxed">
            From discovery to deployment, we build scalable voice recognition
            systems tailored to your operational workflows and enterprise goals.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto z-10">
          {/* center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-16">
            {steps.map((item, index) => {
              const isRight = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55 }}
                  className={`relative flex flex-col md:flex-row ${
                    isRight ? "md:flex-row-reverse" : ""
                  } items-start gap-10`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 w-4 h-4 rounded-full bg-cyan-300 border-4 border-[#13203F] shadow-[0_0_18px_rgba(103,232,249,0.55)] z-10" />

                  {/* Empty space */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2">
                    <motion.div
                      whileHover={{
                        y: -6,
                        scale: 1.01,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="relative overflow-hidden p-8 rounded-4xl border border-white/10 bg-white/4 backdrop-blur-xl hover:border-cyan-300/30 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.25)] group"
                    >
                      {/* card glow */}
                      <div className="absolute inset-0 bg-linear-to-br from-cyan-400/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <span
                          className={`text-sm font-bold uppercase tracking-widest bg-linear-to-r ${item.gradient} bg-clip-text text-transparent`}
                        >
                          {item.step}
                        </span>

                        <h3 className="text-2xl font-bold text-white mt-3 group-hover:text-cyan-200 transition-colors duration-300">
                          {item.title}
                        </h3>

                        <p className="text-slate-300 mt-4 leading-relaxed text-sm md:text-base">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}