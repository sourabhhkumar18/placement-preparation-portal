import { motion } from "framer-motion";

function RoadmapSection() {
  const steps = [
    {
      icon: "📝",
      title: "Aptitude",
      desc: "Quantitative Aptitude, Logical Reasoning & Verbal Ability",
    },
    {
      icon: "💻",
      title: "Coding",
      desc: "DSA, Java, SQL, Problem Solving",
    },
    {
      icon: "📚",
      title: "Core Subjects",
      desc: "DBMS, OS, CN, OOPs",
    },
    {
      icon: "🎯",
      title: "Mock Interviews",
      desc: "HR Interview, Technical Interview & Resume Preparation",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      <h2 className="text-5xl font-bold text-center mb-5 dark:text-white">
        Your Placement Roadmap
      </h2>

      <p className="text-center text-gray-500 dark:text-gray-400 mb-16">
        Follow this roadmap to prepare for your dream company.
      </p>

      <div className="grid md:grid-cols-4 gap-8">

        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.2,
              duration: 0.6,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
            relative
            rounded-3xl
            bg-white/70
            dark:bg-gray-900/70
            backdrop-blur-xl
            border
            border-white/30
            shadow-xl
            p-8
            text-center
            "
          >
            <div className="text-6xl mb-5">
              {step.icon}
            </div>

            <h3 className="text-2xl font-bold text-blue-600">
              {step.title}
            </h3>

            <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
              {step.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default RoadmapSection;