import { FaTrash, FaTimes } from "react-icons/fa";

function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div
      className="
      fixed
      inset-0
      bg-black/50
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
      px-4
      "
    >

      <div
        className="
        bg-white/90
        dark:bg-gray-800/90

        backdrop-blur-lg

        border
        border-gray-200
        dark:border-gray-700

        rounded-2xl
        shadow-2xl

        w-full
        max-w-md

        p-6

        transition-all
        duration-300
        "
      >

        {/* Icon */}
        <div className="flex justify-center mb-4">

          <div
            className="
            bg-red-100
            dark:bg-red-900/40

            p-5
            rounded-full

            shadow-lg
            "
          >
            <FaTrash
              className="
              text-red-600
              dark:text-red-400
              "
              size={32}
            />
          </div>

        </div>


        {/* Heading */}
        <h2
          className="
          text-2xl
          font-bold
          text-center

          text-gray-800
          dark:text-white
          "
        >
          Delete Note?
        </h2>


        {/* Description */}
        <p
          className="
          text-gray-500
          dark:text-gray-400

          text-center
          mt-3
          "
        >
          This action cannot be undone.
          <br />
          Are you sure you want to delete this note?
        </p>


        {/* Buttons */}
        <div className="flex gap-4 mt-8">

          <button
            onClick={onClose}
            className="
            flex-1
            flex
            justify-center
            items-center
            gap-2

            bg-gray-200
            dark:bg-gray-700

            text-gray-800
            dark:text-white

            hover:bg-gray-300
            dark:hover:bg-gray-600

            py-3
            rounded-xl

            transition-all
            duration-300

            hover:scale-105
            "
          >
            <FaTimes />
            Cancel
          </button>


          <button
            onClick={onConfirm}
            className="
            flex-1
            flex
            justify-center
            items-center
            gap-2

            bg-red-600
            hover:bg-red-700

            text-white

            py-3
            rounded-xl

            transition-all
            duration-300

            hover:scale-105
            "
          >
            <FaTrash />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;