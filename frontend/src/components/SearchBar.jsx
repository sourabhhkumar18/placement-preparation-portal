import { FaSearch, FaTimes } from "react-icons/fa";

function SearchBar({ search, setSearch }) {
  return (
    <div className="relative mb-6">

      {/* Search Icon */}
      <FaSearch
        className="
        absolute
        left-4
        top-1/2
        -translate-y-1/2
        text-gray-400
        dark:text-gray-500
        "
      />


      {/* Input */}
      <input
        type="text"
        placeholder="Search notes by title or content..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
        w-full
        pl-12
        pr-12
        py-3
        rounded-xl

        border
        border-gray-300
        dark:border-gray-700

        bg-white/80
        dark:bg-gray-800/70

        backdrop-blur-lg

        text-gray-800
        dark:text-white

        placeholder-gray-400
        dark:placeholder-gray-500

        shadow-sm
        dark:shadow-gray-900

        focus:outline-none
        focus:ring-2
        focus:ring-blue-500

        transition-all
        duration-300
        "
      />


      {/* Clear Button */}
      {search && (
        <button
          type="button"
          onClick={() => setSearch("")}
          className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2

          text-gray-400
          dark:text-gray-500

          hover:text-red-500

          transition
          "
        >
          <FaTimes />
        </button>
      )}

    </div>
  );
}

export default SearchBar;