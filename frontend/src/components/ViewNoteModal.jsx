import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaFolderOpen,
  FaRegClock,
  FaThumbtack,
} from "react-icons/fa";
import PriorityBadge from "./PriorityBadge";

function ViewNoteModal({ isOpen, note, onClose }) {
  if (!isOpen || !note) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-6 flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold break-words">
                {note.title}
              </h2>

              <div className="flex items-center gap-4 mt-3 text-sm">
                <span className="flex items-center gap-2">
                  <FaFolderOpen />
                  {note.category}
                </span>

                <span className="flex items-center gap-2">
                  <FaThumbtack />
                  {note.pinned ? "Pinned" : "Not Pinned"}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-2xl hover:rotate-90 transition duration-300"
            >
              <FaTimes />
            </button>
          </div>

          {/* Body */}
          <div className="p-8">

            <PriorityBadge priority={note.priority} />

            <div className="mt-6 whitespace-pre-wrap leading-8 text-lg text-gray-700 dark:text-gray-300">
              {note.content}
            </div>

            <div className="border-t dark:border-gray-700 mt-8 pt-6 text-sm text-gray-500 dark:text-gray-400 space-y-2">

              <div className="flex items-center gap-2">
                <FaRegClock />
                Created :
                {new Date(note.createdAt).toLocaleDateString()}
              </div>

              <div className="flex items-center gap-2">
                <FaRegClock />
                Updated :
                {new Date(note.updatedAt).toLocaleDateString()}
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ViewNoteModal;