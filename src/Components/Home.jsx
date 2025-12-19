import { useEffect } from "react";
import { gsap } from "gsap";

import FloatingKeywords from "./Particle.jsx";
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".intro",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        delay: 0.4,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      ".profile-img",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.9,
        delay: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#040813] text-gray-300 overflow-hidden"
    >
      {/* Floating background keywords */}
      <FloatingKeywords />

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 flex items-start justify-between gap-16">
        {/* LEFT — TEXT */}
        <div className="intro max-w-xl">
          <p className="text-indigo-400 text-sm mb-5">Hi, my name is</p>

          <h1 className="text-[3.8rem] font-extrabold text-gray-200 leading-tight">
            Akash Kumar.
          </h1>

          <h2 className="text-[3.5rem] font-extrabold text-gray-500 leading-tight mt-2">
            I build things for the web.
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            I’m a frontend developer focused on building clean, scalable, and
            user-friendly interfaces using React, modern CSS, and
            animation-driven UI patterns.
          </p>

          <div className="mt-10">
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-block border border-indigo-400 text-indigo-400 px-6 py-3 rounded-md
              hover:bg-indigo-400 hover:text-black transition-all duration-300"
            >
              Check out my work
            </button>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="profile-img hidden lg:flex items-center justify-center">
          <div className="relative">
            {/* glow frame */}
            <div
              className="absolute -inset-2 rounded-full 
bg-gradient-to-tr from-indigo-500 to-fuchsia-600 
blur-2xl opacity-25 rotate-6 -translate-x-40"
            ></div>

            <img
              src="/img.png"
              alt="Akash Kumar"
              className="relative w-64 h-64 rounded-full object-cover
border border-white/10 shadow-xl 
-translate-x-40 saturate-90 brightness-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
