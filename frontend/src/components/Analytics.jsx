import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function Analytics({ notes }) {
  const categoryCount = {};

  notes.forEach((note) => {
    categoryCount[note.category] =
      (categoryCount[note.category] || 0) + 1;
  });

  const priorityCount = {
    High: 0,
    Medium: 0,
    Low: 0,
  };

  notes.forEach((note) => {
    priorityCount[note.priority]++;
  });

  const pieData = {
  labels: Object.keys(categoryCount),
  datasets: [
  {
    data: Object.values(categoryCount),
    backgroundColor: [
      "#4F46E5",
      "#06B6D4",
      "#10B981",
      "#F59E0B",
      "#EF4444",
      "#EC4899",
      "#8B5CF6",
      "#14B8A6",
      "#F97316",
      "#6366F1",
    ],
    hoverOffset: 18,
    borderColor: "#ffffff",
    borderWidth: 3,
  },
],
};
 const barData = {
  labels: ["High", "Medium", "Low"],
  datasets: [
  {
    label: "Notes",
    data: [
      priorityCount.High,
      priorityCount.Medium,
      priorityCount.Low,
    ],
    backgroundColor: [
      "#EF4444",
      "#F59E0B",
      "#10B981",
    ],
    borderRadius: 12,
    borderSkipped: false,
    barThickness: 50,
  },
],
};
const options = {
  responsive: true,
  animation: {
    duration: 1500,
    easing: "easeOutBounce",
  },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: "#6B7280",
        padding: 20,
        font: {
          size: 14,
          weight: "bold",
        },
      },
    },
  },
};
  return (
    <div className="grid lg:grid-cols-2 gap-6 mb-8">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 dark:text-white">
          📚 Notes by Category
        </h2>

        <Pie data={pieData} options={options} />
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4 dark:text-white">
          📊 Notes by Priority
        </h2>

       <Bar data={barData} options={options} />
      </div>
    </div>
  );
}

export default Analytics;