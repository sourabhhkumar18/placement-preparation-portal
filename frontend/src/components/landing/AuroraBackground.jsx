import { motion } from "framer-motion";

function AuroraBackground() {
  return (
    <>
      <motion.div
        animate={{
          x: [0, 200, 0],
          y: [0, -150, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        top-[-150px]
        left-[-120px]
        w-[450px]
        h-[450px]
        rounded-full
        bg-blue-500/20
        blur-3xl
        pointer-events-none
        "
      />

      <motion.div
        animate={{
          x: [0, -250, 0],
          y: [0, 120, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        bottom-[-200px]
        right-[-120px]
        w-[500px]
        h-[500px]
        rounded-full
        bg-purple-500/20
        blur-3xl
        pointer-events-none
        "
      />
    </>
  );
}

export default AuroraBackground;