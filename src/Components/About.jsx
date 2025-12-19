import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function About() {
  useEffect(() => {
    gsap.fromTo(
      ".about-fade",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      className="about-section relative w-full bg-[#040813] text-gray-300 py-32"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-20">
          <h2 className="text-4xl font-semibold text-gray-200">About Me</h2>
          <div className="mt-3 h-[3px] w-20 bg-gradient-to-r from-indigo-400 to-fuchsia-500 rounded-full"></div>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Narrative */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="about-fade">
              I’m a{" "}
              <span className="text-gray-200 font-medium">
                MERN stack developer
              </span>{" "}
              who enjoys building complete web applications — from crafting
              clean, intuitive user interfaces to developing scalable backend
              APIs.
            </p>

            <p className="about-fade">
              I like working across the stack where frontend design meets
              backend logic. My focus is on writing{" "}
              <span className="text-gray-200">
                maintainable, production-ready code
              </span>{" "}
              and building features that solve real problems, not just look good
              on the surface.
            </p>

            <p className="about-fade">
              Currently, I work primarily with{" "}
              <span className="text-gray-200">
                React, Node.js, Express, and MongoDB
              </span>
              , while continuously improving my understanding of application
              architecture, performance, and real-world product development.
            </p>
          </div>

          {/* Right: What I bring */}
          <div className="space-y-6">
            <h3 className="about-fade text-2xl font-semibold text-gray-200 mb-6">
              What I bring to the table
            </h3>

            <div className="space-y-4">
              {[
                {
                  title: "Clean & Scalable Code",
                  desc: "Code that is easy to read, maintain, and scale as products grow.",
                },
                {
                  title: "Full-Stack Perspective",
                  desc: "Comfortable thinking across frontend, backend, APIs, and data flow.",
                },
                {
                  title: "User-First Development",
                  desc: "I prioritize usability, clarity, and intuitive experiences.",
                },
                {
                  title: "Attention to Detail",
                  desc: "From spacing and typography to micro-interactions that matter.",
                },
                {
                  title: "Growth-Oriented Mindset",
                  desc: "Constantly learning, improving fundamentals, and refining practices.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
                    about-fade
                    rounded-xl
                    border border-white/10
                    bg-white/5
                    p-5
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-indigo-400/40
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]
                  "
                >
                  <h4 className="text-gray-200 font-medium">{item.title}</h4>
                  <p className="text-sm text-gray-400 mt-1 leading-relaxed">
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
