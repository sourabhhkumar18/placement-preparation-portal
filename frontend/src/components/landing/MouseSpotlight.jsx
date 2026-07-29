import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

function MouseSpotlight() {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 150);
      y.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="
      pointer-events-none
      fixed
      top-0
      left-0
      w-[300px]
      h-[300px]
      rounded-full
      bg-blue-500/20
      blur-3xl
      z-0
      "
    />
  );
}

export default MouseSpotlight;