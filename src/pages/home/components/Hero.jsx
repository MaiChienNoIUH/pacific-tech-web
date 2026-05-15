import heroImg from "../../../assets/hero.png";
import Container from "../../../components/ui/Container";
import { motion } from "framer-motion";
import { Users, ShieldCheck, BarChart3 } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/15 z-0" />

      <Container>
        <div className="relative z-10 flex flex-col justify-center min-h-screen py-20">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="w-full"
          >
            {/* TEXT CONTENT */}
            <div className="max-w-190">
              <h1 className="text-[56px] md:text-[80px] leading-[1.05] font-extrabold tracking-[-2px]">
                Building intelligent
                <br />
                software for a
                <br />
                smarter future
              </h1>

              <p className="mt-8 text-[19px] leading-relaxed text-[#D5DDF5] font-light max-w-170">
                We help businesses innovate and grow with AI-powered solutions,
                custom software development, and expert teams that turn ideas into
                impactful digital products.
              </p>
            </div>

            {/* STATS GRID */}
            <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* CARD 1 */}
              <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#07133D]/80 backdrop-blur-xl px-8 py-6 flex items-center justify-between shadow-lg">
                <div>
                  <h3 className="text-[52px] font-extrabold leading-none text-[#00AFFF]">
                    75+
                  </h3>
                  <p className="mt-2 text-[20px] leading-tight text-white/90 font-medium">
                    Security Experts
                  </p>
                </div>
                <Users size={48} strokeWidth={1.5} className="text-[#3A7BFF] opacity-80" />
              </div>

              {/* CARD 2 */}
              <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#07133D]/80 backdrop-blur-xl px-8 py-6 flex items-center justify-between shadow-lg">
                <div>
                  <h3 className="text-[52px] font-extrabold leading-none text-[#00AFFF]">
                    18+
                  </h3>
                  <p className="mt-2 text-[20px] leading-tight text-white/90 font-medium">
                    Years of Experience
                  </p>
                </div>
                <ShieldCheck size={48} strokeWidth={1.5} className="text-[#3A7BFF] opacity-80" />
              </div>

              {/* CARD 3 */}
              <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#07133D]/80 backdrop-blur-xl px-8 py-6 flex items-center justify-between shadow-lg">
                <div>
                  <h3 className="text-[52px] font-extrabold leading-none text-[#00AFFF]">
                    150+
                  </h3>
                  <p className="mt-2 text-[20px] leading-tight text-white/90 font-medium">
                    Successful Projects
                  </p>
                </div>
                <BarChart3 size={48} strokeWidth={1.5} className="text-[#3A7BFF] opacity-80" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}