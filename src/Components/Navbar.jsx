import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../App.css";

const sections = ["home", "about", "skills", "projects", "contact"];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  const [active, setActive] = useState("home");

  useGSAP(() => {
    gsap.from(".Navbar", {
      y: -80,
      opacity: 0,
      ease: "power3.out",
      duration: 0.6,
      delay: 0.4,
    });
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        // 🔥 KEY FIX
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="Navbar fixed top-0 w-full z-50 bg-[#040813]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto h-20 flex items-center justify-between px-6 text-sm text-gray-300">
        {/* Logo */}
        <div className="text-lg font-semibold text-indigo-400 cursor-pointer">
          Akash<span className="text-white">.</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`
                relative cursor-pointer transition-colors duration-300
                ${
                  active === section
                    ? "text-indigo-400"
                    : "hover:text-indigo-400"
                }
              `}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}

              {/* underline */}
              <span
                className={`
                  absolute -bottom-1 left-0 h-[2px] bg-indigo-400
                  transition-all duration-300
                  ${active === section ? "w-full" : "w-0"}
                `}
              />
            </button>
          ))}
        </div>

        {/* Resume */}
        <a
          href="/resume.pdf"
          className="
            cursor-pointer
            border border-indigo-400 text-indigo-400
            px-4 py-2 rounded-md
            transition-all duration-300
            hover:bg-indigo-400 hover:text-black
          "
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
