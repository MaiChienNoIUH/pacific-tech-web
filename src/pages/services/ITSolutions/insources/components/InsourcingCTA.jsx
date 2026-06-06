import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import Button from "../../../../../components/ui/Button";
import { useNavigate } from "react-router-dom";

export default function InsourcingCTA() {
  const navigate = useNavigate();
  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0B1744,#050A1F)]" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center relative z-10"
        >
          <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-semibold">
            Let’s talk about your project
          </span>
          <h2 className="text-4xl! font-bold">
            Ready to Scale Your Engineering Team?
          </h2>

          <p className="mt-6 text-slate-300 text-lg max-w-2xl mx-auto">
            Build high-performance teams that integrate seamlessly into your
            product development lifecycle.
          </p>

          <div className="mt-10 flex gap-5 justify-center">
            <Button
              onClick={() => navigate("/contact")}
              className="px-6 py-2 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 transition"
            >
              Talk to Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
