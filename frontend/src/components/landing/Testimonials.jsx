import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "TCS Digital",
      text: "This platform helped me organize my notes and stay consistent during placement preparation.",
      avatar: "👨‍💻",
    },
    {
      name: "Priya Singh",
      company: "Infosys",
      text: "The dashboard and progress tracking kept me motivated throughout my placement journey.",
      avatar: "👩‍🎓",
    },
    {
      name: "Aman Verma",
      company: "Accenture",
      text: "Everything I needed—DSA, aptitude, notes, and interview preparation—in one place.",
      avatar: "🧑‍💼",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <h2 className="text-5xl font-bold text-center mb-4 dark:text-white">
        Student Success Stories
      </h2>

      <p className="text-center text-gray-500 dark:text-gray-400 mb-16">
        Trusted by placement aspirants preparing for top companies.
      </p>

      <div className="grid md:grid-cols-3 gap-8">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
            bg-white/70
            dark:bg-gray-900/70
            backdrop-blur-xl
            rounded-3xl
            p-8
            shadow-xl
            border
            border-white/30
            "
          >
            <div className="text-5xl mb-5">
              {item.avatar}
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              "{item.text}"
            </p>

            <div className="mt-6">
              <h3 className="font-bold text-blue-600">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500">
                {item.company}
              </p>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;