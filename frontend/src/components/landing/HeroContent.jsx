import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";

function HeroContent() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">

      <motion.span
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="
        inline-block
        bg-blue-100
        dark:bg-blue-900/40
        text-blue-700
        dark:text-blue-300
        px-4
        py-2
        rounded-full
        font-medium
        "
      >
        🚀 Your Personal Placement Portal
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="
        text-6xl
        font-extrabold
        leading-tight
        text-gray-900
        dark:text-white
        "
      >
        Crack Your
        <br />

        <span className="text-blue-600">
          Dream Placement
        </span>
      </motion.h1>

      <TypeAnimation
        sequence={[
          "Prepare for TCS 🚀",
          2000,
          "Prepare for Infosys 💼",
          2000,
          "Prepare for Accenture 🌟",
          2000,
          "Prepare for Wipro 💻",
          2000,
        ]}
        wrapper="span"
        speed={40}
        repeat={Infinity}
        className="
        text-2xl
        font-semibold
        text-blue-600
        "
      />

      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl">
        Organize notes, track your preparation,
        monitor progress and stay consistent with
        one powerful dashboard.
      </p>

      <div className="flex gap-5">

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          onClick={() => navigate("/login")}
          className="
          px-8
          py-4
          rounded-xl
          bg-blue-600
          text-white
          font-semibold
          shadow-xl
          "
        >
          Start Preparing
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: .95 }}
          onClick={() => navigate("/register")}
          className="
          px-8
          py-4
          rounded-xl
          border-2
          border-blue-600
          text-blue-600
          font-semibold
          "
        >
          Create Account
        </motion.button>

      </div>

    </div>
  );
}

export default HeroContent;