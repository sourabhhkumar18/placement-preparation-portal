import {
  FaSave,
  FaEdit,
  FaTimes,
  FaHeading,
  FaAlignLeft,
} from "react-icons/fa";

function NoteForm({
  title,
  setTitle,
  content,
  setContent,
  category,
  setCategory,
  priority,
  setPriority,
  isEditing,
  setIsEditing,
  setEditingId,
  setTitleState,
  setContentState,
  setCategoryState,
  setPriorityState,
  handleSubmit,
}) {
  const handleCancel = () => {
    setTitleState("");
    setContentState("");
    setCategoryState("Java");
    setPriorityState("Medium");

    setEditingId(null);
    setIsEditing(false);
  };

  return (
    <div
      className="
      bg-white/80 dark:bg-gray-800/70
      backdrop-blur-lg
      border border-gray-200 dark:border-gray-700
      rounded-2xl
      shadow-lg
      p-8
      mb-8
      transition-all duration-300
      "
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
        {isEditing ? "Update Note" : "Add New Note"}
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Title */}
          <div>
            <label className="font-semibold flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-200">
              <FaHeading />
              Title
            </label>

            <input
              type="text"
              className="
              w-full
              border
              border-gray-300
              dark:border-gray-600
              bg-white
              dark:bg-gray-900
              text-gray-800
              dark:text-white
              rounded-xl
              p-3
              focus:ring-2
              focus:ring-blue-500
              outline-none
              transition
              "
              placeholder="Enter note title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>


          {/* Category */}
          <div>
            <label className="font-semibold mb-2 block text-gray-700 dark:text-gray-200">
              Category
            </label>

            <select
              className="
              w-full
              border
              border-gray-300
              dark:border-gray-600
              bg-white
              dark:bg-gray-900
              text-gray-800
              dark:text-white
              rounded-xl
              p-3
              focus:ring-2
              focus:ring-blue-500
              outline-none
              "
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Java</option>
              <option>React</option>
              <option>Node.js</option>
              <option>Express</option>
              <option>MongoDB</option>
              <option>JavaScript</option>
              <option>DSA</option>
              <option>DBMS</option>
              <option>OS</option>
              <option>CN</option>
              <option>Aptitude</option>
              <option>Interview</option>
              <option>Other</option>
            </select>
          </div>


          {/* Priority */}
          <div>
            <label className="font-semibold mb-2 block text-gray-700 dark:text-gray-200">
              Priority
            </label>

            <select
              className="
              w-full
              border
              border-gray-300
              dark:border-gray-600
              bg-white
              dark:bg-gray-900
              text-gray-800
              dark:text-white
              rounded-xl
              p-3
              focus:ring-2
              focus:ring-blue-500
              outline-none
              "
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>


          {/* Content */}
          <div className="lg:col-span-2">
            <label className="font-semibold flex items-center gap-2 mb-2 text-gray-700 dark:text-gray-200">
              <FaAlignLeft />
              Content
            </label>

            <textarea
              rows={6}
              className="
              w-full
              border
              border-gray-300
              dark:border-gray-600
              bg-white
              dark:bg-gray-900
              text-gray-800
              dark:text-white
              rounded-xl
              p-3
              focus:ring-2
              focus:ring-blue-500
              outline-none
              transition
              "
              placeholder="Write your placement notes..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

        </div>


        <div className="flex gap-4 mt-6">

          <button
            className="
            flex items-center gap-2
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-6
            py-3
            rounded-xl
            transition
            hover:scale-105
            "
          >
            {isEditing ? <FaEdit /> : <FaSave />}
            {isEditing ? "Update Note" : "Save Note"}
          </button>


          {isEditing && (
            <button
              type="button"
              onClick={handleCancel}
              className="
              flex items-center gap-2
              bg-gray-500
              hover:bg-gray-600
              text-white
              px-6
              py-3
              rounded-xl
              transition
              hover:scale-105
              "
            >
              <FaTimes />
              Cancel
            </button>
          )}

        </div>

      </form>
    </div>
  );
}

export default NoteForm;