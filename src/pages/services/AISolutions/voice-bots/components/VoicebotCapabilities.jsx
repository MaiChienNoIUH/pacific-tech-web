import Container from "../../../../../components/ui/Container";
import {
  ShieldCheck,
  Zap,
  Layers,
  Users,
} from "lucide-react";

const capabilities = [
  {
    icon: Zap,
    title: "24/7 Automated Support",
    desc: "Deliver instant customer assistance around the clock without increasing support headcount.",
    iconWrap: "bg-cyan-100",
    iconColor: "text-cyan-700",
  },
  {
    icon: Layers,
    title: "Seamless System Integration",
    desc: "Connect voicebots directly with CRMs, booking systems, helpdesks, and enterprise workflows.",
    iconWrap: "bg-blue-100",
    iconColor: "text-blue-700",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Enterprise Ready",
    desc: "Built with secure infrastructure, encrypted communication, and scalable deployment architecture.",
    iconWrap: "bg-indigo-100",
    iconColor: "text-indigo-700",
  },
  {
    icon: Users,
    title: "Human-Like Conversations",
    desc: "Provide natural conversational experiences with smooth escalation to live support agents.",
    iconWrap: "bg-purple-100",
    iconColor: "text-purple-700",
  },
];

export default function VoicebotCapabilities() {
  return (
    <section className="py-24 bg-[#f8fbff] border-b border-slate-200">
      <Container>
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700">
            Key Benefits
          </span>

          <h2 className="mt-6 text-3xl! md:text-5xl font-semibold text-slate-900 leading-tight">
            Designed for Scalable Customer Communication
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Improve operational efficiency, automate repetitive interactions,
            and deliver faster customer service experiences with enterprise AI
            voice solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {capabilities.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${item.iconWrap} ${item.iconColor}`}
              >
                <item.icon size={26} />
              </div>

              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}