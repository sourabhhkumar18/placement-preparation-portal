import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

function AnalyticsCharts({ notes }) {
  const categoryData = Object.entries(
    notes.reduce((acc, note) => {
      acc[note.category] = (acc[note.category] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  const priorityData = [
    {
      name: "High",
      value: notes.filter((n) => n.priority === "High").length,
    },
    {
      name: "Medium",
      value: notes.filter((n) => n.priority === "Medium").length,
    },
    {
      name: "Low",
      value: notes.filter((n) => n.priority === "Low").length,
    },
  ];

  const COLORS = [
    "#2563eb",
    "#7c3aed",
    "#14b8a6",
    "#f59e0b",
    "#ef4444",
    "#22c55e",
    "#ec4899",
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8">

      {/* Pie Chart */}

      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6">

        <h2 className="text-xl font-bold mb-6">
          Notes by Category
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>

            <Pie
              data={categoryData}
              dataKey="value"
              outerRadius={100}
              label
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

      {/* Bar Chart */}

      <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6">

        <h2 className="text-xl font-bold mb-6">
          Notes by Priority
        </h2>

        <ResponsiveContainer width="100%" height={300}>

          <BarChart data={priorityData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#2563eb"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AnalyticsCharts;