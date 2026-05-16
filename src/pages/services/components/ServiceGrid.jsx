import {
  Bot,
  Database,
  FolderKanban,
} from "lucide-react";

import Container from "../../../components/ui/Container";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Custom AI systems, AI chatbots, automation tools, and intelligent business solutions.",
  },
  {
    icon: Database,
    title: "IT Solutions",
    description:
      "Technology consulting, software development, outsourcing, and digital transformation services.",
  },
  {
    icon: FolderKanban,
    title: "Internal Projects",
    description:
      "Innovative in-house products, utilities, and digital platforms built to improve productivity and user experiences.",
  },
];

export default function ServiceGrid() {
  return (
    <section className="relative py-28 bg-[#f5f9ff] overflow-hidden">
      {/* background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/40 blur-[120px]" />

      <Container>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Container>
    </section>
  );
}