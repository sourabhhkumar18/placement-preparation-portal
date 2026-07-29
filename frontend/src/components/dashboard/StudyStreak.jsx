import { FaFire } from "react-icons/fa";

function StudyStreak({ notes }) {
  const streak = Math.min(notes.length, 30);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6">

      <div className="flex items-center gap-3 mb-5">

        <FaFire className="text-orange-500 text-3xl" />

        <h2 className="text-2xl font-bold">
          Study Streak
        </h2>

      </div>

      <h1 className="text-6xl font-extrabold text-orange-500">
        {streak}
      </h1>

      <p className="mt-3 text-gray-600 dark:text-gray-300">
        Day Streak 🔥
      </p>

      <p className="mt-2 text-sm text-gray-500">
        Keep adding notes every day to grow your streak.
      </p>

    </div>
  );
}

export default StudyStreak;