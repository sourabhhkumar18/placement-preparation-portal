import { FaTimes, FaTrash } from "react-icons/fa";

function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  note
}) {

  if (!isOpen) return null;


  return (
    <div className="
      fixed inset-0
      bg-black/60
      backdrop-blur-sm
      flex
      items-center
      justify-center
      z-50
      px-4
    ">

      <div className="
        bg-white
        dark:bg-gray-900
        rounded-3xl
        p-8
        w-full
        max-w-md
        shadow-2xl
      ">

        <div className="flex justify-between items-center mb-5">

          <div className="flex items-center gap-3">

            <FaTrash className="text-red-500 text-2xl"/>

            <h2 className="text-2xl font-bold dark:text-white">
              Delete Note
            </h2>

          </div>


          <button onClick={onClose}>
            <FaTimes />
          </button>

        </div>


        <p className="
          text-gray-600
          dark:text-gray-300
          mb-6
        ">

          Are you sure you want to delete

          <span className="font-bold">
            {" "}{note?.title}
          </span>
          ?

        </p>


        <div className="flex gap-4">

          <button
            onClick={onClose}
            className="
              flex-1
              border
              py-3
              rounded-xl
            "
          >
            Cancel
          </button>


          <button
            onClick={onConfirm}
            className="
              flex-1
              bg-red-600
              hover:bg-red-700
              text-white
              py-3
              rounded-xl
            "
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteConfirmModal;