import {
  FaTimes,
  FaFolderOpen,
  FaThumbtack,
  FaRegClock,
} from "react-icons/fa";

import PriorityBadge from "./PriorityBadge";

function NoteDetailsModal({
  note,
  isOpen,
  onClose,
}) {
  if (!isOpen || !note) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4">
      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b dark:border-gray-700">

          <div className="flex items-center gap-3">

            <FaFolderOpen className="text-blue-600 text-2xl" />

            <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-4 py-1 rounded-full font-semibold">
              {note.category}
            </span>

            {note.pinned && (
              <FaThumbtack className="text-yellow-500 text-xl" />
            )}

          </div>

          <button
            onClick={onClose}
            className="text-2xl hover:text-red-500 transition"
          >
            <FaTimes />
          </button>

        </div>

        {/* Body */}
        <div className="p-8">

          <h1 className="text-3xl font-bold dark:text-white mb-4">
            {note.title}
          </h1>

          <PriorityBadge priority={note.priority} />

          <p className="mt-6 whitespace-pre-line leading-8 text-gray-700 dark:text-gray-300">
            {note.content}
          </p>

          <div className="mt-8 space-y-3 text-gray-500 dark:text-gray-400">

            <div className="flex items-center gap-2">
              <FaRegClock />
              Created:
              {" "}
              {new Date(note.createdAt).toLocaleString()}
            </div>

            <div className="flex items-center gap-2">
              <FaRegClock />
              Updated:
              {" "}
              {new Date(note.updatedAt).toLocaleString()}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default NoteDetailsModal;