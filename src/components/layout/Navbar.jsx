import { useEffect, useState } from "react";
import Container from "../ui/Container";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Bot, Laptop, FolderKanban } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openService, setOpenService] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [openMobileServices, setOpenMobileServices] = useState(false);

  const [openAi, setOpenAi] = useState(false);
  const [openIt, setOpenIt] = useState(false);
  const [openInternal, setOpenInternal] = useState(false);
  const [activeService, setActiveService] = useState("ai");

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileServices(false);
    setOpenAi(false);
    setOpenIt(false);
    setOpenInternal(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

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
          <a
            href="/"
            className={`text-2xl md:text-3xl font-bold tracking-wide transition-all duration-300 z-60 ${
              scrolled || isMobileMenuOpen ? "text-black" : "text-white"
            } hover:scale-105`}
          >
            Pacific{" "}
            <span className={`${scrolled ? "text-blue-600" : "text-blue-400"}`}>
              Tech
            </span>
          </a>

          <nav
            className={`hidden md:flex gap-8 items-center text-base font-medium ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            <Link to="/about" className="hover:text-blue-400 transition">
              About us
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setOpenService(true)}
              onMouseLeave={() => setOpenService(false)}
            >
              <Link
                to="/services"
                className="flex items-center gap-1 cursor-pointer hover:text-blue-400 transition"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    openService ? "rotate-180" : ""
                  }`}
                />
              </Link>

              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-6 w-225 bg-white text-black rounded-2xl shadow-2xl p-10
                transition-all duration-300 ${
                  openService
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 translate-y-3 invisible"
                }`}
              >
                <div className="grid grid-cols-3 gap-10">
                  <div>
                    <a
                      href="/services/ai-solutions"
                      className="block text-blue-600 font-semibold mb-4 hover:underline"
                    >
                      AI Solutions
                    </a>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <a href="/services/ai-solutions/chatbots" className="hover:text-blue-500 transition">
                          Chatbots
                        </a>
                      </li>
                      <li>
                        <a href="/services/ai-solutions/voicebots" className="hover:text-blue-500 transition">
                          Voicebots
                        </a>
                      </li>
                      <li>
                        <a href="/services/ai-solutions/voice-recognition" className="hover:text-blue-500 transition">
                          Voice recognition
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <a
                      href="/services/it-solutions"
                      className="block text-blue-600 font-semibold mb-4 hover:underline"
                    >
                      IT Solutions
                    </a>
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <a href="/services/it-solutions/insourcing" className="hover:text-blue-500 transition">
                          Insourcing Services
                        </a>
                      </li>
                      <li>
                        <a href="/services/it-solutions/outsourcing" className="hover:text-blue-500 transition">
                          Outsourcing Services
                        </a>
                      </li>
                      <li>
                        <a href="/services/it-solutions/remote-staffing" className="hover:text-blue-500 transition">
                          Remote Staffing For SMBs - Startups
                        </a>
                      </li>
                      <li>
                        <a href="/services/it-solutions/software-testing" className="hover:text-blue-500 transition">
                          Software Testing
                        </a>
                      </li>
                      <li>
                        <a href="/services/it-solutions/web-development" className="hover:text-blue-500 transition">
                          Web Development
                        </a>
                      </li>
                      <li>
                        <a href="/services/it-solutions/mobile-apps" className="hover:text-blue-500 transition">
                          Mobile Apps
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <a
                      href="/services/internal-projects"
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

            <Link to="/careers" className="hover:text-blue-400 transition">
              Careers
            </Link>

            <Link to="/blog" className="hover:text-blue-400 transition">
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center text-sm px-4 py-2 rounded-lg font-medium transition cursor-pointer hover:scale-105 active:scale-95 bg-blue-500 text-white hover:bg-blue-600"
              >
                Contact Us
              </Link>
            </div>

            <button
              className={`md:hidden z-60 transition-colors ${
                scrolled || isMobileMenuOpen ? "text-black" : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-dvh bg-white z-50 flex flex-col p-4 pt-24 md:hidden overflow-y-scroll"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <nav className="flex flex-col gap-6 text-xl font-semibold text-black">
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="border-b border-gray-100 pb-4"
              >
                About us
              </Link>

              <div className="border-b border-gray-100 pb-4">
                {/* MAIN SERVICES */}
                <div className="w-full flex items-center justify-between text-xl font-semibold text-black">
                  <Link to="/services" onClick={closeMobileMenu} className="flex-1 pr-4">
                    Services
                  </Link>

                  <button
                    type="button"
                    onClick={() => setOpenMobileServices(!openMobileServices)}
                    className="shrink-0 p-1 -mr-1"
                    aria-label="Toggle Services submenu"
                  >
                    <ChevronDown
                      size={22}
                      className={`transition-transform duration-300 ${
                        openMobileServices ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                <AnimatePresence>
                  {openMobileServices && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-5 flex flex-col gap-4"
                    >
                      {/* AI SOLUTIONS */}
                      <div className="bg-gray-50 rounded-2xl overflow-hidden">
                        <div className="w-full flex items-center justify-between px-5 py-4 gap-4">
                          <Link
                            to="/services/ai-solutions"
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 flex-1 min-w-0"
                          >
                            <Bot className="text-blue-600 shrink-0" size={22} />
                            <span className="font-semibold text-[17px] text-black">
                              AI Solutions
                            </span>
                          </Link>

                          <button
                            type="button"
                            onClick={() => setOpenAi(!openAi)}
                            className="shrink-0 p-1 -mr-1"
                            aria-label="Toggle AI Solutions submenu"
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${
                                openAi ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence>
                          {openAi && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-3 px-5 pb-5 text-[15px] text-gray-600">
                                <Link to="/services/ai-solutions/chatbots" onClick={closeMobileMenu}>Chatbots</Link>
                                <Link to="/services/ai-solutions/voicebots" onClick={closeMobileMenu}>Voicebots</Link>
                                <Link to="/services/ai-solutions/voice-recognition" onClick={closeMobileMenu}>Voice Recognition</Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* IT SOLUTIONS */}
                      <div className="bg-gray-50 rounded-2xl overflow-hidden">
                        <div className="w-full flex items-center justify-between px-5 py-4 gap-4">
                          <Link
                            to="/services/it-solutions"
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 flex-1 min-w-0"
                          >
                            <Laptop className="text-blue-600 shrink-0" size={22} />
                            <span className="font-semibold text-[17px] text-black">
                              IT Solutions
                            </span>
                          </Link>

                          <button
                            type="button"
                            onClick={() => setOpenIt(!openIt)}
                            className="shrink-0 p-1 -mr-1"
                            aria-label="Toggle IT Solutions submenu"
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${
                                openIt ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence>
                          {openIt && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-3 px-5 pb-5 text-[15px] text-gray-600">
                                <Link to="/services/it-solutions/insourcing" onClick={closeMobileMenu}>Insourcing Services</Link>
                                <Link to="/services/it-solutions/outsourcing" onClick={closeMobileMenu}>Outsourcing Services</Link>
                                <Link to="/services/it-solutions/remote-staffing" onClick={closeMobileMenu}>Remote Staffing For SMBs - Startups</Link>
                                <Link to="/services/it-solutions/software-testing" onClick={closeMobileMenu}>Software Testing</Link>
                                <Link to="/services/it-solutions/web-development" onClick={closeMobileMenu}>Web Development</Link>
                                <Link to="/services/it-solutions/mobile-apps" onClick={closeMobileMenu}>Mobile Apps</Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* INTERNAL PROJECTS */}
                      <div className="bg-gray-50 rounded-2xl overflow-hidden">
                        <div className="w-full flex items-center justify-between px-5 py-4 gap-4">
                          <Link
                            to="/services/internal-projects"
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 flex-1 min-w-0"
                          >
                            <FolderKanban className="text-blue-600 shrink-0" size={22} />
                            <span className="font-semibold text-[17px] text-black">
                              Internal Projects
                            </span>
                          </Link>

                          <button
                            type="button"
                            onClick={() => setOpenInternal(!openInternal)}
                            className="shrink-0 p-1 -mr-1"
                            aria-label="Toggle Internal Projects submenu"
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${
                                openInternal ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence>
                          {openInternal && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col gap-3 px-5 pb-5 text-[15px] text-gray-600">
                                <Link to="#" onClick={closeMobileMenu}>Working Utilities</Link>
                                <Link to="#" onClick={closeMobileMenu}>Games</Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/careers"
                onClick={closeMobileMenu}
                className="border-b border-gray-100 pb-4"
              >
                Careers
              </Link>
              <Link
                to="/blog"
                onClick={closeMobileMenu}
                className="border-b border-gray-100 pb-4"
              >
                Blog
              </Link>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="mt-4 inline-flex w-full items-center justify-center py-4 bg-blue-600 text-white rounded-xl font-medium transition hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
