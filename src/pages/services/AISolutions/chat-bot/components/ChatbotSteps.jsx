import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import backgroundImage from "../../../../../assets/chatbot-steps-bg.jpg"; 

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
    <section 
      className="py-24 relative overflow-hidden w-full text-left bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" />

      <div className="hidden absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-[0.03]" />

      <Container className="relative z-10">
        {/* Header */}
        <div className="text-left max-w-2xl mb-24">
          <span className="text-sm font-medium tracking-widest text-blue-600 bg-white/10 px-4 py-1.5 mb-4 rounded-full inline-block border border-white/10 backdrop-blur-xs">
            Integration Process
          </span>
          <h2 className="text-4xl font-bold text-white! mt-5 tracking-tight">
            Our Approach to Chatbot Integration
          </h2>
        </div>

        <div className="relative w-full space-y-4">
          {steps.map((step, i) => {
            const isRight = i % 2 === 1;

            return (
              <motion.div
                key={i}
                className="w-full border-b border-white/10 bg-white/2 backdrop-blur-xs transition-all duration-300 group relative first:border-t"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/2 transition-opacity duration-300 pointer-events-none" />

                <div className="py-10 md:py-12 px-4 md:px-8">
                  <div className={`flex flex-col md:flex-row ${isRight ? "md:flex-row-reverse" : ""} items-center gap-8 md:gap-16`}>
                    
                    <div className="w-full md:w-[35%] text-left md:text-center shrink-0">
                      <span className={`
                        text-5xl md:text-7xl font-black tracking-tighter block uppercase select-none opacity-95
                        bg-linear-to-r ${step.grad} bg-clip-text text-transparent
                        transition-transform duration-300 group-hover:scale-105 origin-left md:origin-center
                      `}>
                        {step.num}
                      </span>
                    </div>

                    {/* Khối chứa Văn Bản Chi Tiết */}
                    <div className={`w-full md:w-[65%] text-left border-white/10 pl-6 group-hover:border-white/40 transition-colors duration-300 ${isRight ? "md:border-r-2 md:border-l-0 md:pl-0 md:pr-6 md:text-right" : "md:border-l-2"}`}>
                      <h4 className="text-xl font-bold text-white mb-2 tracking-tight transition-colors duration-300">
                        {step.title}
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}