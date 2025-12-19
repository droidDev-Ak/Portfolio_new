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
      className: "text-sky-400/40",
    };

    switch (element.typ) {
      case "icon":
        if (element.content === "Code") return <Code key={idx} {...iconProps} />;
        if (element.content === "Database") return <Database key={idx} {...iconProps} />;
        if (element.content === "Server") return <Server key={idx} {...iconProps} />;
        return null;

      case "symbol":
        return (
          <span key={idx} className="text-emerald-400/40 font-mono font-bold">
            {element.content}
          </span>
        );

      case "text":
        return (
          <span key={idx} className="text-sky-400/40 font-mono">
            {element.content}
          </span>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {elements.map((element, idx) => {
        const style = {
          left: `${getRandom(0, 100)}%`,
          top: `${getRandom(0, 100)}%`,
          fontSize: `${getRandom(14, 28)}px`,
          opacity: getRandom(0.25, 0.6),
          transform: `rotate(${getRandom(-45, 45)}deg) scale(${getRandom(0.7, 1)})`,
          animationDuration: `${getRandom(12, 25)}s`,
          animationDelay: `${getRandom(0, 15)}s`,
          "--move-x": `${getRandom(-80, 80)}vw`,
          "--move-y": `${getRandom(-80, 80)}vh`,
          "--move-x2": `${getRandom(-60, 60)}vw`,
          "--move-y2": `${getRandom(-60, 60)}vh`,
          "--rotation-start": `${getRandom(-45, 45)}deg`,
          "--rotation-end": `${getRandom(-180, 180)}deg`,
          "--scale-start": getRandom(0.7, 1),
          "--scale-end": getRandom(0.8, 1.3),
        };

        return (
          <div
            key={idx}
            className="absolute whitespace-nowrap animate-randomFloat select-none"
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
