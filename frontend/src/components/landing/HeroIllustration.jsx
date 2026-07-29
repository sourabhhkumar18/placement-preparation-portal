import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function HeroIllustration() {
  return (
    <Tilt
      glareEnable
      glareMaxOpacity={0.15}
      scale={1.02}
      tiltMaxAngleX={6}
      tiltMaxAngleY={6}
      className="w-full max-w-xl"
    >
      <div
        className="
        rounded-3xl
        bg-white/60
        dark:bg-gray-900/60
        backdrop-blur-xl
        border
        border-white/30
        shadow-2xl
        p-6
        "
      >
        <motion.img
          src="/hero.svg"
          alt="Placement Preparation"
          className="w-full"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </Tilt>
  );
}

export default HeroIllustration;