import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../../../../components/ui/Container";

import imgUtilities from "../../../../assets/work.jpg";
import imgGames from "../../../../assets/games.avif";

const projects = [
  {
    title: "Working Utilities",
    desc: "Empower your corporate environment with highly optimized internal software, dashboard automation, and data utilities. Engineered to connect seamlessly with existing internal architectures, our solutions minimize operational friction, eliminate overhead bottlenecks, and help teams collaborate with full engineering precision in real time.",
    img: imgUtilities,
    path: "/internal-projects/utilities",
  },
  {
    title: "Games",
    desc: "Discover our premium interactive entertainment pipeline. We build modern, scalable web-native and application games with complex internal logical structures, fluid render mechanics, and creative game loops. Perfected for team engagement, community growth, or standalone market delivery.",
    img: imgGames,
    path: "/internal-projects/games",
  },
];

export default function InternalServicesList() {
  return (
    <section className="py-28 pt-18 bg-[#f5f9ff] overflow-hidden">
      <Container>
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 px-4 py-1.5 mb-2 rounded-full inline-block">
            PRODUCT PIPELINE
          </span>
          <h2 className="text-3xl! md:text-4xl! font-bold text-[#0b1a3a] mt-5 tracking-tight leading-tight">
            Our Dedicated Internal Creations <br />
            For Operations & Entertainment
          </h2>
        </div>

        {/* List items */}
        <div className="space-y-32">
          {projects.map((item, i) => {
            const reverse = i % 2 === 1;

            return (
              <motion.div
                key={i}
                className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* TEXT COMPONENT */}
                <div
                  className={`md:col-span-7 ${reverse ? "md:order-2 md:pl-6" : "md:pr-6"}`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0b1a3a] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base md:text-lg mb-6">
                    {item.desc}
                  </p>

                  {/* <a
                    href={item.path}
                    className="inline-flex items-center gap-2 text-blue-500 font-medium transition-all duration-300 group-hover:gap-4 group-hover:text-blue-600"
                  >
                    <span
                      className="
                      transition-all duration-300 transform-gpu origin-left
                      group-hover:font-semibold group-hover:scale-105
                    "
                    >
                      Read More
                    </span>

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </a> */}
                </div>

                {/* IMAGE COMPONENT */}
                <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
                  <div className="overflow-hidden rounded-3xl shadow-lg border border-blue-100/40 bg-white aspect-4/3 max-h-75 w-full">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
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
