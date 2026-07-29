import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NotFound() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-gray-950 dark:to-gray-900">

      <motion.div

        initial={{opacity:0,y:30}}
        animate={{opacity:1,y:0}}

        className="text-center"

      >

        <motion.h1

          animate={{
            scale:[1,1.08,1]
          }}

          transition={{
            duration:2,
            repeat:Infinity
          }}

          className="text-8xl font-bold text-blue-600"

        >

          404

        </motion.h1>

        <h2 className="text-4xl font-bold mt-6 dark:text-white">
          Lost in Space 🚀
        </h2>

        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
          The page you're looking for doesn't exist.
          Let's get you back to your placement preparation.
        </p>

        <button

          onClick={()=>navigate("/")}

          className="
          mt-8
          bg-blue-600
          hover:bg-blue-700
          text-white
          px-8
          py-3
          rounded-xl
          shadow-lg
          transition
          "

        >

          Return Home

        </button>

      </motion.div>

    </div>

  );

}

export default NotFound;