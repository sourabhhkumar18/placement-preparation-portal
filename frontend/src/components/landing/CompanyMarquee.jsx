import { motion } from "framer-motion";

function CompanyMarquee() {
  const companies = [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Capgemini",
    "Cognizant",
    "IBM",
    "Deloitte",
    "HCL",
    "Tech Mahindra",
  ];

  return (
    <section className="py-16 overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-10 dark:text-white">
        Prepare For Top Companies
      </h2>

      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...companies, ...companies].map((company, index) => (
          <div
            key={index}
            className="
              px-8
              py-4
              rounded-2xl
              bg-white
              dark:bg-gray-800
              shadow-lg
              border
              border-gray-200
              dark:border-gray-700
              text-xl
              font-bold
              text-blue-600
              whitespace-nowrap
            "
          >
            {company}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default CompanyMarquee;