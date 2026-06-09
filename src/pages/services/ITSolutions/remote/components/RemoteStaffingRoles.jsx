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
    <section className="py-20 bg-[#f4f7fa] relative overflow-hidden">
      {/* grid */}
      <div className="hidden absolute inset-0 bg-[linear-gradient(to_right,#dbe4ee_1px,transparent_1px),linear-gradient(to_bottom,#dbe4ee_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-[0.18]" />

      <Container>
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 items-start">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap"
          >
            <span className="inline-flex px-4 py-1.5 mb-2 rounded-full bg-white border border-slate-200 text-sm font-semibold text-cyan-700 shadow-sm">
              Talent Categories
            </span>

            <h2 className="mt-7 text-4xl! font-bold text-slate-900 leading-[1.05] tracking-tight">
              Remote Talent Across Multiple Disciplines
            </h2>

            <p className="mt-3 text-lg text-slate-500 leading-relaxed">
              Build flexible distributed teams with specialized professionals
              across engineering, operations, support, and digital services.
            </p>
          </motion.div>

          {/* RIGHT */}
          <div className="flex flex-wrap gap-2 sm:gap-3 lg:gap-5">
            {roles.map((role) => (
              <div
                key={role}
                className="
    px-3 py-1.5 text-xs
    sm:px-5 sm:py-2.5 sm:text-sm
    lg:px-7 lg:py-4 lg:text-base

    rounded-full
    bg-white
    border border-slate-200
    shadow-sm
    text-slate-700
    font-medium
    whitespace-nowrap
    transition-colors duration-300
  "
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
