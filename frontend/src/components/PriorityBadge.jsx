function PriorityBadge({ priority }) {
  const styles = {
    High: "bg-red-500/90 dark:bg-red-600/80",
    Medium: "bg-yellow-500/90 dark:bg-yellow-600/80",
    Low: "bg-green-500/90 dark:bg-green-600/80",
  };

  return (
    <span
      className={`
      text-white
      text-xs
      font-semibold
      px-3
      py-1
      rounded-full
      shadow-md
      backdrop-blur-sm
      transition-all
      duration-300
      ${
        styles[priority] || "bg-gray-500 dark:bg-gray-600"
      }
      `}
    >
      {priority}
    </span>
  );
}

export default PriorityBadge;