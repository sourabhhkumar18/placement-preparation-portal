import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

function FloatingButton({ scrollToForm }) {
  return (
    <motion.button
      onClick={scrollToForm}

      initial={{
        opacity:0,
        scale:0
      }}

      animate={{
        opacity:1,
        scale:1
      }}

      whileHover={{
        scale:1.1
      }}

      whileTap={{
        scale:0.9
      }}

      transition={{
        type:"spring",
        stiffness:300
      }}

      className="
      fixed
      bottom-8
      right-8
      z-50
      group
      "
    >

      <motion.div

        animate={{
          boxShadow:[
            "0 0 0px rgba(59,130,246,0)",
            "0 0 25px rgba(59,130,246,0.5)",
            "0 0 0px rgba(59,130,246,0)"
          ]
        }}

        transition={{
          duration:2,
          repeat:Infinity
        }}

        className="
        w-16
        h-16
        rounded-full
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        shadow-2xl
        flex
        items-center
        justify-center
        text-white
        "
      >

        <FaPlus size={24}/>

      </motion.div>


      {/* Tooltip */}

      <div
        className="
        absolute
        right-20
        top-1/2
        -translate-y-1/2
        bg-gray-900
        dark:bg-white
        text-white
        dark:text-gray-900
        px-4
        py-2
        rounded-xl
        text-sm
        font-medium
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-300
        whitespace-nowrap
        pointer-events-none
        shadow-lg
        "
      >
        Create New Note ✨
      </div>


    </motion.button>
  );
}

export default FloatingButton;