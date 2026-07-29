import { motion } from "framer-motion";
function SkeletonCard() {
  return (
    <div
      className="
      bg-white/80
      dark:bg-gray-800/70

      backdrop-blur-lg

      rounded-2xl

      shadow-md

      border
      border-gray-200
      dark:border-gray-700

      p-6

      relative
overflow-hidden
      "
    >
      <motion.div
  className="
  absolute
  inset-0
  -translate-x-full
  bg-gradient-to-r
  from-transparent
  via-white/20
  to-transparent
  "
  animate={{
    translateX:["-100%","100%"]
  }}
  transition={{
    duration:1.5,
    repeat:Infinity,
    ease:"linear"
  }}
/>

      <div className="flex justify-between items-center mb-6">

        <div
          className="
          h-6
          w-24
          bg-gray-300
          dark:bg-gray-700
          rounded-full
          "
        />

        <div
          className="
          h-6
          w-6
          bg-gray-300
          dark:bg-gray-700
          rounded-full
          "
        />

      </div>


      <div
        className="
        h-7
        w-3/4
        bg-gray-300
        dark:bg-gray-700
        rounded
        mb-4
        "
      />


      <div className="space-y-3">

        <div
          className="
          h-4
          bg-gray-300
          dark:bg-gray-700
          rounded
          "
        />

        <div
          className="
          h-4
          bg-gray-300
          dark:bg-gray-700
          rounded
          "
        />

        <div
          className="
          h-4
          w-2/3
          bg-gray-300
          dark:bg-gray-700
          rounded
          "
        />

      </div>


      <div
        className="
        mt-6
        h-6
        w-20
        bg-gray-300
        dark:bg-gray-700
        rounded-full
        "
      />


      <div className="mt-6 space-y-2">

        <div
          className="
          h-4
          w-40
          bg-gray-300
          dark:bg-gray-700
          rounded
          "
        />

        <div
          className="
          h-4
          w-40
          bg-gray-300
          dark:bg-gray-700
          rounded
          "
        />

      </div>


      <div className="mt-8 flex gap-3">

        <div
          className="
          flex-1
          h-11
          bg-gray-300
          dark:bg-gray-700
          rounded-xl
          "
        />

        <div
          className="
          flex-1
          h-11
          bg-gray-300
          dark:bg-gray-700
          rounded-xl
          "
        />

      </div>


    </div>
  );
}

export default SkeletonCard;