import { useState } from "react";
import SkillsCard from "../Cards/SkillsCard";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiGreensock,
  SiCplusplus,
} from "react-icons/si";

function Skills() {
  const [status2] = useState("Done");

  const skillsData = [
    {
      title: "HTML",
      info: "Markup language used to create website structure",
      status: "Done",
      snippet: "<div>Hello World</div>",
      icon: <FaHtml5 size={26} className="text-orange-500" />,
    },
    {
      title: "CSS",
      info: "Used to style layouts and UI components",
      status: "Done",
      snippet: "body { background-color: #fff; }",
      icon: <FaCss3 size={26} className="text-blue-500" />,
    },
    {
      title: "JavaScript",
      info: "Core language for web interactivity",
      status: "Done",
      snippet: "console.log('Hello, World!');",
      icon: <FaJs size={26} className="text-yellow-400" />,
    },
    {
      title: "React",
      info: "Library for building component-driven UIs",
      status: "Done",
      snippet: "const [count, setCount] = useState(0);",
      icon: <FaReact size={26} className="text-[#61DBFB]" />,
    },
    {
      title: "Tailwind CSS",
      info: "Utility-first CSS framework",
      status: "Done",
      snippet: "className='px-4 py-2 bg-indigo-500'",
      icon: <SiTailwindcss size={26} className="text-sky-400" />,
    },
    {
      title: "GSAP",
      info: "Animation library for smooth UI motion",
      status: "Done",
      snippet: "gsap.from('.el', { y: 50 })",
      icon: <SiGreensock size={26} className="text-green-500" />,
    },
    {
      title: "Node.js",
      info: "JavaScript runtime for backend logic",
      status: "Practicing",
      snippet: "const server = http.createServer()",
      icon: <FaNodeJs size={26} className="text-green-600" />,
    },
    {
      title: "Express.js",
      info: "Backend framework for APIs",
      status: "Practicing",
      snippet: "app.post('/api', handler)",
      icon: <SiExpress size={26} className="text-gray-200" />,
    },
    {
      title: "MongoDB",
      info: "NoSQL database for applications",
      status: "Practicing",
      snippet: "User.find({})",
      icon: <SiMongodb size={26} className="text-green-400" />,
    },
    {
      title: "Git & GitHub",
      info: "Version control & collaboration",
      status: "Done",
      snippet: "git push origin main",
      icon: <FaGitAlt size={26} className="text-orange-400" />,
    },
    {
      title: "C++",
      info: "Used for DSA and problem solving",
      status: "Done",
      snippet: 'cout << "Hello";',
      icon: <SiCplusplus size={26} className="text-blue-400" />,
    },
  ];

  return (
    <section
      id="skills"
      className="w-full bg-[#030712] text-gray-300 py-32"
    >
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-4xl font-semibold text-gray-200">
          Technical Expertise
        </h2>
        <div className="mt-3 h-[2px] w-24 bg-indigo-400 rounded-full"></div>
      </div>

      {/* Masonry layout */}
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="
            columns-1
            sm:columns-2
            lg:columns-3
            gap-4
          "
        >
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="mb-4 break-inside-avoid"
            >
              <SkillsCard
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
