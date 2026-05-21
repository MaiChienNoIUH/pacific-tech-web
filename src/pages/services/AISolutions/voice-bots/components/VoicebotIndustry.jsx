import Container from "../../../../../components/ui/Container";
import voicebot1 from "../../../../../assets/voicebot-1.webp";
import voicebot2 from "../../../../../assets/voicebot-2.png";
import voicebot3 from "../../../../../assets/voicebot-3.png";

import { Landmark, ShieldAlert, HeartPulse } from "lucide-react";

const verticals = [
  {
    icon: Landmark,
    title: "Banking & Finance",
    desc: "Automate high-volume customer interactions securely and efficiently.",
    cases: [
      "Balance inquiries",
      "Card activation",
      "Loan application updates",
      "Fraud alerts",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Insurance",
    desc: "Improve customer response times and streamline claims communication.",
    cases: [
      "Claims updates",
      "Policy renewals",
      "Emergency assistance",
      "Payment reminders",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Reduce administrative workload with automated patient communication.",
    cases: [
      "Appointment scheduling",
      "Patient reminders",
      "Prescription notifications",
      "Service support",
    ],
  },
];

export default function VoicebotIndustry() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-start">
          <div>
            <div className="max-w-3xl mb-14">
              <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700">
                Industry Applications
              </span>

              <h2 className="mt-6 text-4xl! md:text-5xl font-semibold text-slate-900 leading-tight">
                Voice AI Solutions Across Industries
              </h2>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Voicebots can be tailored to different industries and
                operational environments, helping organizations automate
                customer interactions at scale.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {verticals.map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-slate-950 border border-slate-800 text-left flex flex-col justify-between hover:border-slate-700 transition-all duration-300 group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-linear-to-tr from-cyan-500 to-blue-600 text-slate-950 flex items-center justify-center mb-6 shadow-md shadow-cyan-500/10 font-bold">
                      <item.icon size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="relative h-full min-h-155 hidden lg:block">
            <img
              src={voicebot1}
              alt=""
              className="absolute top-0 left-0 w-70 rounded-4xl shadow-2xl object-cover border border-slate-200"
            />

            <img
              src={voicebot2}
              alt=""
              className="absolute top-40 right-0 w-65 rounded-4xl shadow-2xl object-cover border border-slate-200"
            />

            <img
              src={voicebot3}
              alt=""
              className="absolute bottom-0 left-14 w-75 rounded-4xl shadow-2xl object-cover border border-slate-200"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
