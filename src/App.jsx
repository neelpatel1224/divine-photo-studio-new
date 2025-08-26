import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CoupleStories from "./pages/CoupleStories";
import Couples from "./pages/Couples";
import StoryDetail from "./pages/StoryDetail";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/couple-stories" element={<CoupleStories />} />
          <Route path="/couples" element={<Couples />} />
          <Route path="/couple-stories/:id" element={<StoryDetail />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
