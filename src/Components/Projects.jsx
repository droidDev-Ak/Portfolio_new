import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Authentication ToDo App",
    description:
      "A full-stack to-do application featuring secure user authentication, protected routes, and full CRUD functionality. Designed with a modular backend and a clean, responsive interface.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/droidDev-Ak/frontend-assignment-task.git",
    live: "https://auth-todo.vercel.app",
    image: "https://static.vecteezy.com/system/resources/previews/012/863/765/original/user-authentication-pixel-perfect-gradient-linear-icon-identity-verification-personal-confirmation-thin-line-color-symbol-modern-style-pictogram-isolated-outline-drawing-vector.jpg",
  },
  {
    title: "Calculator",
    description:
      "A high-performance responsive calculator with integrated swipe gestures, scientific operations, and smooth mobile-first interactions built with vanilla web technologies.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/droidDev-Ak/Calculator.git",
    live: "https://calci-pearl.vercel.app/",
    image: "https://tse3.mm.bing.net/th/id/OIP.UlASLuVgzukLPXz6LZFpXgAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Weather App",
    description:
      "Real-time weather data visualization using OpenWeatherMap API. Features location-based search and a dynamic UI that adapts to current atmospheric conditions.",
    tech: ["HTML", "CSS", "JavaScript", "REST API"],
    github: "https://github.com/droidDev-Ak/Weather-app.git",
    live: "https://weather-app-six-fawn-46.vercel.app/",
    image: "https://cdn-icons-png.flaticon.com/512/4851/4851776.png",
  },
  {
    title: "YouTube Downloader",
    description:
      "A backend-focused engine for processing and downloading YouTube media using server-side streams and secure API handling.",
    tech: ["Node.js", "Express", "Streams"],
    github: "https://github.com/droidDev-Ak/snapTube.git",
    live: "#",
    status: "Deploying",
    image: "https://cdn.icon-icons.com/icons2/1508/PNG/512/allvideodownloader_104443.png",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#020617] text-slate-400 py-32 overflow-hidden">

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />


      <div id="projects" className="absolute -top-24 h-1 w-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-10">
        

        <div className="flex items-center gap-6 mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-white whitespace-nowrap">
            <span className="text-indigo-400 font-mono text-xl mr-2">04.</span> 
            Featured Work
          </h2>
          <div className="h-[1px] w-full max-w-md bg-slate-800"></div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-lg bg-slate-900/20 border border-slate-800/50 overflow-hidden transition-all duration-500 hover:border-indigo-500/30"
            >

              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-8 grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500" />
                
                {project.status && (
                  <div className="absolute top-4 right-4 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-tighter rounded border border-yellow-500/20 text-yellow-500/80 bg-yellow-500/5 backdrop-blur-md">
                    {project.status}
                  </div>
                )}
              </div>


              <div className="p-8 pt-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-slate-100 tracking-tight group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-slate-500">
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="View Source">
                      <FaGithub size={20} />
                    </a>
                    {/* {project.live && project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="hover:text-white transition-colors" title="Live Demo">
                        <FaExternalLinkAlt size={18} />
                      </a>
                    )} */}
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>


                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono text-indigo-400/80 bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>


              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-indigo-500 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>


        <div className="mt-20 text-center opacity-30">
           <p className="text-xs font-mono uppercase tracking-[0.4em]">
             // view more on github
           </p>
        </div>
      </div>
    </section>
  );
}