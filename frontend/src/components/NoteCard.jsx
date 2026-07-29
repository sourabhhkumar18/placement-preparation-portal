import PriorityBadge from "./PriorityBadge";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import {
  FaEdit,
  FaTrash,
  FaThumbtack,
  FaRegClock,
  FaFolderOpen,
  FaEye,
} from "react-icons/fa";

function NoteCard({
  note,
  startEdit,
  handleDelete,
  handlePin,
  openNote,
}) {
  const categoryStyles = {
  Java: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  React: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300",
  "Node.js": "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  Express: "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200",
  MongoDB: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  JavaScript: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  DSA: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  DBMS: "bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300",
  OS: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
  CN: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
  Aptitude: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  Interview: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  Other: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
};
  return (
    <motion.div

  whileHover={{
    y:-6,
    scale:1.02
  }}

  transition={{
    duration:0.3
  }}
      className={`
${
  note.pinned
    ? "bg-yellow-50/80 dark:bg-yellow-900/20"
    : "bg-white/80 dark:bg-gray-800/70"
}
backdrop-blur-lg
border
border-gray-200
dark:border-gray-700
rounded-2xl
shadow-md
transition-all
duration-300
overflow-hidden
`}
    >
      <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

      {/* Header */}
      <div className="flex justify-between items-center px-6 pt-5">

        <div className="flex items-center gap-2">

          <FaFolderOpen className="text-blue-600 dark:text-blue-400" />

          <span
  className={`
    px-3
    py-1
    rounded-full
    text-sm
    font-semibold
    ${
      categoryStyles[note.category] ||
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
    }
  `}
>
  {note.category}
</span>

        </div>


        <button
          onClick={() => handlePin(note)}
          className={`
relative
group
${
  note.pinned
    ? "bg-yellow-50/80 dark:bg-yellow-900/20"
    : "bg-white/80 dark:bg-gray-800/70"
}
backdrop-blur-xl
border
border-gray-200
dark:border-gray-700
rounded-3xl
shadow-lg
hover:shadow-blue-500/20
hover:shadow-2xl
transition-all
duration-500
overflow-hidden
`}
        >
          <motion.div
  animate={
    note.pinned
      ? { rotate: [-10, 10, -10] }
      : {}
  }
  transition={{
    duration: 1,
    repeat: Infinity,
  }}
>
  <FaThumbtack />
</motion.div>
        </button>

      </div>


      {/* Body */}
      <div className="px-6 py-5">

        <h2
          className="
          text-2xl
          font-bold
          text-gray-800
          dark:text-white
          mb-3
          break-words
          "
        >
          {note.title}
        </h2>


        <p
          className="
          text-gray-600
          dark:text-gray-300
          leading-7
          whitespace-pre-line
          break-words
          min-h-[90px]
          "
        >
          {note.content}
        </p>


        <div className="mt-5">
          <PriorityBadge priority={note.priority} />
        </div>


        <div
          className="
          mt-5
          space-y-2
          text-sm
          text-gray-500
          dark:text-gray-400
          "
        >

          <div className="flex items-center gap-2">
            <FaRegClock />

            <span>
              Created:{" "}
              {new Date(note.createdAt).toLocaleDateString()}
            </span>
          </div>


          <div className="flex items-center gap-2">
            <FaRegClock />

            <span>
  Created{" "}
  {formatDistanceToNow(new Date(note.createdAt), {
    addSuffix: true,
  })}
</span>
          </div>

        </div>

      </div>


{/* Footer */}
<div
  className="
  border-t
  border-gray-200
  dark:border-gray-700
  bg-gray-50
  dark:bg-gray-900/50
  px-6
  py-4
  grid
  grid-cols-1
sm:grid-cols-3
  gap-3
  "
>

  <motion.button
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => openNote(note)}
    className="
    flex
    items-center
    justify-center
    gap-2
    bg-indigo-600
    hover:bg-indigo-700
    text-white
    py-2.5
    rounded-xl
    transition-all
    duration-300
    hover:scale-105
    "
  >
    <FaEye />
    View
  </motion.button>

  <motion.button
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => startEdit(note)}
    className="
    flex
    items-center
    justify-center
    gap-2
    bg-blue-600
    hover:bg-blue-700
    text-white
    py-2.5
    rounded-xl
    transition-all
    duration-300
    hover:scale-105
    "
  >
    <FaEdit />
    Edit
  </motion.button>

  <motion.button
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => handleDelete(note._id)}
    className="
    flex
    items-center
    justify-center
    gap-2
    bg-red-600
    hover:bg-red-700
    text-white
    py-2.5
    rounded-xl
    transition-all
    duration-300
    hover:scale-105
    "
  >
    <FaTrash />
    Delete
  </motion.button>

</div>
    </motion.div>
  );
}

export default NoteCard;