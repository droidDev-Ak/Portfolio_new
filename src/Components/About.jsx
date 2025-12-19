import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    gsap.fromTo(
      ".about-fade",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="about-section relative w-full bg-[#020617] text-slate-400 py-32 overflow-hidden">

      <div className="absolute top-1/4 -right-20 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />


      <div id="about" className="absolute -top-24 h-1 w-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-10">
        

        <div className="flex items-center gap-6 mb-16 about-fade">
          <h2 className="text-3xl md:text-4xl font-black text-white whitespace-nowrap">
            <span className="text-indigo-400 font-mono text-xl mr-2">01.</span> 
            About Me
          </h2>
          <div className="h-[1px] w-full max-w-md bg-slate-800"></div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          

          <div className="lg:col-span-7 space-y-6 text-base md:text-lg leading-relaxed">
            <p className="about-fade">
              Hello! I'm Akash, and I find immense joy in building things that live on the internet. 
              My journey into web development started with a curiosity for how data moves behind the scenes, 
              which led me to master the <span className="text-indigo-300">MERN stack</span>.
            </p>

            <p className="about-fade">
              Fast-forward to today, and my primary focus is on engineering <span className="text-slate-200">exceptional digital experiences</span>. 
              I specialize in that sweet spot where clean, intuitive frontend design meets robust, 
              scalable backend logic.
            </p>

            <p className="about-fade">
              I’m committed to writing <span className="text-slate-200">maintainable, production-ready code</span> 
              and solving real-world problems. I don't just build features; I build solutions that prioritize 
              performance and user intent.
            </p>

            <div className="about-fade pt-4">
              <p className="text-sm font-mono text-indigo-400 mb-4 uppercase tracking-widest">
                // Current Tech Stack
              </p>
              <ul className="grid grid-cols-2 gap-2 text-sm font-mono text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-indigo-500 text-xs">▹</span> React.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-500 text-xs">▹</span> Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-500 text-xs">▹</span> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-500 text-xs">▹</span> Express
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-500 text-xs">▹</span> MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-indigo-500 text-xs">▹</span> Tailwind CSS
                </li>
              </ul>
            </div>
          </div>


          <div className="lg:col-span-5 space-y-4">

            <p className="about-fade text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">
              Core Principles
            </p>

            <div className="space-y-3">
              {[
                {
                  title: "User-First Logic",
                  desc: "Prioritizing usability and intuitive flow in every interaction.",
                },
                {
                  title: "Full-Stack Mindset",
                  desc: "Thinking across the entire architecture, from DB to UI.",
                },
                {
                  title: "Clean Architecture",
                  desc: "Writing modular, scalable, and easy-to-read codebases.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    about-fade
                    group
                    rounded-lg
                    border border-slate-800/50
                    bg-slate-900/20
                    p-6
                    hover:bg-slate-800/30
                    hover:border-indigo-500/30
                    transition-all duration-300
                  "
                >
                  <h4 className="text-slate-200 font-bold text-sm tracking-tight group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}