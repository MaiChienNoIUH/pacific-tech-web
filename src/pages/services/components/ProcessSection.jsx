import Container from "../../../components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Discovery",
  },
  {
    number: "02",
    title: "Planning",
  },
  {
    number: "03",
    title: "Design",
  },
  {
    number: "04",
    title: "Development",
  },
  {
    number: "05",
    title: "Testing",
  },
  {
    number: "06",
    title: "Launch",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-28 bg-blue-50/60 text-slate-800">
      <Container>
        <div className="text-center mb-20">
          <span className="text-blue-600 font-semibold tracking-widest text-sm bg-blue-100/80 px-4 py-1.5 rounded-full inline-block">
            OUR PROCESS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 text-slate-900">
            How We Work
          </h2>
        </div>

        <div className="grid md:grid-cols-3 xl:grid-cols-6 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-blue-100/70 bg-white p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="text-5xl font-black text-blue-500/40 mb-5 group-hover:text-blue-600 transition-colors duration-300">
                {step.number}
              </div>

              <h3 className="text-lg font-bold text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}