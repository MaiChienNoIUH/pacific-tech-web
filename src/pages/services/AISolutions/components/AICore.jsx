import Container from "../../../../components/ui/Container";
import { Bot, Brain, Mic, Eye } from "lucide-react";

const items = ["Chatbots", "Voicebots", "Voice Recognition"];

export default function AICore() {
  return (
    <section className="py-8 bg-white">
      <Container>
        <h2 className="text-4xl font-bold text-center pb-4">
          Core AI Solutions
        </h2>

        <div className="flex flex-wrap justify-center gap-4 font-semibold">
          {items.map((item, i) => (
            <div
              key={i}
              className="px-6 py-3 rounded-full bg-blue-50 text-blue-600 border border-blue-100"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}