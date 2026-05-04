import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[#0b1a3a] text-white py-16 w-full">
      <Container>
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-bold mb-4 text-7xl">
                Pacific <span className="text-blue-400 text-4xl">Tech</span>
              </h2>
              <p className="text-gray-400">Navigating the Future of Software</p>
            </div>

            <div>
              <p className="font-semibold mb-3 pb-1.5 text-blue-400 text-[20px] cursor-pointer hover:underline">Careers</p>
              <p className="font-semibold mb-3 text-blue-400 text-[20px] cursor-pointer hover:underline">About Us</p>
            </div>
          </div>

          {/* Column */}
          <div>
            <p className="font-semibold mb-3 pb-1.5 text-blue-400 text-[20px] cursor-pointer hover:underline">Services</p>
            <p className="text-gray-300 cursor-pointer hover:underline">Chatbots</p>
            <p className="text-gray-300 cursor-pointer hover:underline">Voicebots</p>
            <p className="text-gray-300 cursor-pointer hover:underline">Voice recognition</p>
            <p className="text-gray-300 cursor-pointer hover:underline">Remote Staffing For SMBs - Startups</p>
            <p className="text-gray-300 cursor-pointer hover:underline">Software Testing</p>
            <p className="text-gray-300 cursor-pointer hover:underline">Web Application Development</p>
            <p className="text-gray-300 cursor-pointer hover:underline">Mobile App Development Services</p>
          </div>

          <div>
            <p className="font-semibold mb-3 pb-1.5 text-blue-400 text-[20px] cursor-pointer hover:underline">Blog</p>
            <p className="text-gray-300 cursor-pointer hover:underline">AI & Blockchain Trends</p>
            <p className="text-gray-300 cursor-pointer hover:underline">Thought Leadership Articles</p>
            <p className="text-gray-300 cursor-pointer hover:underline">Success Stories & Client Spotlights</p>
            <p className="text-gray-300 cursor-pointer hover:underline">Industry Case Studies </p>
          </div>

          <div>
            <p className="font-semibold mb-3 pb-1.5 text-blue-400 text-[20px] cursor-pointer hover:underline">Legal</p>
            <p className="text-gray-300 cursor-pointer hover:underline">Privacy Policy</p>
            <p className="text-gray-300 cursor-pointer hover:underline">Terms</p>
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
