import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../../../../../components/ui/Container";

import {
  MonitorCheck,
  Bot,
  Gauge,
  ShieldCheck,
  Smartphone,
  MonitorSmartphone,
  Laptop,
  Globe2,
  Bug,
  SearchCheck,
  Eye,
  Workflow,
  CheckCircle2,
  FlaskConical,
  ScanSearch,
  ShieldAlert,
  Database,
  ShoppingCart,
  Landmark,
  Truck,
} from "lucide-react";

const tabs = ["Testing Services", "Testing Types", "Platforms", "Industries"];

const services = {
  "Testing Services": [
    {
      icon: MonitorCheck,
      title: "Manual QA Testing",
      desc: "Human-centered validation focused on usability, workflows, and overall product consistency.",
    },
    {
      icon: Bot,
      title: "Automation Testing",
      desc: "Scalable automated frameworks designed for rapid regression and continuous delivery pipelines.",
    },
    {
      icon: Gauge,
      title: "Performance Validation",
      desc: "Stress, load, and scalability testing to ensure stable application behavior under pressure.",
    },
    {
      icon: ShieldAlert,
      title: "Security Assurance",
      desc: "Comprehensive security testing to identify vulnerabilities and ensure data protection.",
    },
  ],

  "Testing Types": [
    {
      icon: SearchCheck,
      title: "Smoke Testing",
      desc: "A fast baseline check to confirm the most important functions are working before deeper testing starts.",
    },
    {
      icon: FlaskConical,
      title: "Sanity Testing",
      desc: "A focused check to verify that recent fixes or targeted features behave as expected.",
    },
    {
      icon: CheckCircle2,
      title: "Confirmation Testing",
      desc: "Re-testing previously reported defects to make sure the issues were resolved properly.",
    },
    {
      icon: Workflow,
      title: "Regression Testing",
      desc: "Validating updated builds to ensure new changes do not affect existing working features.",
    },
    {
      icon: Eye,
      title: "Usability Testing",
      desc: "Assessing how easy and intuitive the product is for real users to navigate and complete tasks.",
    },
    {
      icon: ScanSearch,
      title: "Exploratory Testing",
      desc: "An experience-driven approach where testers explore the software without fixed scripts to uncover hidden issues.",
    },
    {
      icon: Globe2,
      title: "Compatibility Testing",
      desc: "Checking that the software runs consistently across devices, operating systems, browsers, and environments.",
    },
    {
      icon: Bug,
      title: "Functional Testing",
      desc: "Verifying that each feature and workflow operates according to the defined requirements.",
    },
    {
      icon: MonitorSmartphone,
      title: "UI Testing",
      desc: "Reviewing interface elements, layouts, and interactions to ensure the visual experience behaves correctly.",
    },
  ],

  Platforms: [
    {
      icon: Smartphone,
      title: "Mobile Application Testing",
      desc: "Testing iOS and Android applications across different devices, screen sizes, and network environments to ensure reliable performance and user experience.",
    },
    {
      icon: Globe2,
      title: "Web Application Testing",
      desc: "Validating web applications for functionality, responsiveness, browser compatibility, security, and consistent performance across platforms.",
    },
    {
      icon: Laptop,
      title: "Desktop Application Testing",
      desc: "Ensuring desktop software operates smoothly across Windows, macOS, and other environments with stable functionality and compatibility.",
    },
  ],

  Industries: [
    {
      icon: Database,
      title: "Healthcare Supply Chain",
    },
    {
      icon: Truck,
      title: "Logistic",
    },
    {
      icon: Landmark,
      title: "Banking",
    },
    {
      icon: ShoppingCart,
      title: "Retail / E-commerce",
    },
  ],
};

export default function STServices() {
  const [activeTab, setActiveTab] = useState("Testing Services");

  return (
    <section className="py-28 pb-18 bg-[#f6f9fc] relative overflow-hidden">
      {/* glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-cyan-100/40 blur-[140px] rounded-full" />

      {/* grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#dbe4ee_1px,transparent_1px),linear-gradient(to_bottom,#dbe4ee_1px,transparent_1px)] bg-size-[5rem_5rem] opacity-[0.16]" />

      <Container>
        <div className="relative z-10">
          {/* HEADER */}
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-white border border-slate-200 text-sm font-semibold tracking-wide text-cyan-700 shadow-sm">
              QA Service Portfolio
            </span>

            <h2 className="mt-7 text-4xl! font-bold text-slate-900 tracking-tight leading-[1.05]">
              Software Testing Solutions <br />
              Built for Modern Applications
            </h2>

            <p className="mt-7 text-lg text-slate-600 leading-relaxed">
              Explore flexible testing approaches covering functional
              validation, automation, security, compatibility, and performance
              engineering for scalable digital products.
            </p>
          </div>

          {/* TABS */}
          <div className="mt-16 flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => {
              const active = activeTab === tab;

              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-6 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 border cursor-pointer
                    ${
                      active
                        ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/20"
                        : "bg-white text-slate-600 border-slate-200 hover:border-cyan-200 hover:text-cyan-700"
                    }
                  `}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          {/* CONTENT */}
          <div className="mt-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.35 }}
                className={`grid gap-7 ${
                  activeTab === "Testing Services"
                    ? "md:grid-cols-2"
                    : activeTab === "Industries"
                      ? "grid-cols-1 md:grid-cols-2"
                      : "md:grid-cols-2 xl:grid-cols-3"
                }`}
              >
                {services[activeTab].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -8 }}
                    className="group relative p-8 rounded-4xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:border-cyan-200 transition-all duration-300 overflow-hidden"
                  >
                    {/* glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-100/0 group-hover:bg-cyan-100/40 blur-3xl transition-all duration-500 rounded-full" />

                    {/* icon */}
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shadow-sm group-hover:bg-cyan-500 transition-all duration-300">
                      <item.icon
                        size={28}
                        className="text-cyan-700 group-hover:text-white transition-colors duration-300"
                      />
                    </div>

                    {/* content */}
                    <div className="relative z-10">
                      <h3 className="mt-7 text-2xl font-bold text-slate-900 tracking-tight">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    {/* decorative line */}
                    <div className="relative z-10 mt-8 h-px w-full bg-linear-to-r from-cyan-200/70 to-transparent" />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
