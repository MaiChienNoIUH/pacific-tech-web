import Container from "../../../../components/ui/Container";
import { Code, Server, Cloud } from "lucide-react";

const solutions = [
  {
    icon: Code,
    title: "SaaS Product Engineering",
    desc: "End-to-end SaaS development using reusable accelerators and scalable architectures.",
    tech: "React | Node.js | MongoDB | TypeScript | Docker | AWS",
  },
  {
    icon: Server,
    title: "Custom Web Applications",
    desc: "Bespoke web systems, legacy modernization, and complex integrations tailored to your workflows.",
    tech: "Next.js | NestJS | PostgreSQL | Kubernetes | CI/CD",
  },
  {
    icon: Cloud,
    title: "Support & Maintenance",
    desc: "Ongoing support, monitoring, security patching, and continuous improvement for production apps.",
    tech: "Docker | Prometheus | Grafana | Github Actions",
  },
];

export default function WebDevSolutions() {
  return (
    <section className="py-24 bg-[#f8fafc] border-t border-slate-100">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 mb-3 rounded-full bg-cyan-50 text-cyan-700 font-semibold text-sm">
            Solutions
          </span>

          <h2 className="mt-6 text-3xl! md:text-4xl font-bold text-slate-900">
            Web development services for growth-stage products and enterprises
          </h2>

          <p className="mt-4 text-slate-600">
            We apply proven patterns and cloud-native practices to build reliable,
            maintainable systems that scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition">
              <div className="w-14 h-14 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600">
                <s.icon size={24} />
              </div>

              <h3 className="mt-6 font-semibold text-slate-900 text-lg">{s.title}</h3>
              <p className="mt-3 text-slate-600 text-sm">{s.desc}</p>

              <div className="mt-4 text-xs text-slate-400">{s.tech}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
