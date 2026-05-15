import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openService, setOpenService] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm"
          : "bg-[#0b1a3a]/70 backdrop-blur-lg border-b border-white/10"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* LOGO */}
          <a
            href="/"
            className={`text-2xl md:text-3xl font-bold tracking-wide transition-all duration-300
  ${
    scrolled
      ? "text-black"
      : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
  }
  hover:scale-105`}
          >
            Pacific{" "}
            <span className={`${scrolled ? "text-blue-600" : "text-blue-400"}`}>
              Tech
            </span>
          </a>

          {/* MENU */}
          <nav
            className={`hidden md:flex gap-8 items-center text-base font-medium ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <Link to="/about" className="hover:text-blue-400 transition">
              About us
            </Link>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setOpenService(true)}
              onMouseLeave={() => setOpenService(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition">
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openService ? "rotate-180" : ""
                  }`}
                />
              </div>

              {/* MEGA MENU */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-6 w-225 bg-white text-black rounded-2xl shadow-2xl p-10
                transition-all duration-300 ${
                  openService
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 translate-y-3 invisible"
                }`}
              >
                <div className="grid grid-cols-3 gap-10">
                  {/* COLUMN 1 */}
                  <div>
                    <a
                      href="#"
                      className="block text-blue-600 font-semibold mb-4 hover:underline"
                    >
                      AI Solutions
                    </a>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <a href="#" className="hover:text-blue-500 transition">
                          Chatbots
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500 transition">
                          Voicebots
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500 transition">
                          Voice recognition
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* COLUMN 2 */}
                  <div>
                    <a
                      href="#"
                      className="block text-blue-600 font-semibold mb-4 hover:underline"
                    >
                      IT Solutions
                    </a>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <a href="#" className="hover:text-blue-500 transition">
                          Insourcing Services
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500 transition">
                          Outsourcing Services
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500 transition">
                          Remote Staffing
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500 transition">
                          Software Testing
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500 transition">
                          Web Development
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500 transition">
                          Mobile Apps
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* COLUMN 3 */}
                  <div>
                    <a
                      href="#"
                      className="block text-blue-600 font-semibold mb-4 hover:underline"
                    >
                      Internal Projects
                    </a>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <a href="#" className="hover:text-blue-500 transition">
                          Working Utilities
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-blue-500 transition">
                          Games
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <a href="/careers" className="hover:text-blue-400 transition">
              Careers
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              Blog
            </a>
          </nav>

          {/* BUTTON */}
          <div className="hidden md:block">
            <Button className="text-sm px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
