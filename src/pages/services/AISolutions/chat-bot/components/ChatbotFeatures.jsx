import Container from "../../../../../components/ui/Container";
import {
  MessageSquare,
  Globe2,
  Cpu,
  ArrowLeftRight,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "24/7 Automated Support",
    desc: "Respond instantly to customer queries, guide users through onboarding, and reduce wait times—anytime, anywhere.",
    color: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    icon: Globe2,
    title: "Multilingual Intelligence",
    desc: "Seamlessly understand and converse across English, Vietnamese, Thai, Bahasa, and more to ensure localized user experiences.",
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    icon: Cpu,
    title: "Omnichannel Deployment",
    desc: "Deploy once and connect across Web apps, mobile native setups, Slack, WhatsApp, and enterprise legacy chat channels.",
    color: "text-purple-600 bg-purple-50 border-purple-100",
  },
  {
    icon: ArrowLeftRight,
    title: "Industry-Specific Workflows",
    desc: "Trained heavily on specialized domain architectures including instant account inquiries, loan tracking, and claims updates.",
    color: "text-amber-600 bg-amber-50 border-amber-100",
  },
  {
    icon: UserCheck,
    title: "Human Handoff When Needed",
    desc: "Intelligently detect intent drift or emotional spikes to smoothly transition complex inquiries to human customer service live agents.",
    color: "text-rose-600 bg-rose-50 border-rose-100",
  },
];

export default function ChatbotFeatures() {
  return (
    <section className="py-16 bg-white border-b border-slate-100">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-16 items-start">
          <div className="text-left lg:sticky lg:top-24 p-8 rounded-4xl bg-linear-to-br from-[#d7e5ff]/95 via-[#d8dfff]/92 to-[#ecdfff]/92 border border-[#b7c4ff]/55 shadow-[0_30px_90px_rgba(79,70,229,0.18)] backdrop-blur-md">
            <span className="text-sm font-medium tracking-widest text-indigo-600 bg-indigo-300/60 px-4 py-1 mb-4 rounded-full inline-block border border-indigo-200/40 shadow-2xs">
              Capabilities
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mt-4 leading-tight tracking-tight">
              What Our Chatbot Can Do
            </h2>
            <p className="text-sm text-slate-600 mt-4 leading-relaxed">
              Our chatbots are more than scripted responders. They use advanced
              NLP and domain-trained AI to understand user intent, provide
              accurate answers, and trigger backend processes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, i) => (
              <div
                key={i}
                className="
        p-8 rounded-3xl
        border border-[#d7def8]/70
        bg-linear-to-br from-[#ffffff]/95 via-[#f3f6ff]/95 to-[#eef0ff]/95
        text-left
        transition-all duration-300
        hover:border-[#b7c4ff]
        hover:shadow-[0_25px_60px_rgba(79,70,229,0.12)]
        hover:-translate-y-1
        backdrop-blur-md
        group
      "
              >
                <div
                  className={`
          w-12 h-12 rounded-2xl border
          flex items-center justify-center
          mb-6
          transition-transform duration-300
          group-hover:scale-110
          ${item.color}
        `}
                >
                  <item.icon size={22} />
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-2 transition-colors duration-300 group-hover:text-blue-600">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
