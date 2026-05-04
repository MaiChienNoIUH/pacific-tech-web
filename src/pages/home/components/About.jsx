import Container from "../../../components/ui/Container";

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            About Pacific Tech
          </h2>

          <p className="text-gray-600">
            We are a technology company focused on delivering scalable
            and high-quality digital products for businesses worldwide.
          </p>
        </div>
      </Container>
    </section>
  );
}