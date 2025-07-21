import React from "react";
import { Code, Database, Server } from "lucide-react";

const elements = [
  { typ: "text", content: "react" },
  { typ: "text", content: "javascript" },
  { typ: "text", content: "typescript" },
  { typ: "icon", content: "Code" },
  { typ: "icon", content: "Database" },
  { typ: "icon", content: "Server" },
  { typ: "symbol", content: "{}" },
  { typ: "symbol", content: "</>" },
  { typ: "symbol", content: "[]" },
  { typ: "symbol", content: "()=>" },
  { typ: "symbol", content: ";" },
  { typ: "symbol", content: "const" },
  { typ: "symbol", content: "function" },
  { typ: "text", content: "css" },
  { typ: "text", content: "html" },
  { typ: "text", content: "api" },
];

const getRandom = (min, max) => Math.random() * (max - min) + min;

const FloatingKeywords = () => {
  const renderElement = (element, idx) => {
    const iconProps = {
      size: getRandom(20, 32),
      className: "text-sky-400",
    };

    switch (element.typ) {
      case "icon":
        if (element.content === "Code") return <Code key={idx} {...iconProps} />;
        if (element.content === "Database") return <Database key={idx} {...iconProps} />;
        if (element.content === "Server") return <Server key={idx} {...iconProps} />;
        break;
      case "symbol":
        return (
          <span key={idx} className="text-emerald-400 font-mono font-bold">
            {element.content}
          </span>
        );
      case "text":
        return (
          <span key={idx} className="text-sky-400 font-mono">
            {element.content}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#040813]">
      {elements.map((element, idx) => {

        const left = getRandom(0, 100);
        const top = getRandom(0, 100);


        const rotationStart = getRandom(-45, 45);
        const rotationEnd = getRandom(-180, 180);


        const duration = getRandom(12, 25);


        const delay = getRandom(0, 15);

        // Random font size with more variety
        const fontSize = getRandom(14, 28);

        // Random opacity with better visibility range
        const opacity = getRandom(0.2, 0.6);

        // Larger movement distances for full screen traversal
        const moveX = getRandom(-80, 80);
        const moveY = getRandom(-80, 80);
        
        // Secondary movement for more complex paths
        const moveX2 = getRandom(-60, 60);
        const moveY2 = getRandom(-60, 60);

        // Random scale changes for depth effect
        const scaleStart = getRandom(0.7, 1);
        const scaleEnd = getRandom(0.8, 1.3);

        const style = {
          left: `${left}%`,
          top: `${top}%`,
          fontSize: `${fontSize}px`,
          opacity: opacity,
          transform: `rotate(${rotationStart}deg) scale(${scaleStart})`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          "--move-x": `${moveX}vw`,
          "--move-y": `${moveY}vh`,
          "--move-x2": `${moveX2}vw`,
          "--move-y2": `${moveY2}vh`,
          "--rotation-start": `${rotationStart}deg`,
          "--rotation-end": `${rotationEnd}deg`,
          "--scale-start": scaleStart,
          "--scale-end": scaleEnd,
        }

        return (
          <div
            key={idx}
            className="absolute whitespace-nowrap animate-randomFloat select-none pointer-events-none"
            style={style}
          >
            {renderElement(element, idx)}
          </div>
        );
      })}
    </div>
  );
};

export default FloatingKeywords;