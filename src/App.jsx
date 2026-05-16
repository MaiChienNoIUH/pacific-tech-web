import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/Homepage";
import AboutPage from "./pages/about-us/AboutPage";
import ScrollToTop from "./components/layout/ScrollToTop";
import Career from "./pages/career/Career";
import ServicesPage from "./pages/services/ServicesPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;