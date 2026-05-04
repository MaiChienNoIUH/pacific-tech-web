import Container from "../../../components/ui/Container";

const services = [
  {
    title: "Web Development",
    desc: "High-performance websites and platforms",
  },
  {
    title: "Mobile Development",
    desc: "Cross-platform mobile apps",
  },
  {
    title: "UI/UX Design",
    desc: "User-centered design experiences",
  },
];

export default function Services() {
  return (
    <section className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div key={i} className="p-6 border rounded-xl hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}