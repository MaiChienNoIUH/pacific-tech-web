import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";

const services = [
  {
    title: "Chatbots",
    desc: "AI-powered chatbots that automate conversations, enhance customer support, and improve engagement across multiple digital platforms.",
  },
  {
    title: "Voicebots",
    desc: "Intelligent voice assistants that enable natural interactions, helping businesses deliver seamless voice-driven experiences for customer service, automation, and smart applications.",
  },
  {
    title: "Voice Recognition",
    desc: "Advanced speech recognition systems built for real-time processing, high accuracy, and seamless integration into modern software solutions and AI-driven workflows.",
  },
  {
    title: "Remote Staffing",
    desc: "Flexible remote development teams tailored for startups and SMBs, helping you scale faster with skilled engineers while reducing operational overhead and hiring complexity.",
  },
  {
    title: "Software Testing",
    desc: "Comprehensive testing solutions to ensure your systems are reliable, secure, and perform optimally. We cover everything from manual testing to automated and performance testing.",
  },
  {
    title: "Web Development",
    desc: "Modern, scalable web applications built with the latest technologies, focusing on performance, security, and delivering exceptional user experiences across all devices.",
  },
  {
    title: "Mobile Apps",
    desc: "High-performance iOS and Android applications designed for scalability, usability, and long-term growth, ensuring smooth performance and engaging user experiences.",
  },
];

export default function Services() {
  return (
    <section className="py-24">
      <Container>
        {/* TITLE */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-blue-500">OUR SERVICES</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Discover the solutions we offer to help your business grow, innovate,
            and stay ahead in a rapidly evolving digital world.
          </p>
        </div>

        {/* LIST */}
        <div className="w-full border-t border-gray-200">
          {services.map((item, index) => (
            <div
              key={index}
              className="group border-b border-gray-200 transition-all duration-300"
            >
              {/* HEADER */}
              <div className="flex justify-between items-center py-6 px-2 cursor-pointer group-hover:bg-gray-50 transition">
                <h3 className="text-xl font-semibold group-hover:text-blue-500 transition">
                  {item.title}
                </h3>

                <span className="text-gray-400 group-hover:text-blue-500 transition">
                  →
                </span>
              </div>

              {/* CONTENT */}
              <div className="max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-500 px-2">
                <p className="text-gray-600 pb-4">
                  {item.desc}
                </p>

                <Button className="mb-6 bg-blue-50 text-blue-600 hover:bg-blue-100 text-sm px-4 py-2">
                  View more →
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* GLOBAL CTA */}
        <div className="mt-16 text-center">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 px-8 py-3">
            Explore all services →
          </Button>
        </div>
      </Container>
    </section>
  );
}