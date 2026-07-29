import { motion } from "framer-motion";

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Blue Blob */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, 80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="
          absolute
          top-10
          left-10
          w-80
          h-80
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
      />

      {/* Purple Blob */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 120, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="
          absolute
          bottom-10
          right-10
          w-96
          h-96
          rounded-full
          bg-purple-500/20
          blur-3xl
        "
      />

      {/* Cyan Blob */}
      <motion.div
        animate={{
          y: [0, -120, 0],
          x: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[420px]
          h-[420px]
          rounded-full
          bg-cyan-400/10
          blur-3xl
        "
      />

    </div>
  );
}

export default AnimatedBackground;