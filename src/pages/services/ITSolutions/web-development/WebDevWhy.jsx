import Container from "../../../../components/ui/Container";
import { CheckCircle2, Award, Shield, Users } from "lucide-react";

const reasons = [
  { icon: Award, title: "Proven Delivery", desc: "Track record of shipping complex web platforms on time." },
  { icon: Users, title: "Experienced Engineers", desc: "Senior architects and engineers focused on product outcomes." },
  { icon: Shield, title: "Security First", desc: "Security and compliance built into our development lifecycle." },
  { icon: CheckCircle2, title: "Agile Practices", desc: "Iterative delivery and continuous feedback for predictable results." },
];

export default function WebDevWhy() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="inline-block px-4 py-1 mb-3 rounded-full bg-cyan-50 text-cyan-700 font-semibold text-sm">
              Why Choose Us
            </span>

            <h2 className="mt-6 text-3xl! font-bold text-slate-900">
              We combine product focus with engineering excellence
            </h2>

            <p className="mt-4 text-slate-600">
              Our teams partner with product owners to ensure each release improves
              user outcomes while keeping the platform secure, fast and maintainable.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {reasons.map((r, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="text-cyan-500 mt-1"><r.icon size={20} /></div>
                  <div>
                    <div className="font-semibold text-slate-900">{r.title}</div>
                    <div className="text-slate-500 text-sm">{r.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-lg p-6 bg-linear-to-br from-cyan-50/20 to-white">
            <div className="text-cyan-600 font-bold">Our approach</div>
            <h3 className="mt-4 text-2xl font-bold text-slate-900">Product-led engineering</h3>
            <p className="mt-4 text-slate-600">We align engineering choices to measurable product goals and user metrics.</p>

            <ul className="mt-6 space-y-3 text-slate-600">
              <li>Architecture & platform design</li>
              <li>Automated testing and CI/CD</li>
              <li>Cloud-native deployment patterns</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
