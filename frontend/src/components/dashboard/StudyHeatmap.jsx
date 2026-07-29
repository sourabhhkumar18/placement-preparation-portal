import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

function StudyHeatmap({ notes }) {
  const values = notes.map((note) => ({
    date: note.createdAt?.slice(0, 10),
    count: 1,
  }));

  const today = new Date();

  const start = new Date();
  start.setMonth(today.getMonth() - 6);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Study Consistency
      </h2>

      <CalendarHeatmap
        startDate={start}
        endDate={today}
        values={values}
        classForValue={(value) => {
          if (!value) return "color-empty";
          return "color-github-3";
        }}
        showWeekdayLabels
      />

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Every colored square represents a day you created notes.
      </p>

    </div>
  );
}

export default StudyHeatmap;