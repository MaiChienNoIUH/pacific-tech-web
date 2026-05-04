import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";

export default function CTA() {
  return (
    <section className="py-20 text-center">
      <Container>
        <h2 className="text-3xl font-bold mb-6">
          Ready to build your next project?
        </h2>

        <Button>Contact Us</Button>
      </Container>
    </section>
  );
}