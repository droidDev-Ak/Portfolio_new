import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Authentication ToDo App",
    description:
      "A full-stack to-do application with user authentication, protected routes, and CRUD functionality. Built with a secure backend and modern UI.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/droidDev-Ak/frontend-assignment-task.git",
    live: "https://auth-todo.vercel.app",
    image:
      "https://static.vecteezy.com/system/resources/previews/012/863/765/original/user-authentication-pixel-perfect-gradient-linear-icon-identity-verification-personal-confirmation-thin-line-color-symbol-modern-style-pictogram-isolated-outline-drawing-vector.jpg",
  },
  {
    title: "Calculator",
    description:
      "A responsive calculator featuring swipe gestures, scientific operations, and smooth mobile-first interactions.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/droidDev-Ak/Calculator.git",
    live: "https://calci-pearl.vercel.app/",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.UlASLuVgzukLPXz6LZFpXgAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3file:///Users/apple/Downloads/image-removebg-preview%20(3).png",
  },
  {
    title: "Weather App",
    description:
      "A real-time weather application using OpenWeatherMap API with location search and a clean, modern UI.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/droidDev-Ak/Weather-app.git",
    live: "https://weather-app-six-fawn-46.vercel.app/",
    image: "https://cdn-icons-png.flaticon.com/512/4851/4851776.png",
  },
  {
    title: "YouTube Downloader",
    description:
      "A backend-focused application to download YouTube videos using server-side processing and API handling.",
    tech: ["Node.js", "Express", "Streams"],
    github: "https://github.com/droidDev-Ak/snapTube.git",
    live: "",
    status: "Currently Deploying",
    image:
      "https://cdn.icon-icons.com/icons2/1508/PNG/512/allvideodownloader_104443.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        w-full
        bg-[#030712]
        text-gray-300
        py-32
        z-10
        isolate
      "
    >
      {/* Header */}
      
      <div className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-4xl font-semibold text-gray-200">Projects</h2>
        <div className="mt-3 h-[3px] w-20 bg-gradient-to-r from-indigo-400 to-fuchsia-500 rounded-full mx-auto"></div>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Selected projects that reflect my focus on full-stack development,
          clean architecture, and real-world problem solving.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              group relative
              rounded-2xl
              border border-white/10
              bg-[#0f172a]/80
              backdrop-blur-lg
              overflow-hidden
              transition-all duration-300 ease-out
              hover:-translate-y-2
              hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)]
              hover:border-indigo-400/40
            "
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full h-full object-contain
                  transition-transform duration-500
                  group-hover:scale-110
                "
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent"></div>

              {/* Status badge */}
              {project.status && (
                <div className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-400/30">
                  {project.status}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="relative p-6 flex flex-col h-full">
              <h3 className="text-2xl font-semibold text-gray-100">
                {project.title}
              </h3>

              <p className="text-sm mt-3 text-gray-400 leading-relaxed">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="
                      text-xs font-mono
                      px-3 py-1
                      rounded-full
                      border border-white/10
                      bg-white/5
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 mt-6 text-gray-400">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-indigo-400 transition"
                >
                  <FaGithub />
                  <span className="text-sm">Code</span>
                </a>

                {/*
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-indigo-400 transition"
                >
                  <FaExternalLinkAlt />
                  <span className="text-sm">Live</span>
                </a>
                */}
              </div>
            </div>

            {/* Glass glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
