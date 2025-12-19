import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { X } from "lucide-react";
import "../App.css";
import { Link } from "react-router-dom";
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  useGSAP(() => {
    gsap.from(".Navbar", {
      y: -80,
      opacity: 0,
      ease: "power3.out",
      duration: 0.6,
      delay: 0.4,
    });
  });

  return (
    <nav className="Navbar fixed top-0 w-full z-50 bg-[#040813]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto h-20 flex items-center justify-between px-6 text-sm text-gray-300">
        {/* Logo */}
        <div className="text-lg font-semibold text-indigo-400">
          Akash<span className="text-white">.</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="hover:text-indigo-400"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-indigo-400"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="hover:text-indigo-400"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="hover:text-indigo-400"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-indigo-400"
          >
            Contact
          </button>
        </div>

        {/* Resume */}
        <a
          href="/resume.pdf"
          className="border border-indigo-400 text-indigo-400 px-4 py-2 rounded-md hover:bg-indigo-400 hover:text-black transition"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
