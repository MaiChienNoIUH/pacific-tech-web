import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import Button from "../../../../../components/ui/Button";

export default function OutsourcingCTA() {
  return (
    <section className="py-28 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#0B1744,#050A1F)]" />
      <Container>
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center relative z-10"
        >
          <h2 className="text-4xl! font-bold">
            Ready to Outsource Your Engineering Delivery?
          </h2>

          <p className="mt-6 text-white/80 text-lg">
            Let our team handle your software delivery so you can focus on
            scaling your business.
          </p>

          <div className="mt-10 flex gap-5 justify-center">
            <Button className="px-6 py-2 bg-blue-600 text-white rounded-xl cursor-alias hover:bg-blue-700 transition">
              Talk to Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
