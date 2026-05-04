import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { ChevronDown } from "lucide-react";

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
        scrolled ? "bg-white shadow-sm" : "bg-white/10 backdrop-blur-md"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-3">

          {/* LOGO */}
          <h2 className={`text-5xl font-bold ${scrolled ? "text-black" : "text-white"}`}>
            Pacific Tech
          </h2>

          {/* MENU */}
          <nav className={`hidden md:flex gap-8 items-center text-sm font-medium ${scrolled ? "text-black" : "text-white"}`}>
            
            <a href="#" className="hover:opacity-80">About us</a>

            {/* SERVICES MEGA MENU */}
            <div
              className="relative"
              onMouseEnter={() => setOpenService(true)}
              onMouseLeave={() => setOpenService(false)}
            >
              <div className="flex items-center gap-1 cursor-pointer">
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
                className={`absolute left-1/2 -translate-x-1/2 mt-6 w-[900px] bg-white text-black rounded-2xl shadow-xl p-10
                transition-all duration-300 ${
                  openService
                    ? "opacity-100 translate-y-0 visible"
                    : "opacity-0 translate-y-3 invisible"
                }`}
              >
                <div className="grid grid-cols-3 gap-10">

                  {/* COLUMN 1 */}
                  <div>
                    <h3 className="text-blue-500 font-semibold mb-4">
                      AI Solutions
                    </h3>
                    <ul className="space-y-2">
                      <li className="hover:text-blue-500 cursor-pointer">Chatbots</li>
                      <li className="hover:text-blue-500 cursor-pointer">Voicebots</li>
                      <li className="hover:text-blue-500 cursor-pointer">Voice recognition</li>
                    </ul>
                  </div>

                  {/* COLUMN 2 */}
                  <div>
                    <h3 className="text-blue-500 font-semibold mb-4">
                      IT Solutions
                    </h3>
                    <ul className="space-y-2">
                      <li className="hover:text-blue-500 cursor-pointer">Insourcing Services</li>
                      <li className="hover:text-blue-500 cursor-pointer">Outsourcing Services</li>
                      <li className="hover:text-blue-500 cursor-pointer">Remote Staffing For SMBs - Startups</li>
                      <li className="hover:text-blue-500 cursor-pointer">Software Testing</li>
                      <li className="hover:text-blue-500 cursor-pointer">Web Application Development</li>
                      <li className="hover:text-blue-500 cursor-pointer">Mobile App Development Services</li>
                    </ul>
                  </div>

                  {/* COLUMN 3 */}
                  <div>
                    <h3 className="text-blue-500 font-semibold mb-4">
                      Internal Projects
                    </h3>
                    <ul className="space-y-2">
                      <li className="hover:text-blue-500 cursor-pointer">Working Utilities</li>
                      <li className="hover:text-blue-500 cursor-pointer">Games</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>

            <a href="#" className="hover:opacity-80">Careers</a>
            <a href="#" className="hover:opacity-80">Blog</a>
          </nav>

          {/* BUTTON */}
          <div className="hidden md:block">
            <Button className={`${scrolled ? "" : "bg-white text-black"}`}>
              Contact Us
            </Button>
          </div>

        </div>
      </Container>
    </header>
  );
}