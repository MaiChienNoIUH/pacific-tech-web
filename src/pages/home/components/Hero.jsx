import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";

export default function Hero() {
  return (
    <section className="py-24 text-center bg-gray-50">
      <Container>
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Build Scalable Digital Products
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          We help companies design, build and grow modern software solutions.
        </p>

        <div className="flex justify-center gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </Container>
    </section>
  );
}