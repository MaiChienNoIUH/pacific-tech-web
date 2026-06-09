import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

import { Bot, Mic, Globe, Smartphone, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    title: "AI Chatbots & Voicebots",
    description:
      "Build intelligent chatbot and voicebot systems that automate customer interactions and improve engagement.",
    icon: Bot,
    color: "from-blue-500 to-cyan-400",
    link: "/services/ai-solutions/chatbots",
  },
  {
    title: "Voice Recognition Technology",
    description:
      "Implement accurate speech recognition solutions for real-time voice commands and smart automation.",
    icon: Mic,
    color: "from-purple-500 to-pink-400",
    link: "/services/ai-solutions/voice-recognition",
  },
  {
    title: "Web Application Development",
    description:
      "Develop scalable and modern web applications tailored to startups and growing businesses.",
    icon: Globe,
    color: "from-emerald-500 to-green-400",
    link: "/services/it-solutions/web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Create high-performance mobile applications with seamless user experiences across platforms.",
    icon: Smartphone,
    color: "from-orange-500 to-yellow-400",
    link: "/services/it-solutions/mobile-apps",
  },
  {
    title: "Software Testing & QA",
    description:
      "Ensure software reliability and product quality through comprehensive testing and QA processes.",
    icon: ShieldCheck,
    color: "from-red-500 to-pink-400",
    link: "/services/it-solutions/software-testing",
  },
  {
    title: "Remote Staffing Solutions",
    description:
      "Provide dedicated remote engineers and tech teams for SMBs and startups worldwide.",
    icon: Users,
    color: "from-indigo-500 to-blue-400",
    link: "/services/it-solutions/remote-staffing",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <p className="uppercase text-blue-500 tracking-widest font-bold inline-block rounded-full text-xs bg-blue-100 px-4 py-1.5 mb-2">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Technology solutions built for growth
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                href={item.link}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center text-white mb-5 shadow-lg`}
                >
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                <p className="text-gray-500 leading-relaxed">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="text-blue-500 font-semibold mt-4 inline-block"
                >
                  Learn more →
                </a>
              </motion.a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
