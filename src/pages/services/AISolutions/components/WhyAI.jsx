import Container from "../../../../components/ui/Container";

const items = [
  "Business-focused AI strategy",
  "Scalable architecture",
  "Real production AI systems",
  "Fast deployment cycles",
  "Custom model development",
  "Enterprise integration",
];

export default function WhyAI() {
  return (
    <section className="pt-16 pb-28 bg-[#0b1536] text-white">
      <Container>
        <h2 className="text-4xl font-bold text-center pb-8">
          Why Choose Our AI Solutions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}