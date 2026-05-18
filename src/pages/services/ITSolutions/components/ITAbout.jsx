import { motion } from "framer-motion";
import { Eye, Target, Quote } from "lucide-react";
import Container from "../../../../components/ui/Container";

export default function ITAbout() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <Container>
        <div className="space-y-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">ABOUT PACIFIC TECH</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight tracking-tight">
                Building smarter digital experiences for modern businesses.
              </h2>
              <p className="text-slate-500 mt-6 text-lg leading-relaxed">
                Pacific Tech helps startups and enterprises transform ideas into scalable digital products with AI, software engineering, and innovative technologies.
              </p>
            </div>

            <div className="lg:col-span-7 lg:border-l lg:border-slate-200 lg:pl-16 flex flex-col justify-center">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">WHO WE ARE</span>
              <h3 className="text-2xl font-bold text-[#0b1a3a] mb-4">A technology partner focused on innovation and growth</h3>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                Pacific Tech is a software and AI company dedicated to building modern digital products for businesses worldwide. From AI-powered systems to scalable web and mobile applications, we combine engineering expertise with forward-thinking solutions to help companies grow faster and operate smarter.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div whileHover={{ y: -5 }} className="p-10 rounded-3xl bg-blue-50/50 border border-blue-100/60 relative overflow-hidden flex flex-col justify-between">
              <Quote className="absolute right-6 top-6 text-blue-200/60" size={60} />
              <div className="relative z-10">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-6">FOUNDER MESSAGE</span>
                <p className="text-xl font-medium text-[#0b1a3a] italic leading-relaxed">
                  “We don’t just build software — we create long-term digital value for businesses.”
                </p>
              </div>
              <div className="mt-8 border-t border-blue-100 pt-4 text-sm font-semibold text-slate-600">— Pacific Tech Management</div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="p-10 rounded-3xl bg-slate-50 border border-slate-200/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-6">OUR CORE TEAM</span>
                <h4 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">Pacific Tech Team</h4>
                <p className="text-slate-600 leading-relaxed text-lg">Our core synergy drives daily technical execution across global projects.</p>
              </div>
              <div className="mt-8 flex gap-3 flex-wrap">
                {["Innovation", "Technology", "Growth"].map((tag, idx) => (
                  <span key={idx} className="px-4 py-1.5 bg-white border border-slate-200 text-xs font-bold text-slate-700 rounded-full">• {tag}</span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="flex gap-6 p-8 rounded-2xl border border-slate-100 bg-slate-50/50 transition-all duration-300 hover:shadow-md">
              <div className="w-14 h-14 shrink-0 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center"><Eye size={24} /></div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Our Vision</h4>
                <p className="text-sm text-slate-500 leading-relaxed">To become a trusted global technology partner delivering innovative and scalable digital experiences.</p>
              </div>
            </div>

            <div className="flex gap-6 p-8 rounded-2xl border border-slate-100 bg-slate-50/50 transition-all duration-300 hover:shadow-md">
              <div className="w-14 h-14 shrink-0 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center"><Target size={24} /></div>
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Our Mission</h4>
                <p className="text-sm text-slate-500 leading-relaxed">To empower businesses through AI, software engineering, and modern technology solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}