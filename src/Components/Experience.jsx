import React from "react";

const experiences = [
  {
    company: "Meelance",
    role: "Web Developer Intern",
    duration: "Jan 2024 — June 2024",
    description: "Built and styled UI components using HTML, CSS, and JavaScript with a focus on responsive design.",
    points: [
      "Worked extensively with React for component-based development",
      "Collaborated with team members to fix bugs and improve UX",
      "Gained hands-on experience working on a live production project",
    ],
    status: "Completed",
  },
  {
    company: "Open to Work",
    role: "",
    duration: "Present",
    description: "",
    points: [
      "Open to internships, freelance work, and startup collaborations",
      "Crafting scalable backend APIs using Node.js and MongoDB",
    ],
    status: "Ongoing",
  },
];

export default function Experience() {
  return (
    <section className="relative w-full bg-[#020617] text-slate-400 py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* 🔑 NAVBAR ANCHOR */}
      <div id="experience" className="absolute -top-24 h-1 w-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-10">
        
        {/* Section Header - Consistent with previous sections */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white whitespace-nowrap">
            <span className="text-indigo-400 font-mono text-xl mr-2">03.</span> 
            Experience
          </h2>
          <div className="h-[1px] w-full max-w-xs bg-slate-800"></div>
        </div>

        {/* Professional List Layout */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 group">
              {/* Vertical accent line per item */}
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-800 group-hover:bg-indigo-500 transition-colors duration-500"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors">
                    {exp.role} <span className="text-indigo-400">@ {exp.company}</span>
                  </h3>
                  <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-widest">
                    {exp.duration}
                  </p>
                </div>
                
                {/* Status Badge - Subtle and Small */}
                <div className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase tracking-tighter self-start md:self-auto
                  ${exp.status === "Completed" 
                    ? "border-emerald-500/20 text-emerald-500/60 bg-emerald-500/5" 
                    : "border-indigo-500/20 text-indigo-400 bg-indigo-500/5"}`}>
                  {exp.status}
                </div>
              </div>

              <div className="mt-6 max-w-2xl">
                <p className="text-base text-slate-400 leading-relaxed mb-4">
                  {exp.description}
                </p>
                
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                      <span className="text-indigo-500 mt-1.5 text-[10px]">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Footer philosophy */}
        <div className="mt-20 opacity-40">
           <p className="text-xs font-mono uppercase tracking-[0.4em]">
             // building better products daily
           </p>
        </div>
      </div>
    </section>
  );
}