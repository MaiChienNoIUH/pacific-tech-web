import Container from "../ui/Container";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0b1a3a] text-white py-16 w-full">
      <Container>
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          <div className="flex justify-between items-start">
            <div>
              <Link to="/" className="inline-block hover:opacity-90 transition">
                <h2 className="font-bold mb-4 text-4xl!">
                  Pacific <span className="text-blue-400 text-4xl">Tech</span>
                </h2>
              </Link>
              <p className="text-gray-400">Navigating the Future of Software</p>
              <p className="text-gray-400"> Contact us: info@pacifictech.vn</p>

              {/* SOCIAL */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-500 transition"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>

            <div>
              <Link
                to="/careers"
                className="block font-semibold mb-3 pb-1.5 text-blue-400 text-[20px] cursor-pointer hover:underline"
              >
                Careers
              </Link>
              <Link
                to="/about"
                className="block font-semibold mb-3 text-blue-400 text-[20px] cursor-pointer hover:underline"
              >
                About Us
              </Link>
            </div>
          </div>

          {/* Column */}
          <div>
            <Link
              to="/services"
              className="block font-semibold mb-3 pb-1.5 text-blue-400 text-[20px] cursor-pointer hover:underline"
            >
              Services
            </Link>
            <Link to="/services/ai-solutions/chatbots" className="block text-gray-300 cursor-pointer hover:underline">
              Chatbots
            </Link>
            <Link to="/services/ai-solutions/voicebots" className="block text-gray-300 cursor-pointer hover:underline">
              Voicebots
            </Link>
            <Link to="/services/ai-solutions/voice-recognition" className="block text-gray-300 cursor-pointer hover:underline">
              Voice recognition
            </Link>
            <Link to="/services/it-solutions/remote-staffing" className="block text-gray-300 cursor-pointer hover:underline">
              Remote Staffing For SMBs - Startups
            </Link>
            <Link to="/services/it-solutions/software-testing" className="block text-gray-300 cursor-pointer hover:underline">
              Software Testing
            </Link>
            <Link to="/services/it-solutions/web-development" className="block text-gray-300 cursor-pointer hover:underline">
              Web Application Development
            </Link>
            <Link to="/services/it-solutions/mobile-apps" className="block text-gray-300 cursor-pointer hover:underline">
              Mobile App Development Services
            </Link>
          </div>

          <div>
            <Link
              to="/blog"
              className="block font-semibold mb-3 pb-1.5 text-blue-400 text-[20px] cursor-pointer hover:underline"
            >
              Blog
            </Link>
            <Link
              to="/blog/category/ai-solutions"
              className="block text-gray-300 cursor-pointer hover:underline"
            >
              AI Solutions
            </Link>
            <Link
              to="/blog/category/software-engineering"
              className="block text-gray-300 cursor-pointer hover:underline"
            >
              Software Engineering
            </Link>
            <Link
              to="/blog/category/insights-success-stories"
              className="block text-gray-300 cursor-pointer hover:underline"
            >
              Insights & Success Stories
            </Link>
            <Link
              to="/blog/category/mobile-qa"
              className="block text-gray-300 cursor-pointer hover:underline"
            >
              Mobile & QA
            </Link>
          </div>

          <div>
            <span className="block font-semibold mb-3 pb-1.5 text-blue-400 text-[20px] cursor-pointer hover:underline">
              Legal
            </span>
            <a className="block text-gray-300 cursor-pointer hover:underline">
              Privacy Policy
            </a>
            <a className="block text-gray-300 cursor-pointer hover:underline">
              Terms
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex justify-between text-gray-400 text-sm">
          <p>© 2026 Pacific Tech</p>
          <p>Germany - Japan - Vietnam</p>
        </div>
      </Container>
    </footer>
  );
}
