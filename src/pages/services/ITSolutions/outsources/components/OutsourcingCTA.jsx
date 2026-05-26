import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import Button from "../../../../../components/ui/Button";

export default function OutsourcingCTA() {
  return (
    <section className="py-28 bg-linear-to-r bg-slate-950 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold">
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
        </div>
      </Container>
    </section>
  );
}
