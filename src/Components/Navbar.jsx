import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import MyPdf from "../assets/Resume.pdf";

const sections = ["about", "skills", "experience", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for glass effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Staggered GSAP Entrance
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".nav-logo", { opacity: 0, x: -20, duration: 0.8, ease: "power4.out" })
      .from(".nav-item", { opacity: 0, y: -20, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.4")
      .from(".nav-resume", { opacity: 0, scale: 0.8, duration: 0.5, ease: "back.out(1.7)" }, "-=0.3");
  });

  const scrollToSection = (id) => {
    const anchor = document.getElementById(id);
    anchor?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 
      ${isScrolled ? "h-16 bg-[#020617]/70 backdrop-blur-md border-b border-white/5 shadow-2xl" : "h-24 bg-transparent"}`}>
      
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-8 md:px-12">
        
        {/* LOGO */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="nav-logo cursor-pointer group"
        >
          <div className="text-xl font-black tracking-tighter text-white flex items-center">
            <span className="text-indigo-500 mr-0.5 group-hover:rotate-12 transition-transform">A</span>
            kash.
          </div>
        </div>

        {/* NAVIGATION LINKS */}
        <div className="hidden md:flex items-center gap-12">
          <ul className="flex items-center gap-10 list-none">
            {sections.map((section, index) => (
              <li key={section} className="nav-item">
                <button
                  onClick={() => scrollToSection(section)}
                  className="relative group py-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-indigo-400 font-mono text-[10px]">0{index + 1}.</span>
                    <span className={`text-[13px] font-medium tracking-wide uppercase transition-colors
                      ${active === section ? "text-white" : "text-slate-400 group-hover:text-indigo-300"}`}>
                      {section}
                    </span>
                  </div>
                  
                  {/* Subtle Underline Indicator */}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-indigo-500 transition-all duration-500
                    ${active === section ? "w-full" : "w-0 group-hover:w-1/2"}`} 
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* RESUME BUTTON */}
          <div className="nav-resume">
            <a
              href={MyPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 border border-indigo-500/40 text-indigo-400 font-mono text-xs tracking-widest uppercase rounded-sm hover:bg-indigo-500/10 hover:border-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-500/5"
            >
              Resume
            </a>
          </div>
        </div>

        {/* MOBILE TRIGGER */}
        <div className="md:hidden flex items-center">
           <div className="w-8 h-[1px] bg-indigo-400 after:content-[''] after:block after:w-5 after:h-[1px] after:bg-indigo-400 after:mt-2 after:ml-auto"></div>
        </div>

      </div>
    </nav>
  );
}