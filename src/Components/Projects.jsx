import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: "ToDo App",
    description: "A sleek and simple task management app to add, delete, and track daily tasks. Built for productivity.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/droidDev/todo-app",
    live: "https://todo-sooty-two-77.vercel.app/"
  },
  {
    title: "Calculator",
    description: "A fully functional calculator with swipe gestures, scientific functions, and mobile responsiveness.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/droidDev/calculator-app",
    live: "https://calci-pearl.vercel.app/"
  },
  {
    title: "GoldKart",
    description: "A premium e-commerce platform for gold jewelry with doorstep delivery, secure payment, and exchange offers.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/droidDev/goldkart",
    live: "https://goldkart.vercel.app"
  },
  {
    title: "Music Player",
    description: "A feature-rich music player app with playlist management, search, history, shuffle, repeat, and graph-based recommendations.",
    tech: ["C++", "File Handling", "STL", "Graph Algorithms"],
    github: "https://github.com/droidDev/music-player",
    live: ""
  },
  {
    title: "Portfolio Website",
    description: "A fully responsive personal portfolio built with React, TailwindCSS and Framer Motion.",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/droidDev/portfolio",
    live: "https://yourportfolio.vercel.app"
  },
  {
    title: "Weather App",
    description: "Real-time weather updates using OpenWeatherMap API with stylish UI and search feature.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/droidDev/weather-app",
    live: "https://weather-app-six-fawn-46.vercel.app/"
  }
];


export default function Projects() {
  return (
    <div className="p-8 bg-[#0f172a] text-white min-h-screen">
       <div className='text-center relative mb-10 text-white font-bold text-4xl'>
          Projects
          <div className='h-1 w-[10%] bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-2 rounded-full'></div>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1e293b] rounded-2xl shadow-lg p-6 hover:scale-[1.02] transition duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
            <p className="text-sm mt-2 text-gray-300">{project.description}</p>

            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-blue-900/60 px-2 py-1 rounded text-xs">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex mt-4 gap-4 text-blue-400">
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub className="hover:text-white text-lg" />
              </a>
              <a href={project.live} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt className="hover:text-white text-lg" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
