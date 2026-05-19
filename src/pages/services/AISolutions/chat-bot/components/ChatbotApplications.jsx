import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../../../../components/ui/Container";
import { Landmark, ShieldAlert, Layers3, Headphones } from "lucide-react";

const industries = [
  {
    id: "banking",
    tabTitle: "Banking & Finance",
    icon: Landmark,
    title: "Transform Retail Banking Interactions",
    desc: "Empower customers with instant answers to common queries around account balances, credit card management, interest rates, and loan application statuses. Automatically handle secure application tracking and assist with digital KYC verification to accelerate user onboarding while minimizing human operational costs.",
  },
  {
    id: "insurance",
    tabTitle: "Insurance Sector",
    icon: ShieldAlert,
    title: "Instant Policy & Claims Automations",
    desc: "Automate policyholder engagement with real-time digital updates on claim processing status, comprehensive policy coverage information, premium payment reminders, and general coverage FAQs. Support touchless digital onboarding and insurance renewals while drastically reducing active call center queues.",
  },
  {
    id: "fintech",
    tabTitle: "Fintech Ecosystems",
    icon: Layers3,
    title: "Seamless 24/7 Digital Wallets Guide",
    desc: "Guide your users across the entire consumer lifecycle—from registration and digital identity verification (eKYC) to wallet top-ups, micro-payment issues, and transaction history inquiries. Provide uninterrupted cross-border multilingual support tailored directly to digital-native clients.",
  },
  {
    id: "customer-service",
    tabTitle: "Customer Support",
    icon: Headphones,
    title: "Deflect Ticket Volumes at Scale",
    desc: "Deflect highly repetitive support tickets, eliminate long wait queues, and optimize first-contact resolution metrics. Let intelligent virtual agents handle routine technical FAQs and internal automated routing, empowering your high-value engineering or customer support agents to focus entirely on enterprise accounts.",
  },
];

export default function ChatbotApplications() {
  const [activeTab, setActiveTab] = useState("banking");
  const currentData = industries.find((item) => item.id === activeTab);

  return (
    <section className="py-24 bg-slate-50">
      <Container>
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100/60 px-4 py-1.5 mb-2 rounded-full inline-block">
            INDUSTRIES
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4 tracking-tight">
            Tailored For Regulated Markets
          </h2>
        </div>

        {/* Bố cục Tab Động Bất Đối Xứng */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 items-stretch min-h-85">
          
          {/* CỘT MENU CHỌN TAB BÊN TRÁI */}
<div className="flex flex-col gap-3 justify-start">
  {industries.map((tab) => {
    const isActive = activeTab === tab.id;

    const iconStyles = {
      banking:
        "bg-emerald-100 text-emerald-600 border border-emerald-200",
      insurance:
        "bg-rose-100 text-rose-600 border border-rose-200",
      fintech:
        "bg-violet-100 text-violet-600 border border-violet-200",
      "customer-service":
        "bg-sky-100 text-sky-600 border border-sky-200",
    };

    return (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`
          w-full flex items-center gap-4 p-5 rounded-2xl text-left font-semibold
          transition-all duration-300 group cursor-pointer
          ${
            isActive
              ? "bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-[0_15px_40px_rgba(37,99,235,0.22)]"
              : "bg-white/90 backdrop-blur-sm text-slate-700 border border-slate-200/70 hover:border-blue-300 hover:bg-blue-50/40"
          }
        `}
      >
        <div
          className={`
            w-11 h-11 rounded-xl flex items-center justify-center
            transition-all duration-300
            ${
              isActive
                ? "bg-white/15 border border-white/20 text-white"
                : iconStyles[tab.id]
            }
          `}
        >
          <tab.icon size={19} />
        </div>

        <span
          className={`
            text-sm tracking-wide transition-colors duration-300
            ${isActive ? "text-white" : "text-slate-700"}
          `}
        >
          {tab.tabTitle}
        </span>
      </button>
    );
  })}
</div>

          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-12 text-left flex flex-col justify-center relative overflow-hidden shadow-xs">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <span className="text-xs font-bold text-blue-500 uppercase tracking-widest block mb-2">
                  Enterprise Use Case
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-950 mb-5 tracking-tight">
                  {currentData.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  {currentData.desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </Container>
    </section>
  );
}