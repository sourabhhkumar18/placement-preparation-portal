import { motion } from "framer-motion";
import { FaBookOpen, FaPlus } from "react-icons/fa";

function EmptyState({ scrollToForm }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="
      bg-white
      dark:bg-gray-800
      rounded-3xl
      shadow-xl
      p-12
      text-center
      border
      border-gray-200
      dark:border-gray-700
      "
    >

      <motion.div
        animate={{
          y:[0,-10,0]
        }}
        transition={{
          duration:2,
          repeat:Infinity
        }}
        className="
        text-7xl
        text-blue-600
        flex
        justify-center
        "
      >
        <FaBookOpen />
      </motion.div>


      <h2 className="
      mt-6
      text-3xl
      font-bold
      dark:text-white
      ">
        No Preparation Notes Yet 📚
      </h2>


      <p
      className="
      mt-4
      text-gray-500
      dark:text-gray-400
      max-w-md
      mx-auto
      leading-relaxed
      "
      >
        Start building your placement journey.
        Add your DSA concepts, interview questions,
        aptitude tricks, and important notes here.
      </p>


      <button
      onClick={scrollToForm}
      className="
      mt-8
      inline-flex
      items-center
      gap-2
      px-6
      py-3
      rounded-xl
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      text-white
      font-semibold
      shadow-lg
      hover:scale-105
      transition
      "
      >

        <FaPlus />

        Create First Note

      </button>


    </motion.div>
  );
}

export default EmptyState;