import Container from "../../../../components/ui/Container";
import SaaSImg from "../../../../assets/SaaS.webp";
import EnterpriseHRSystemImg from "../../../../assets/enterprise-hr-software.jpg";
import MobileFirstMarketplaceImg from "../../../../assets/Mobile-First.jpg";

const studies = [
  {
    title: "SaaS analytics platform",
    img: SaaSImg,
    desc: "Built a scalable analytics dashboard for subscription-based businesses.",
  },
  {
    title: "Enterprise HR system",
    img: EnterpriseHRSystemImg,
    desc: "Developed a centralized HR platform for employee and payroll management.",
  },
  {
    title: "Mobile-first marketplace",
    img: MobileFirstMarketplaceImg,
    desc: "Created a responsive marketplace experience optimized for mobile users.",
  },
];

export default function WebDevCaseStudies() {
  return (
    <section id="case-studies" className="py-24 pt-18 bg-[#f8fafc]">
      <Container>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="inline-block px-4 py-1 mb-3 rounded-full bg-cyan-50 text-cyan-700 font-semibold text-sm">
            Case Studies
          </span>

          <h2 className="mt-6 text-3xl! md:text-4xl font-bold text-slate-900">
            Selected projects
          </h2>
          <p className="mt-3 text-slate-600">
            Examples of web products we built for SaaS and enterprise customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {studies.map((s, idx) => (
            <a
              key={idx}
              className="block p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg"
            >
              <div className="h-56 overflow-hidden rounded-xl">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
              <div className="mt-4 font-semibold text-slate-900">{s.title}</div>
              <div className="mt-2 text-sm leading-relaxed text-slate-500">
                {s.desc}
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
