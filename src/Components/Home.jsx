import { useEffect } from "react";
import { gsap } from "gsap";
import FloatingKeywords from "./Particle.jsx";
import SocialSidebar from "../Cards/SocialSidebar.jsx";
import MyPdf from "../assets/Resume.pdf";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".intro",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
    );
    gsap.fromTo(
      ".profile-img",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.2, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#020617] flex flex-col justify-center overflow-hidden"
    >
      <FloatingKeywords />
      <SocialSidebar />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16">
          <div className="intro w-full lg:max-w-2xl lg:pt-10">
            <p className="text-indigo-400 font-mono text-[13px] tracking-[0.3em] mb-5 uppercase opacity-90">
              // Web Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
              Akash{" "}
              <span className="text-transparent bg-clip-text bg-indigo-400 ">
                Kumar.
              </span>
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-500 mt-2 tracking-tight">
              Turning complexity into{" "}
              <span className="text-slate-200">clarity.</span>
            </h2>

            <div className="mt-8 border-l-[1px] border-slate-800 pl-8 max-w-lg">
              <p className="text-base md:text-lg text-slate-400 italic font-light leading-relaxed">
                I’m a developer dedicated to building refined, high-performance
                interfaces that make the web a better place to navigate
              </p>
            </div>

            <div className="mt-12 flex items-center gap-10">
              <button
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3.5 border border-indigo-500/50 text-indigo-400 text-sm font-bold rounded-sm hover:bg-indigo-500/5 transition-all duration-300"
              >
                Explore Work
              </button>

              <a
                href={MyPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 border border-indigo-500/40 text-indigo-400 font-mono text-xs tracking-widest uppercase rounded-sm hover:bg-indigo-500/10 hover:border-indigo-500 transition-all duration-300 shadow-lg shadow-indigo-500/5"
              >
                View Resume
              </a>
            </div>
          </div>

          <div className="profile-img hidden lg:flex items-center justify-center lg:pt-16">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-6 bg-indigo-500/20 blur-3xl rounded-full group-hover:bg-indigo-500/40 group-hover:scale-110 transition-all duration-700"></div>

              <div className="relative aspect-square w-64 xl:w-72 rounded-full border border-white/10 p-2 bg-slate-900/40 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(79,70,229,0.3)]">
                <img
                  src="/img.png"
                  alt="Akash Kumar"
                  className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />

                <div className="absolute inset-0 rounded-full bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-[22px] h-[35px] border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-indigo-400 rounded-full animate-scroll-dot"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
