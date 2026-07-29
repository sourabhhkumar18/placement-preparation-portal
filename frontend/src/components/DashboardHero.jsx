import { FaLaptopCode, FaCalendarAlt } from "react-icons/fa";

function DashboardHero({ user }) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-2xl shadow-xl p-8 mb-8 text-white transition-all duration-300">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, {user?.name}! 👋
          </h1>

          <p className="text-blue-100 dark:text-gray-300 text-lg">
            Keep preparing consistently. Every note you create brings you one
            step closer to your dream placement.
          </p>

          <div className="flex items-center gap-2 mt-5 text-blue-100 dark:text-gray-400">
            <FaCalendarAlt />
            <span>{today}</span>
          </div>
        </div>

        <div className="bg-white/20 dark:bg-gray-700/40 backdrop-blur-md rounded-2xl p-6 transition-all duration-300">
          <FaLaptopCode size={60} />
        </div>
      </div>
    </div>
  );
}

export default DashboardHero;