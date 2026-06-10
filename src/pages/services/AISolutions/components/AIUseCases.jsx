import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "../../../../components/ui/Container";
import aiChatbots from "../../../../assets/AI-chatbot.jpg";
import aiVoicebots from "../../../../assets/voice-bot3.png";
import voiceRecognition from "../../../../assets/voice-recognition.jpeg";

const items = [
  {
    title: "AI Chatbots",
    desc: "Empower your business with smart conversational chatbots that seamlessly automate customer support, sales inquiries, and user engagement 24/7. Utilizing advanced Natural Language Processing (NLP), these bots understand user intent accurately and deliver context-aware, human-like responses that boost conversion rates and drastically cut operational costs.",
    img: aiChatbots,
    link: "/services/ai-solutions/chatbots",
  },
  {
    title: "AI Voicebots",
    desc: "Scale your communication effortlessly with sophisticated automated voice assistant systems. Engineered to handle thousands of inbound and outbound calls simultaneously, our voicebots resolve queries instantly in real-time. They adapt smoothly to customer emotions, mimic natural phrasing, and perfectly streamline repetitive call-center workflows.",
    img: aiVoicebots,
    link: "/services/ai-solutions/voicebots",
  },
  {
    title: "Voice Recognition",
    desc: "Unlock the power of speech data with advanced speech-to-text systems that accurately convert multi-language voice into structured data. Optimized for complex industry terminology, this technology enables instant transcription, deeper behavioral analytics, and automated compliance auditing, transforming every voice interaction into actionable business insights.",
    img: voiceRecognition,
    link: "/services/ai-solutions/voice-recognition",
  },
];

export default function AIUsecases() {
  return (
    <section className="py-28 bg-[#f5f9ff] overflow-hidden">
      <Container>
        <div className="space-y-18 lg:space-y-32">
          {items.map((item, i) => {
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
                {/* TEXT SECTION */}
                <div className={`md:col-span-7 ${reverse ? "md:order-2 md:pl-6" : "md:pr-6"}`}>
                  <h3 className="text-3xl md:text-4xl font-bold mb-5 text-[#0b1a3a] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
                    {item.desc}
                  </p>
                  
                  <a
                    href={item.link}
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

                {/* IMAGE SECTION */}
                <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
                  <div className="overflow-hidden rounded-xl lg:rounded-3xl shadow-xl bg-white aspect-4/3 max-h-80 w-full">
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