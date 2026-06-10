import { motion } from "framer-motion";
import Container from "../../../../../components/ui/Container";

// IMPORT ICONS / LOGOS
import seleniumIcon from "../../../../../assets/selenium.png";
import cypressIcon from "../../../../../assets/cypress.webp";
import jiraIcon from "../../../../../assets/jira.webp";
import trelloIcon from "../../../../../assets/trello.webp";
import excelIcon from "../../../../../assets/excel.png";
import postmanIcon from "../../../../../assets/postman.png";
import testrailIcon from "../../../../../assets/testrail.png";
import appiumIcon from "../../../../../assets/appium.png";
import jmeterIcon from "../../../../../assets/jmeter.webp";
import githubIcon from "../../../../../assets/github-actions.webp";
import dockerIcon from "../../../../../assets/docker.png";
import jenkinsIcon from "../../../../../assets/jenkin.png";

const technologies = [
  {
    name: "Jira",
    category: "Bug Tracking",
    icon: jiraIcon,
  },
  {
    name: "Trello",
    category: "Task Management",
    icon: trelloIcon,
  },
  {
    name: "Excel",
    category: "Test Documentation",
    icon: excelIcon,
  },
  {
    name: "TestRail",
    category: "Test Management",
    icon: testrailIcon,
  },
  {
    name: "Postman",
    category: "API Testing",
    icon: postmanIcon,
  },
  {
    name: "Selenium",
    category: "Automation",
    icon: seleniumIcon,
  },
  {
    name: "Cypress",
    category: "Automation",
    icon: cypressIcon,
  },
  {
    name: "Appium",
    category: "Mobile Testing",
    icon: appiumIcon,
  },
  {
    name: "JMeter",
    category: "Performance",
    icon: jmeterIcon,
  },
  {
    name: "Jenkins",
    category: "CI/CD",
    icon: jenkinsIcon,
  },
  {
    name: "GitHub Actions",
    category: "CI/CD",
    icon: githubIcon,
  },
  {
    name: "Docker",
    category: "Infrastructure",
    icon: dockerIcon,
  },
];

export default function STIndustries() {
  return (
    <section className="py-22 bg-white overflow-hidden relative">
      {/* background glow */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-cyan-100/30 blur-3xl rounded-full -translate-y-1/2" />

      <Container>
        <div className="relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-10 lg:mb-20"
          >
            <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-50 border border-cyan-100 text-sm font-semibold text-cyan-700">
              Modern Tech Stack
            </span>

            <h2 className="mt-3 lg:mt-6 text-5xl font-bold text-slate-900 leading-tight">
              Advanced Testing Technology Stack
            </h2>

            <p className="mt-2 lg:mt-5 text-lg text-slate-600 leading-relaxed">
              We combine industry-leading manual and automation testing tools
              to ensure reliable product quality, streamlined collaboration,
              and scalable QA workflows.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                whileHover={{ y: -8 }}
                className="group relative p-7 rounded-3xl border border-slate-200 bg-linear-to-br from-white to-slate-50 shadow-sm hover:shadow-2xl hover:border-cyan-200 transition-all duration-300 overflow-hidden"
              >
                {/* hover accent */}
                <div className="absolute top-0 left-0 h-1 w-full bg-linear-to-r from-cyan-400 via-sky-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* glow */}
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-cyan-400/0 to-blue-500/0 group-hover:from-cyan-400/5 group-hover:to-blue-500/5 transition-all duration-300" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* ICON */}
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-9 h-9 object-contain"
                    />
                  </div>

                  {/* NAME */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors duration-300">
                    {tech.name}
                  </h3>

                  {/* CATEGORY */}
                  <p className="mt-2 text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300">
                    {tech.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}