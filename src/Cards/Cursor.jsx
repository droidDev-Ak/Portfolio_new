import React, { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${clientX}px, ${clientY}px)`;
      }

      if (outlineRef.current) {
        outlineRef.current.animate(
          { transform: `translate(${clientX}px, ${clientY}px)` },
          { duration: 500, fill: "forwards" }
        );
      }
    };

    // Listen for hover events on interactive elements
    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);

    // Select all interactive elements
    const interactives = document.querySelectorAll("a, button, .group, .cursor-pointer");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, []);

  return (
    <>

      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-2.5 h-2.5 bg-indigo-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300
        ${isHovered ? "opacity-0" : "opacity-100"}`}
      />
      

      <div
        ref={outlineRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out
        ${isHovered 
          ? "w-16 h-16 border-none bg-indigo-500/20 backdrop-blur-[2px]" 
          : "w-10 h-10 border border-indigo-500/30 bg-transparent"}`}
      />
    </>
  );
};

export default Cursor;