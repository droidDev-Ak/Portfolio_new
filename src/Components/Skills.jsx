import React from "react";
import { 
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaGitAlt, FaDatabase 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiGreensock, SiCplusplus 
} from "react-icons/si";

function Skills() {
  const skillsData = [
    { title: "React", icon: <FaReact className="text-[#61DAFB]" />, level: "Advanced" },
    { title: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, level: "Advanced" },
    { title: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: "Intermediate" },
    { title: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: "Intermediate" },
    { title: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: "Advanced" },
    { title: "GSAP", icon: <SiGreensock className="text-[#88CE02]" />, level: "Advanced" },
    { title: "Express.js", icon: <SiExpress className="text-white" />, level: "Intermediate" },
    { title: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: "Advanced" },
    { title: "CSS3", icon: <FaCss3 className="text-[#1572B6]" />, level: "Advanced" },
    { title: "REST APIs", icon: <FaDatabase className="text-[#4479A1]" />, level: "Practicing" },
    { title: "Git & GitHub", icon: <FaGitAlt className="text-[#F05032]" />, level: "Advanced" },
    { title: "C++ (DSA)", icon: <SiCplusplus className="text-[#00599C]" />, level: "Advanced" },
  ];

  return (
    <section className="relative w-full bg-[#020617] text-slate-300 py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div id="skills" className="absolute -top-24 h-1 w-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-10">
        <div className="flex items-center gap-6 mb-20">
          <h2 className="text-3xl md:text-4xl font-black text-white whitespace-nowrap">
            <span className="text-indigo-400 font-mono text-xl mr-2">02.</span> 
            Technical Expertise
          </h2>
          <div className="h-[1px] w-full max-w-md bg-slate-800"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillsData.map((skill, index) => (
            <div 
              key={index}
              className="group relative flex flex-col p-6 rounded-lg bg-slate-900/20 border border-slate-800/50 hover:border-indigo-500/40 hover:bg-slate-800/30 transition-all duration-500"
            >

              <div className="text-4xl grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 mb-4">
                {skill.icon}
              </div>

              <div>
                <h3 className="text-slate-200 font-bold tracking-tight text-sm uppercase group-hover:text-white transition-colors">
                  {skill.title}
                </h3>
                <p className="text-[10px] font-mono text-slate-500 mt-1 uppercase tracking-widest">
                  {skill.level}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-indigo-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">
            // constantly evolving my toolkit
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;