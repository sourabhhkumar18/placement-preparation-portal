import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-950">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <FaLaptopCode className="text-6xl text-blue-600" />
      </motion.div>

      <h2 className="mt-6 text-2xl font-bold">
        PlacementPrep
      </h2>

      <p className="text-gray-500 mt-2">
        Loading Dashboard...
      </p>
    </div>
  );
}

export default LoadingScreen;