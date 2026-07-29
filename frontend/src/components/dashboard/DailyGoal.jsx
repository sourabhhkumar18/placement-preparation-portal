import { FaBullseye } from "react-icons/fa";

function DailyGoal({ completed, total }) {
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6">

      <div className="flex items-center gap-3 mb-5">
        <FaBullseye className="text-3xl text-blue-600" />
        <h2 className="text-2xl font-bold">
          Daily Goal
        </h2>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">

        <div
          className="bg-blue-600 h-4 rounded-full transition-all"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="mt-4 text-gray-600 dark:text-gray-300">
        {completed} of {total} notes are pinned.
      </p>

      <p className="font-bold mt-2 text-blue-600">
        {percentage}% Complete
      </p>

    </div>
  );
}

export default DailyGoal;