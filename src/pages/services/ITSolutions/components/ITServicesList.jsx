import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../../../../components/ui/Container";

import imgInsourcing from "../../../../assets/insource.jpeg";
import imgOutsourcing from "../../../../assets/outsource2.avif";
import imgRemoteStaffing from "../../../../assets/remote-staffing.jpg";
import imgTesting from "../../../../assets/software-testing.webp";
import imgWebDev from "../../../../assets/web-dev2.png";
import imgMobileApps from "../../../../assets/mobile-app.png";

const services = [
  { title: "Insourcing Services", desc: "Build your internal capabilities by integrating our top-tier technical specialists directly into your core team. We provide engineering expertise while you maintain full control over code and management.", img: imgInsourcing, path: "/services/it-solutions/insourcing" },
  { title: "Outsourcing Services", desc: "Hand over your technology roadmap to a trusted partner. Our software engineering teams take complete ownership of your product development from concept to secure production delivery.", img: imgOutsourcing, path: "/services/it-solutions/outsourcing" },
  { title: "Remote Staffing", desc: "Scale your technical workforce instantly with highly-vetted remote developers, UI/UX designers, and QA engineers. Eliminate hiring constraints and overhead costs seamlessly.", img: imgRemoteStaffing, path: "/services/it-solutions/remote-staffing" },
  { title: "Software Testing", desc: "Ensure flawless user experiences with comprehensive Quality Assurance. From automated testing to high-load performance analysis, we eliminate bugs before deployment.", img: imgTesting, path: "/services/it-solutions/software-testing" },
  { title: "Web Development", desc: "Launch high-performance, secure, and SEO-optimized web applications built with modern frameworks. Our scalable architectures handle heavy traffic spikes fluidly.", img: imgWebDev, path: "/services/it-solutions/web-development" },
  { title: "Mobile Apps", desc: "Deliver premium cross-platform and native mobile experiences across iOS and Android. We focus on intuitive interfaces, fluid animations, and robust offline capabilities.", img: imgMobileApps, path: "/services/it-solutions/mobile-apps" },
];

export default function ITServicesList() {
  return (
    <section className="py-22 pt-18 bg-[#f5f9ff] overflow-hidden">
      <Container>
        <div className="text-left max-w-3xl mb-12">
          <span className="text-sm font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-4 py-1.5 rounded-full inline-block border border-blue-100 mb-2">
            WHAT WE OFFER
          </span>
          <h2 className="text-4xl font-bold text-[#0b1a3a] mt-5 tracking-tight leading-tight">
            Insourcing Technical Specialists <br />& End-to-End Delivery
          </h2>
        </div>

        <div className="space-y-18 lg:space-y-32">
          {services.map((item, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-16 items-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className={`md:col-span-7 ${reverse ? "md:order-2 md:pl-6" : "md:pr-6"}`}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0b1a3a] tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">{item.desc}</p>
                                    <a
                    href={item.path}
                    className="
                      inline-flex items-center gap-2
                      text-blue-500 font-medium
                      transition-all duration-300
                      group-hover:gap-4
                      group-hover:text-blue-600
                    "
                  >
                    <span className="
                      transition-all duration-300 transform-gpu origin-left
                      group-hover:font-semibold group-hover:scale-105
                    ">
                      Read More
                    </span>
                    
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:scale-105" />
                  </a>
                </div>

                <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
                  <div className="overflow-hidden rounded-xl lg:rounded-3xl shadow-lg border border-blue-100/40 bg-white aspect-4/3 max-h-75 w-full">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
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