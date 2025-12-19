import React, { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const outlineRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen is mobile size
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile(); // Run on mount
    window.addEventListener("resize", checkMobile);

    // If it's mobile, don't add the mouse listeners
    if (window.innerWidth < 1024) return;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (outlineRef.current) {
        outlineRef.current.animate(
          { transform: `translate(${clientX}px, ${clientY}px)` },
          { duration: 400, fill: "forwards" }
        );
      }
    };

    const handleHover = () => setIsHovered(true);
    const handleUnhover = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);

    const interactives = document.querySelectorAll("a, button, .group, .cursor-pointer");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", moveCursor);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });
    };
  }, []);

  // Do not render anything if it's mobile
  if (isMobile) return null;

  return (
    <div
      ref={outlineRef}
      style={{ pointerEvents: "none" }}
      className={`fixed top-0 left-0 rounded-full z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out
        ${isHovered 
          ? "w-14 h-14 border-2 border-indigo-400 bg-indigo-400/10 scale-110" 
          : "w-8 h-8 border border-indigo-500/40 bg-transparent"}`}
    />
  );
};

export default Cursor;