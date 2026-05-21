import Container from "../../../../../components/ui/Container";
import voicebotIntro from "../../../../../assets/voicebot-intro.jpg";


export default function VoicebotIntro() {
  return (
    <section className="py-24 bg-white border-b border-slate-200 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-20 items-center">
          
          {/* LEFT */}
          <div>
            <span className="inline-flex items-center px-4 py-1.5 mb-3 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700">
              What is a Voicebot?
            </span>

            <h2 className="mt-6 text-4xl! md:text-5xl font-semibold text-slate-900 leading-tight">
              Intelligent Voice Automation for Modern Businesses
            </h2>

            <div className="mt-8 space-y-5 text-lg text-slate-600 leading-relaxed">
              <p>
                Voicebots use artificial intelligence to automate real-time
                customer conversations and phone interactions. They understand
                spoken language, respond naturally, and help businesses deliver
                faster customer experiences.
              </p>

              <p>
                From appointment scheduling and support inquiries to payment
                reminders and operational workflows, Voice AI helps organizations
                reduce manual workload while improving response efficiency.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative hidden lg:block">
            <img
              src={voicebotIntro}
              alt=""
              className="rounded-4xl shadow-2xl object-cover border border-slate-200"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}