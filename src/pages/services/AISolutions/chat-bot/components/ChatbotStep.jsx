import { motion } from "framer-motion";
import Container from "../../../components/ui/Container";

const steps = [
  {
    num: "Step 1",
    title: "Strategic Consultation",
    desc: "Align chatbot use cases (support, onboarding, automation) with your definitive business goals, target customer journey, and operational backend workflows.",
    grad: "from-blue-600 to-cyan-500",
  },
  {
    num: "Step 2",
    title: "Conversational Design & Training",
    desc: "Develop tailored dialogue flows using advanced NLP and real user data. Train digital agents to understand precise context, intent nuances, and local languages.",
    grad: "from-purple-600 to-indigo-500",
  },
  {
    num: "Step 3",
    title: "System Integration",
    desc: "Connect your custom chatbot directly to core secure architecture backend systems—such as legacy CRMs, Core Banking software, LOS, and active Helpdesks.",
    grad: "from-pink-600 to-rose-500",
  },
  {
    num: "Step 4",
    title: "Testing & Compliance Assurance",
    desc: "Conduct comprehensive functional, linguistic, and automated penetration security testing. Ensure all live data streams perfectly align with GDPR and ISO 27001.",
    grad: "from-amber-600 to-orange-500",
  },
  {
    num: "Step 5",
    title: "Ongoing Optimization & Support",
    desc: "Continuously monitor live customer chatbot interactions, eliminate intent drift, improve accuracy, and enjoy full post-launch enterprise lifecycle support.",
    grad: "from-emerald-600 to-teal-500",
  },
];

export default function ChatbotSteps() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-left max-w-2xl mb-24">
          <span className="text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-4 py-1.5 rounded-full inline-block border border-blue-100">
            INTEGRATION PROCESS
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-5 tracking-tight">
            Our Approach to Chatbot Integration
          </h2>
        </div>

        {/* Danh sách các bước dạng sơ đồ Zig-zag dọc */}
        <div className="relative max-w-5xl mx-auto space-y-16">
          {steps.map((step, i) => {
            const isRight = i % 2 === 1;

            return (
              <motion.div
                key={i}
                className={`flex flex-col md:flex-row ${isRight ? "md:flex-row-reverse" : ""} items-center gap-8 md:gap-16 group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Khối chứa Số Bước Tương Phản Lớn */}
                <div className="w-full md:w-[35%] text-left md:text-center shrink-0">
                  <span className={`
                    text-5xl md:text-6xl font-black tracking-tighter block uppercase select-none opacity-85
                    bg-gradient-to-r ${step.grad} bg-clip-text text-transparent
                    transition-transform duration-300 group-hover:scale-105 origin-left md:origin-center
                  `}>
                    {step.num}
                  </span>
                </div>

                {/* Khối chứa Văn Bản Chi Tiết */}
                <div className="w-full md:w-[65%] text-left border-l-2 border-slate-100 pl-6 group-hover:border-blue-500 transition-colors duration-300">
                  <h4 className="text-xl font-bold text-slate-950 mb-2 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}