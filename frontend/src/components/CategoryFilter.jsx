function CategoryFilter({
  category,
  setCategory,
  priority,
  setPriority,
}) {
  const categories = [
    "All",
    "Java",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "JavaScript",
    "DSA",
    "DBMS",
    "OS",
    "CN",
    "Aptitude",
    "Interview",
    "Other",
  ];

  return (
    <div className="mb-8">

      <h3
        className="
        text-lg
        font-semibold
        text-gray-700
        dark:text-gray-200
        mb-4
        "
      >
        Filter by Category
      </h3>


      <div className="flex flex-wrap gap-3">

        {categories.map((item) => (

          <button
            key={item}
            onClick={() => setCategory(item)}
            className={`
            px-4
            py-2
            rounded-full
            font-medium
            transition-all
            duration-300
            border

            ${
              category === item

              ? 
              "bg-blue-600 text-white border-blue-600 shadow-lg scale-105"

              :

              `
              bg-white/80
              dark:bg-gray-800/70

              text-gray-700
              dark:text-gray-300

              border-gray-300
              dark:border-gray-700

              hover:bg-blue-50
              dark:hover:bg-gray-700

              hover:border-blue-500
              hover:text-blue-600
              dark:hover:text-blue-400

              hover:scale-105
              `
            }
            `}
          >
            {item}
          </button>

        ))}

      </div>
      <div className="mt-8">

  <h3
    className="
    text-lg
    font-semibold
    text-gray-700
    dark:text-gray-200
    mb-4
    "
  >
    Filter by Priority
  </h3>

  <div className="flex flex-wrap gap-3">

    {["All", "High", "Medium", "Low"].map((item) => (

      <button
        key={item}
        onClick={() => setPriority(item)}
        className={`
        px-4
        py-2
        rounded-full
        font-medium
        transition-all
        duration-300
        border

        ${
          priority === item
            ? "bg-purple-600 text-white border-purple-600 shadow-lg scale-105"
            : `
              bg-white/80
              dark:bg-gray-800/70
              text-gray-700
              dark:text-gray-300
              border-gray-300
              dark:border-gray-700
              hover:bg-purple-50
              dark:hover:bg-gray-700
              hover:border-purple-500
              hover:text-purple-600
              dark:hover:text-purple-400
              hover:scale-105
            `
        }
        `}
      >
        {item}
      </button>

    ))}

  </div>

</div>

    </div>
  );
}

export default CategoryFilter;