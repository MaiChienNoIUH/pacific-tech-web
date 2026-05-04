import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white z-50 border-b">
      <Container>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-xl font-bold">Pacific Tech</h1>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>

          <Button>Get Started</Button>
        </div>
      </Container>
    </header>
  );
}