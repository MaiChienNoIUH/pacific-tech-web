import Container from "../../../../../components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    desc: "Understand business goals, customer workflows, and operational requirements.",
  },
  {
    number: "02",
    title: "Conversation Design",
    desc: "Design natural conversation flows aligned with customer journeys and support processes.",
  },
  {
    number: "03",
    title: "System Integration",
    desc: "Connect Voice AI with CRMs, telephony systems, APIs, and enterprise platforms.",
  },
  {
    number: "04",
    title: "Testing & Optimization",
    desc: "Continuously refine voice interactions, response accuracy, and operational performance.",
  },
];

export default function VoicebotSteps() {
  return (
    <section className="py-20 bg-white border-b border-slate-200 overflow-hidden">
      <Container>
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700">
            Implementation Process
          </span>

          <h2 className="mt-6 text-4xl! md:text-5xl font-semibold text-slate-900 leading-tight">
            Our Approach to Voicebot Deployment
          </h2>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            We follow a structured implementation process to ensure voice
            solutions are aligned with operational goals and customer
            experiences.
          </p>
        </div>

        <div className="relative max-w-4xl ml-3">
          {/* timeline line */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-linear-to-b from-blue-200 via-blue-300 to-blue-100" />

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative pl-14 pb-5 last:pb-0"
            >
              {/* dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow-[0_0_0_6px_rgba(37,99,235,0.08)]" />

              {/* card */}
              <div className="rounded-2xl border border-blue-100 bg-linear-to-br from-white to-blue-50/60 p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-md">
                <span className="text-sm font-semibold text-blue-600">
                  Step {step.number}
                </span>

                <h3 className="mt-2 text-xl md:text-2xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}