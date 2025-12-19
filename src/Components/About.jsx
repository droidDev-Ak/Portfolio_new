import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function WhyWorkWithMe() {
  useEffect(() => {
    gsap.fromTo(
      ".why-card",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".why-section",
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section className="why-section relative w-full h-full bg-[#040813] text-gray-300 py-32">
      {/* Full-width background assurance */}
      <div className="absolute inset-0 bg-[#040813]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section label */}
        {/* Section Heading */}
        {/* Section Heading */}
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-semibold text-gray-200 font-mono">
            About Me
          </h2>

          <div className="mt-3 h-[3px] w-20 bg-gradient-to-r from-indigo-400 to-fuchsia-500 rounded-full"></div>
        </div>

        <div className=" space-y-6 text-gray-400 leading-relaxed text-lg">
          <p>
            I’m a{" "}
            <span className="text-gray-200 font-medium">
              MERN stack developer
            </span>
            who enjoys building complete web applications—from designing clean,
            intuitive user interfaces to developing scalable and reliable
            backend APIs.
          </p>

          <p>
            I like working across the stack, where frontend design meets backend
            logic. My focus is on writing{" "}
            <span className="text-gray-200">maintainable code</span>, creating
            smooth user experiences, and building features that solve real
            problems instead of just adding visual polish.
          </p>

          <p>
            Currently, I’m strengthening my skills with{" "}
            <span className="text-gray-200">
              React, Node.js, Express, and MongoDB
            </span>
            , while continuously improving my understanding of performance,
            application structure, and real-world product development.
          </p>
          <span></span>
        </div>

        <h2 className="text-3xl font-semibold text-gray-200 mb-12">
          What I bring on the table
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            className="why-card bg-white/5 border border-white/10 rounded-xl p-6
            transition-all duration-300 hover:-translate-y-1
            hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <h3 className="text-lg font-medium text-gray-200 mb-2">
              Clean & Scalable Code
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              I write frontend code that is easy to understand, maintain, and
              scale—focusing on clarity over cleverness.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="why-card bg-white/5 border border-white/10 rounded-xl p-6
            transition-all duration-300 hover:-translate-y-1
            hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <h3 className="text-lg font-medium text-gray-200 mb-2">
              User-Centric Thinking
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              I design and build interfaces with real users in mind—prioritizing
              usability, accessibility, and intuitive interactions.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="why-card bg-white/5 border border-white/10 rounded-xl p-6
            transition-all duration-300 hover:-translate-y-1
            hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <h3 className="text-lg font-medium text-gray-200 mb-2">
              Modern Frontend Stack
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Comfortable working with React, modern CSS, animations, and
              component-driven architectures.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="why-card bg-white/5 border border-white/10 rounded-xl p-6
            transition-all duration-300 hover:-translate-y-1
            hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <h3 className="text-lg font-medium text-gray-200 mb-2">
              Attention to Detail
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              From spacing and typography to micro-interactions, I care about
              the small details that elevate the overall experience.
            </p>
          </div>

          {/* Card 5 */}
          <div
            className="why-card bg-white/5 border border-white/10 rounded-xl p-6
            transition-all duration-300 hover:-translate-y-1
            hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <h3 className="text-lg font-medium text-gray-200 mb-2">
              Growth-Oriented Mindset
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              I actively improve my fundamentals, learn from feedback, and stay
              up-to-date with evolving frontend best practices.
            </p>
          </div>

          {/* Card 6 */}
          <div
            className="why-card bg-white/5 border border-white/10 rounded-xl p-6
            transition-all duration-300 hover:-translate-y-1
            hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <h3 className="text-lg font-medium text-gray-200 mb-2">
              Product-Focused Approach
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              I think beyond just UI—considering performance, scalability, and
              how features support real business and user goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
