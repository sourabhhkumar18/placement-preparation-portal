import { motion } from "framer-motion";

function RecentActivity({ notes }) {
  const recentNotes = [...notes]
    .sort(
      (a, b) =>
        new Date(b.updatedAt || b.createdAt) -
        new Date(a.updatedAt || a.createdAt)
    )
    .slice(0, 5);

  return (
    <div
      className="
      bg-white/80
      dark:bg-gray-900/70
      backdrop-blur-xl
      rounded-3xl
      shadow-xl
      p-6
      "
    >
      <h2 className="text-2xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {recentNotes.length === 0 ? (
          <p className="text-gray-500">
            No recent activity.
          </p>
        ) : (
          recentNotes.map((note, index) => (
            <motion.div
              key={note._id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="flex items-start gap-4"
            >
              <div className="w-3 h-3 rounded-full bg-blue-600 mt-2" />

              <div>
                <p className="font-semibold">
                  {note.title}
                </p>

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {note.category} • {note.priority} Priority
                </p>
              </div>
            </motion.div>
          ))
        )}

      </div>
    </div>
  );
}

export default RecentActivity;