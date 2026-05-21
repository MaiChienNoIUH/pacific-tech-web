import Container from "../../../../../components/ui/Container";
import {
  Mic,
  BrainCircuit,
  AudioLines,
} from "lucide-react";
import voicebotDardboard from "../../../../../assets/voicebot-dardboard1.png";

const items = [
  {
    icon: Mic,
    title: "Speech Recognition",
    desc: "Transforms spoken conversations into text in real time for accurate request processing.",
  },
  {
    icon: BrainCircuit,
    title: "Natural Language Understanding",
    desc: "Understands customer intent, conversational context, and user requests naturally.",
  },
  {
    icon: AudioLines,
    title: "Voice Response Generation",
    desc: "Generates smooth, natural voice responses that feel conversational and human-like.",
  },
];

export default function VoicebotTechStack() {
  return (
    <section className="py-24 bg-[#f8fbff] border-b border-slate-200 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700">
              How It Works
            </span>

            <h2 className="mt-6 text-3xl! md:text-5xl font-semibold text-slate-900 leading-tight">
              How Voicebots Understand and Respond
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Our Voice AI combines speech recognition, natural language
              understanding, and voice synthesis technologies to create smooth
              and intelligent customer conversations.
            </p>

            <div className="mt-6 space-y-5">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-3xl p-7 flex gap-5"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <item.icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src={voicebotDardboard}
              alt=""
              className="rounded-4xl shadow-2xl border border-slate-200"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}