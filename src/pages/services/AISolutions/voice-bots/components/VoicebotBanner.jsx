import Container from "../../../../../components/ui/Container";

export default function VoicebotBanner() {
  return (
<section className="relative py-20 md:py-24 overflow-hidden">
  {/* BACKGROUND */}
  <div className="absolute inset-0 bg-[linear-gradient(135deg,#163B66_0%,#0E1D54_28%,#0B1744_55%,#081235_100%)]" />

  {/* LEFT CYAN GLOW */}
  <div className="absolute -bottom-45 -left-35 w-130 h-130 bg-cyan-400/35 blur-[130px] rounded-full" />

  {/* SUBTLE DARK DEPTH */}
  <div className="absolute inset-0 bg-black/10" />

  <Container>
    <div className="relative z-10 max-w-3xl">
      <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-white backdrop-blur-sm">
        AI Voice Automation
      </span>

      <h2 className="mt-6 text-5xl! font-bold text-white! leading-tight">
        Deliver Faster, Smarter Customer Conversations
      </h2>

      <p className="mt-6 text-lg text-slate-200 leading-relaxed max-w-2xl">
        Automate repetitive customer calls, improve response times, and
        provide scalable voice support experiences with enterprise-ready AI
        voice technology.
      </p>
    </div>
  </Container>
</section>
  );
}