import Container from "../../../../components/ui/Container";
import { AppWindow, Gamepad2, Layers, HeartHandshake } from "lucide-react";

const items = [
  {
    icon: AppWindow,
    title: "Streamlined Utilities",
    desc: "Robust architecture crafted specifically to minimize manual tasks and speed up daily corporate workflows.",
    gridClass: "lg:col-span-4", // Ô kích thước vừa
    iconColor: "text-blue-600 bg-blue-500/10",
    hoverBorder: "hover:border-blue-400/50 hover:bg-blue-50/20",
  },
  {
    icon: Gamepad2,
    title: "Engaging Mechanics",
    desc: "Highly tailored user onboarding, gameplay loops, and interactive elements built for mass audiences.",
    gridClass: "lg:col-span-4",
    iconColor: "text-purple-600 bg-purple-500/10",
    hoverBorder: "hover:border-purple-400/50 hover:bg-purple-50/20",
  },
  {
    icon: Layers,
    title: "Scalable Infrastructure",
    desc: "Optimized server handling and front-end render loops allowing high numbers of concurrent internal users.",
    gridClass: "lg:col-span-5", // Ô kéo dài hơn
    iconColor: "text-amber-600 bg-amber-500/10",
    hoverBorder: "hover:border-amber-400/50 hover:bg-amber-50/20",
  },
  {
    icon: HeartHandshake,
    title: "User-Centric UI/UX",
    desc: "Clean layouts, adaptive light themes, and seamless transitions creating frictionless interactions.",
    gridClass: "lg:col-span-3", // Ô gọn gàng hơn
    iconColor: "text-emerald-600 bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-400/50 hover:bg-emerald-50/20",
  },
];

export default function InternalOverview() {
  return (
    <section className="py-24 pb-12 bg-slate-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[220px]">
          <div className="lg:col-span-4 lg:row-span-1 flex-col justify-center p-8 bg-transparent text-left inline-block">
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 px-4 py-1.5 mb-2 rounded-full inline-block">
              OUR FOCUS
            </span>
            <h2 className="text-3xl! md:text-4xl! font-bold text-slate-900 mt-2 leading-tight tracking-tight">
              Why Our Products
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Pacific Tech Ecosystem
            </p>
          </div>
          {items.map((item, i) => (
            <div
              key={i}
              className={`
                text-left p-8 rounded-3xl border border-slate-200/60 bg-white
                flex flex-col justify-between transition-all duration-300
                hover:shadow-lg hover:-translate-y-1 cursor-pointer group
                ${item.gridClass} ${item.hoverBorder}
              `}
            >
              {/* Top Row: Icon Box */}
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${item.iconColor}`}
              >
                <item.icon size={22} />
              </div>

              {/* Bottom Rows: Content */}
              <div className="mt-4">
                <h3 className="font-bold text-slate-900 mb-1.5 text-base transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
