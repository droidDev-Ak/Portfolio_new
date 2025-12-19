import React from "react";

const experiences = [
  {
    company: "Meelance",
    role: "Web Developer Intern",
    duration: "2024",
    description:
      "Worked on real-world web development tasks with a focus on responsive UI, clean code, and product-level implementation.",
    points: [
      "Built and styled UI components using HTML, CSS, and JavaScript",
      "Worked extensively with React for component-based development",
      "Collaborated with team members to fix bugs and improve UX",
      "Gained hands-on experience working on a live production project",
    ],
    status: "Completed",
  },
  {
    company: "Looking for New Opportunities",
    role: "MERN Stack Developer",
    duration: "Present",
    description:
      "Currently seeking internship or project-based opportunities to apply my MERN stack skills and work on meaningful products.",
    points: [
      "Actively applying for full-stack / backend roles",
      "Building personal projects while improving system design basics",
      "Open to internships, freelance work, and startup collaborations",
    ],
    status: "Ongoing",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full bg-[#020617] text-gray-300 py-32 relative"
    >
      {/* Header */}
       
      <div className="max-w-6xl mx-auto px-6 mb-20 text-center">
        <h2 className="text-4xl font-semibold text-gray-200">Experience</h2>
        <div className="mt-3 h-[3px] w-20 bg-gradient-to-r from-indigo-400 to-fuchsia-500 rounded-full mx-auto"></div>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
     
          My professional journey so far and what I’m currently aiming for.
        </p>
      </div>

      {/* Timeline wrapper */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-indigo-400/50 via-purple-500/30 to-transparent -translate-x-1/2"></div>

        <div className="space-y-24">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative flex w-full">
                {/* Left side */}
                {isLeft && (
                  <div className="w-1/2 pr-12 flex justify-end">
                    <ExperienceCard exp={exp} />
                  </div>
                )}

                {/* Center dot */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.9)]"></div>
                </div>

                {/* Right side */}
                {!isLeft && (
                  <div className="w-1/2 pl-12 ml-auto">
                    <ExperienceCard exp={exp} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp }) {
  return (
    <div
      className="
        relative rounded-2xl
        border border-white/10
        bg-[#0f172a]/80
        backdrop-blur-lg
        p-8
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-[0_25px_70px_rgba(0,0,0,0.6)]
        hover:border-indigo-400/40
      "
    >
      {/* Glass glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition duration-300" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-100">
              {exp.company}
            </h3>
            <p className="text-sm text-indigo-400 mt-1">{exp.role}</p>
          </div>
          <span className="text-sm text-gray-400 whitespace-nowrap">
            {exp.duration}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-400 leading-relaxed">{exp.description}</p>

        {/* Bullet points */}
        <ul className="mt-5 space-y-2 text-sm text-gray-300 list-disc list-inside">
          {exp.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        {/* Status */}
        <div className="mt-6">
          <span
            className={`
              inline-block text-xs px-3 py-1 rounded-full border
              ${
                exp.status === "Completed"
                  ? "border-green-400/30 text-green-300 bg-green-400/10"
                  : "border-yellow-400/30 text-yellow-300 bg-yellow-400/10"
              }
            `}
          >
            {exp.status}
          </span>
        </div>
      </div>
    </div>
  );
}
