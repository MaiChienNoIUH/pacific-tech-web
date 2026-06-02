import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

const roles = [
  "Frontend Developers",
  "Backend Engineers",
  "UI/UX Designers",
  "DevOps Engineers",
  "AI Specialists",
  "BA (Business Analysts)",
  "QA Engineers",
  "Cloud Engineers",
  "Product Managers",
  "Customer Support",
  "Data Analysts",
  "Marketing Specialists",
];

export default function RemoteStaffingRoles() {
  return (
    <section className="py-28 bg-[#f4f7fa] relative overflow-hidden">
      {/* grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbe4ee_1px,transparent_1px),linear-gradient(to_bottom,#dbe4ee_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-[0.18]" />

      <Container>
        <div className="grid lg:grid-cols-[360px_1fr] gap-20 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-20"
          >
            <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-white border border-slate-200 text-sm font-semibold text-cyan-700 shadow-sm">
              Talent Categories
            </span>

            <h2 className="mt-7 text-4xl! font-bold text-slate-900 leading-[1.05] tracking-tight">
              Remote Talent Across Multiple Disciplines
            </h2>

            <p className="mt-6 text-lg text-slate-500 leading-relaxed">
              Build flexible distributed teams with specialized professionals
              across engineering, operations, support, and digital services.
            </p>
          </motion.div>

          {/* RIGHT */}
          <div className="flex flex-wrap gap-5">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.03,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                className="px-7 py-4 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700 font-medium hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700 transition-all duration-300"
              >
                {role}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}