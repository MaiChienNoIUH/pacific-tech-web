import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import mobileAppImage from "../../../../../assets/mobile-app.jpg";

const studies = [
  {
    title: "On-demand service platform",
    desc: "A scalable mobile product for booking, tracking, and customer engagement across channels.",
  },
  {
    title: "Internal operations app",
    desc: "A mobile workflow tool that helps teams manage tasks, approvals, and notifications on the move.",
  },
  {
    title: "Customer loyalty app",
    desc: "A performance-focused mobile experience with rewards, personalization, and push messaging.",
  },
];

export default function MobileAppCaseStudies() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        <div className="max-w-3xl mb-14">
          <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-semibold text-cyan-700">
            Related Case Study
          </span>

          <h2 className="mt-6 text-3xl! font-bold text-slate-900 tracking-tight">
            Projects that show what mobile can do for business
          </h2>

          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            These examples reflect how we think about product quality, experience, and long-term maintainability in mobile delivery.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl lg:rounded-4xl overflow-hidden border border-slate-200 shadow-lg bg-slate-50"
          >
            <img src={mobileAppImage} alt="Mobile app case study" className="w-full h-full object-cover" />
          </motion.div>

          <div className="grid gap-6">
            {studies.map((study, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="p-6 rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff,#f8fbff)] shadow-sm hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-900">{study.title}</h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{study.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}