import Container from "../../../../components/ui/Container";
import { Brain, Globe, Plug, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Brain,
    title: "Finance-Ready Models",
    desc: "AI models built on real-world financial behaviors and patterns.",
    color: "text-blue-600 bg-blue-50",
  },
  {
    icon: Globe,
    title: "Multilingual, Compliant AI",
    desc: "Supports regional languages with built-in regulatory safeguards.",
    color: "text-emerald-600 bg-emerald-50",
  },
  {
    icon: Plug,
    title: "Easy API Deployment",
    desc: "Fast integration into your existing tech stack or cloud system.",
    color: "text-amber-600 bg-amber-50",
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Auditable",
    desc: "Every decision is explainable, logged, and audit-ready.",
    color: "text-purple-600 bg-purple-50",
  },
];

export default function AIOverview() {
  return (
    <section className="py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-16 items-start">
          
          <div className="lg:border-r lg:border-slate-200 lg:pr-12 h-full flex flex-col justify-center lg:justify-start">
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">
              ABOUT
            </span>
            <h2 className="text-4xl font-bold text-[#111] mt-4 leading-tight">
              Why AI Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <div key={i} className="text-left group">
                
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 ${item.color}`}>
                  <item.icon size={26} />
                </div>

                <h3 className="font-semibold text-[#111] mb-2 text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 leading-relaxed">
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