import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

import bgImage from "./Components/Background.png";

export default function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#030105] text-white flex flex-col justify-between selection:bg-[#dc143c] selection:text-white">
      
      {/* Background Image Layer (80% opacity) */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-80"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Yahan change hua hai: pt-[111px] se har page navbar se perfect 15px gap par aayega */}
      <main className="relative flex-grow w-full pt-[111px] pb-12 z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}