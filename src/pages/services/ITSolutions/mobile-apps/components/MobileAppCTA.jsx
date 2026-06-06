import Container from "../../../../../components/ui/Container";

export default function MobileAppCTA() {
  return (
    <section className="py-24 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_34%)]" />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-flex px-4 py-1.5 mb-3 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-semibold">
            Let’s talk about your project
          </span>

          <h2 className="mt-6 text-4xl! md:text-5xl font-bold leading-tight">
            Ready to build your next mobile app?
          </h2>

          <p className="mt-5 text-lg text-slate-300 leading-relaxed">
            Share your idea, timeline, and platform needs. We will help you map the right mobile approach and move toward a reliable release.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-2 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95">
              Talk to Us
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}