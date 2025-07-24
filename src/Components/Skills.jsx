import React, { useState } from 'react'
import SkillsCard from '../Cards/SkillsCard'
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase
} from 'react-icons/fa'
import { SiTailwindcss, SiExpress, SiMongodb, SiGreensock, SiCplusplus } from 'react-icons/si'
import { GoTerminal } from 'react-icons/go'

function Skills() {
  const [status2, setStatus2] = useState("Done");
  const skillsData = [
    {
      title: "HTML",
      info: "Markup language used to create website structure",
      status: "Done",
      snippet: "<div>Hello World</div>",
      icon: <FaHtml5 size={28} className="text-orange-500" />
      
    },
    {
      title: "CSS",
      info: "Used to style HTML elements and layouts",
      status: "Done",
      snippet: "body { background-color: #fff; }",
      icon: <FaCss3 size={28} className="text-blue-500" />
    },
    {
      title: "JavaScript",
      info: "Client-side scripting language for web interactivity",
      status: "Done",
      snippet: "console.log('Hello, World!');",
      icon: <FaJs size={28} className="text-yellow-400" />
    },
    {
      title: "React",
      info: "JavaScript library for building user interfaces",
      status: "Done",
      snippet: "const [count, setCount] = useState(0);",
      icon: <FaReact size={28} className="text-[#61DBFB] animate-spin-slow" />
    },
    {
      title: "Tailwind CSS",
      info: "Utility-first CSS framework for faster styling",
      status: "Done",
      snippet: "className='bg-blue-500 text-white p-4'",
      icon: <SiTailwindcss size={28} className="text-sky-400" />
    },
    {
      title: "GSAP",
      info: "Animation library for smooth UI transitions",
      status: "Done",
      snippet: "gsap.from('.box', { opacity: 0, y: -100 });",
      icon: <SiGreensock size={28} className="text-green-500" />
    },
    {
      title: "Node.js",
      info: "Runtime to run JS on the server-side",
      status: "Practicing",
      snippet: "const http = require('http');",
      icon: <FaNodeJs size={28} className="text-green-600" />
    },
    {
      title: "Express.js",
      info: "Web framework for Node.js backend APIs",
      status: "Practicing",
      snippet: "app.get('/', (req, res) => res.send('Hello'));",
      icon: <SiExpress size={28} className="text-gray-200" />
    },
    {
      title: "MongoDB",
      info: "NoSQL database used for flexible document storage",
      status: "Practicing",
      snippet: "db.users.find({ name: 'Akash' })",
      icon: <SiMongodb size={28} className="text-green-400" />
    },
    {
      title: "Git & GitHub",
      info: "Version control system to track code changes",
      status: "Done",
      snippet: "git commit -m 'Initial commit'",
      icon: <FaGitAlt size={28} className="text-orange-400" />
    },
    {
      title: "C++",
      info: "Language used for DSA and competitive programming",
      status: "Done",
      snippet: 'cout << "Hello World" << endl;',
      icon: <SiCplusplus size={28} className="text-blue-400" />
    }
  ];

  return (
    <>
      <div className='w-full min-h-screen bg-[#030712] py-10'>

        {/* Header */}
        <div className='text-center relative mb-10 text-white font-bold text-4xl'>
          Technical Expertise
          <div className='h-1 w-[20%] bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-2 rounded-full'></div>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center px-5'>
          {skillsData.map((skill, index) => (
            <SkillsCard
              key={index}
              title={skill.title}
              info={skill.info}
              status={skill.status}
              snippet={skill.snippet}
              icon={skill.icon}
              color={
                skill.status === "Done"
                  ? "#4caf50"
                  : skill.status === "Practicing"
                    ? "#ff9800"
                    : "#f44336"
              }
              status2={status2}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills;
