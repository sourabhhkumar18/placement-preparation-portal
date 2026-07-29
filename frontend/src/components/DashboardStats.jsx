import {
  FaStickyNote,
  FaThumbtack,
  FaExclamationTriangle,
  FaFolderOpen,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
function AnimatedNumber({ value }) {

  const [count, setCount] = useState(0);


  useEffect(() => {

    let start = 0;

    const duration = 1000;
    const increment = value / (duration / 20);


    const timer = setInterval(() => {

      start += increment;


      if (start >= value) {

        setCount(value);
        clearInterval(timer);

      } else {

        setCount(Math.floor(start));

      }

    }, 20);


    return () => clearInterval(timer);


  }, [value]);


  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {count}
    </motion.span>
  );

}

function DashboardStats({ notes }) {
  const totalNotes = notes.length;

  const pinnedNotes = notes.filter((note) => note.pinned).length;

  const highPriorityNotes = notes.filter(
    (note) => note.priority === "High"
  ).length;

  const totalCategories = new Set(
    notes.map((note) => note.category)
  ).size;

  const stats = [
    {
      title: "Total Notes",
      value: totalNotes,
      icon: <FaStickyNote size={28} />,
      gradient:
        "from-blue-500 to-blue-700",
    },
    {
      title: "Pinned Notes",
      value: pinnedNotes,
      icon: <FaThumbtack size={28} />,
      gradient:
        "from-yellow-400 to-orange-500",
    },
    {
      title: "High Priority",
      value: highPriorityNotes,
      icon: <FaExclamationTriangle size={28} />,
      gradient:
        "from-red-500 to-red-700",
    },
    {
      title: "Categories",
      value: totalCategories,
      icon: <FaFolderOpen size={28} />,
      gradient:
        "from-green-500 to-emerald-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
   <motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}

  whileHover={{
    y: -8,
    scale: 1.03,
  }}

  transition={{
    duration: 0.4,
    delay: index * 0.1,
  }}

  className="
    relative
    overflow-hidden
    bg-white/80
    dark:bg-gray-800/70
    backdrop-blur-lg
    border
    border-gray-200
    dark:border-gray-700
    rounded-2xl
    shadow-md
    hover:shadow-2xl
    hover:shadow-blue-400/30
    transition-all
    duration-300
    p-6
    flex
    justify-between
    items-center
  "
>
  <motion.div
  animate={{ x: [-250, 450] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "linear",
  }}
  className="
    absolute
    inset-y-0
    -left-32
    w-24
    bg-white/10
    skew-x-12
  "
/>
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">
              {stat.title}
            </p>

    <h2 className="text-3xl font-bold mt-2 text-gray-800 dark:text-white">

  <AnimatedNumber value={stat.value} />

</h2>
          </div>

          <motion.div
  animate={{
    y: [0, -5, 0],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    delay: index * 0.3,
  }}
  whileHover={{
    rotate: 8,
    scale: 1.15,
  }}
  className={`
    bg-gradient-to-br ${stat.gradient}
    text-white
    p-4
    rounded-2xl
    shadow-lg
  `}
>
  {stat.icon}
</motion.div>
        </motion.div>
      ))}
    </div>
  );
}

export default DashboardStats;