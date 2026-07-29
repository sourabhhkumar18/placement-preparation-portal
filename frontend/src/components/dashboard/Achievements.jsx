import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";

function Achievements({ notes }) {
  const achievements = [
    {
      title: "First Note",
      icon: <FaStar />,
      unlocked: notes.length >= 1,
    },
    {
      title: "10 Notes",
      icon: <FaMedal />,
      unlocked: notes.length >= 10,
    },
    {
      title: "25 Notes",
      icon: <FaTrophy />,
      unlocked: notes.length >= 25,
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-6">

      <h2 className="text-2xl font-bold mb-6">
        Achievements
      </h2>

      <div className="space-y-4">

        {achievements.map((item, index) => (

          <div
            key={index}
            className={`
              flex
              items-center
              gap-4
              p-4
              rounded-2xl
              transition

              ${
                item.unlocked
                  ? "bg-green-100 dark:bg-green-900/30"
                  : "bg-gray-100 dark:bg-gray-800"
              }
            `}
          >
            <div
              className={`text-3xl ${
                item.unlocked
                  ? "text-yellow-500"
                  : "text-gray-400"
              }`}
            >
              {item.icon}
            </div>

            <div>

              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500">
                {item.unlocked
                  ? "Unlocked"
                  : "Locked"}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Achievements;