import { useState } from "react";
import { motion } from "framer-motion";

function FAQ() {
  const faqs = [
    {
      question: "Is PlacementPrep free to use?",
      answer: "Yes. You can create notes, track progress and prepare for placements completely free.",
    },
    {
      question: "Which companies can I prepare for?",
      answer: "TCS, Infosys, Accenture, Wipro, Capgemini, Cognizant, Deloitte and many more.",
    },
    {
      question: "Can I access my notes anywhere?",
      answer: "Yes. Your notes are securely stored in MongoDB and available after login.",
    },
    {
      question: "Does it support dark mode?",
      answer: "Yes. The entire application supports both Light and Dark mode.",
    },
  ];

  const [open, setOpen] = useState(null);

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">

      <h2 className="text-5xl font-bold text-center mb-4 dark:text-white">
        Frequently Asked Questions
      </h2>

      <p className="text-center text-gray-500 dark:text-gray-400 mb-14">
        Everything you need to know.
      </p>

      <div className="space-y-5">

        {faqs.map((faq, index) => (

          <motion.div
            key={index}
            whileHover={{ scale: 1.01 }}
            className="
            bg-white/70
            dark:bg-gray-900/70
            backdrop-blur-xl
            rounded-2xl
            border
            border-white/30
            shadow-lg
            overflow-hidden
            "
          >

            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="w-full text-left p-6 font-semibold flex justify-between items-center"
            >
              {faq.question}

              <span className="text-2xl">
                {open === index ? "−" : "+"}
              </span>

            </button>

            {open === index && (

              <div className="px-6 pb-6 text-gray-600 dark:text-gray-300">
                {faq.answer}
              </div>

            )}

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;