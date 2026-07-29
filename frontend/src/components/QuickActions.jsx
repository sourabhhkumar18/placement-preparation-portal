import {
  FaPlus,
  FaThumbtack,
  FaExclamationTriangle,
  FaStickyNote,
} from "react-icons/fa";

function QuickActions({
  totalNotes,
  pinnedNotes,
  highPriorityNotes,
  scrollToForm,
}) {
  const actions = [
    {
      title: "Add Note",
      icon: <FaPlus />,
      color: "bg-blue-600 hover:bg-blue-700",
      onClick: scrollToForm,
    },
    {
      title: `Pinned (${pinnedNotes})`,
      icon: <FaThumbtack />,
      color: "bg-yellow-500 hover:bg-yellow-600",
    },
    {
      title: `High (${highPriorityNotes})`,
      icon: <FaExclamationTriangle />,
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      title: `All (${totalNotes})`,
      icon: <FaStickyNote />,
      color: "bg-green-600 hover:bg-green-700",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        ⚡ Quick Actions
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <button
            key={index}
            onClick={action.onClick}
            className={`${action.color} text-white rounded-2xl p-5 shadow-lg hover:scale-105 transition-all duration-300 flex flex-col items-center gap-3`}
          >
            <div className="text-3xl">{action.icon}</div>

            <span className="font-semibold">{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;