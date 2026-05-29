import Container from "../../../../components/ui/Container";
import { ShieldCheck, Code, Users, Zap } from "lucide-react";

const items = [
  {
    step: "01",
    icon: Code,
    title: "Full Source Code Control",
    desc: "Maintain complete ownership of intellectual property and internal architectures.",
    stepColor: "from-blue-600 to-cyan-500", 
    textColor: "group-hover:text-blue-600",
    iconColor: "text-blue-600 bg-blue-50",
    lineColor: "group-hover:bg-blue-500",
  },
  {
    step: "02",
    icon: Users,
    title: "Dedicated Specialists",
    desc: "Top-tier professionals integrating seamlessly into your business core team.",
    stepColor: "from-emerald-600 to-teal-400", 
    textColor: "group-hover:text-emerald-600",
    iconColor: "text-emerald-600 bg-emerald-50",
    lineColor: "group-hover:bg-emerald-500",
  },
  {
    step: "03",
    icon: Zap,
    title: "Agile Development",
    desc: "Accelerated technical pipelines designed for rapid deployment cycles.",
    stepColor: "from-amber-600 to-orange-400", 
    textColor: "group-hover:text-amber-600",
    iconColor: "text-amber-600 bg-amber-50",
    lineColor: "group-hover:bg-amber-500",
  },
  {
    step: "04",
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "Built-in regulatory safeguards maintaining rigorous quality assurance.",
    stepColor: "from-purple-600 to-fuchsia-400", 
    textColor: "group-hover:text-purple-600",
    iconColor: "text-purple-600 bg-purple-50",
    lineColor: "group-hover:bg-purple-500",
  },
];

export default function ITOverview() {
  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-4 py-1.5 mb-2 rounded-full inline-block">
            BENEFITS
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4 tracking-tight">
            Why IT Solutions
          </h2>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16">
          {items.map((item, i) => (
            <div key={i} className="relative text-left group pt-2">
              
              <div className={`
                text-6xl font-black tracking-tighter select-none mb-4 opacity-75
                bg-linear-to-r ${item.stepColor} bg-clip-text text-transparent
                transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 origin-left
              `}>
                {item.step}
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${item.iconColor}`}>
                  <item.icon size={22} /> 
                </div>
                
                <h3 className={`font-bold text-slate-900 text-lg transition-colors duration-300 ${item.textColor}`}>
                  {item.title}
                </h3>
              </div>

              <div className={`w-12 h-0.5 bg-slate-200 mb-4 transition-all duration-300 group-hover:w-full ${item.lineColor}`} />

              <p className="text-sm text-slate-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}