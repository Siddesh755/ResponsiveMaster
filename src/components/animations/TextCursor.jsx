import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import react from "/src/assets/react.svg";
import tailwind from "/src/assets/tailwind.svg";

const TextCursor = ({ spacing = 100, maxPoints = 5 }) => {
  const [trail, setTrail] = useState([]);
  const containerRef = useRef(null);
  const idCounter = useRef(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setTrail((prev) => {
      let newTrail = [...prev];
      if (newTrail.length === 0 || Math.sqrt((mouseX - newTrail[newTrail.length - 1].x) ** 2 + (mouseY - newTrail[newTrail.length - 1].y) ** 2) >= spacing) {
        newTrail.push({
          id: idCounter.current++,
          x: mouseX,
          y: mouseY,
        });
      }
      return newTrail.length > maxPoints ? newTrail.slice(-maxPoints) : newTrail;
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative">
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {trail.map((item, index) => {
            const logo = index % 2 === 0 ? react : tailwind;
            return (
              <motion.img
                key={item.id}
                src={logo}
                alt="logo"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ opacity: { duration: 0.8, ease: "easeOut" } }}
                className="absolute w-8 h-8"
                style={{ left: item.x, top: item.y }}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TextCursor;
