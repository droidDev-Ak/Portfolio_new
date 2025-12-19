import React, { useEffect, useRef, useState } from "react";
import { GoDotFill } from "react-icons/go";

function SkillsCard({ title, info, status, snippet, color, icon }) {
  const [isHovering, setIsHovering] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const typingIntervalRef = useRef(null);
  const hoverDelayRef = useRef(null);

  useEffect(() => {
    if (!isHovering) {
      clearTimeout(hoverDelayRef.current);
      clearInterval(typingIntervalRef.current);
      setDisplayedText("");
      return;
    }

    hoverDelayRef.current = setTimeout(() => {
      let index = 0;
      const speed = 30;

      typingIntervalRef.current = setInterval(() => {
        if (index < snippet.length) {
          setDisplayedText((prev) => prev + snippet[index]);
          index++;
        } else {
          clearInterval(typingIntervalRef.current);
        }
      }, speed);
    }, 180);

    return () => {
      clearTimeout(hoverDelayRef.current);
      clearInterval(typingIntervalRef.current);
    };
  }, [isHovering, snippet]);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="
        relative w-full rounded-2xl
        border border-white/10
        bg-[#0f172a]/70
        backdrop-blur-md
        p-5
        shadow-[0_8px_30px_rgba(0,0,0,0.35)]
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-[0_16px_50px_rgba(0,0,0,0.6)]
        hover:border-indigo-400/40
        hover:bg-[#0f172a]/50
        hover:backdrop-blur-xl
      "
    >
      {/* subtle glass glow */}
      <div
        className={`
          pointer-events-none absolute inset-0 rounded-2xl
          transition-opacity duration-300
          ${
            isHovering
              ? "opacity-100"
              : "opacity-0"
          }
          bg-gradient-to-tr from-indigo-500/10 to-purple-500/10
        `}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start gap-4 border-b border-white/10 pb-3 mb-4">
          <div className="p-3 rounded-lg bg-black/30 border border-white/10">
            {icon}
          </div>

          <div className="flex flex-col">
            <h3 className="text-white text-lg font-semibold">
              {title}
            </h3>

            <div className="flex items-center text-xs mt-1">
              <GoDotFill className="mr-1" style={{ color }} />
              <span className="text-gray-400">{status}</span>
            </div>
          </div>
        </div>

        {/* Info */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {info}
        </p>

        {/* Fixed snippet slot (no height change) */}
        <div className="relative h-14">
          <div
            className={`
              absolute inset-0
              bg-[#020617]/80
              backdrop-blur-md
              text-indigo-400
              font-mono text-xs
              p-3
              rounded-lg
              border border-white/10
              shadow-inner
              transition-all duration-300 ease-out
              ${
                isHovering
                  ? "opacity-100 translate-y-0 "
                  : "opacity-0 translate-y-2"
              }
            `}
          >
            <span>{displayedText}</span>
            {isHovering && (
              <span className="ml-1 animate-pulse text-indigo-300">|</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsCard;
