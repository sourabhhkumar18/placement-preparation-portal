import AnimatedCounter from "./AnimatedCounter";
import { useInView } from "react-intersection-observer";


function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const stats = [
    {
      number: 15000,
      suffix: "+",
      title: "Notes Created",
    },
    {
      number: 5000,
      suffix: "+",
      title: "Students",
    },
    {
      number: 120,
      suffix: "+",
      title: "Companies",
    },
    {
      number: 98,
      suffix: "%",
      title: "Success Rate",
    },
  ];

  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="
            bg-white/80
            dark:bg-gray-900/70
            backdrop-blur-xl
            rounded-3xl
            p-8
            shadow-xl
            border
            border-white/30
            text-center
            "
          >
           <h2 className="text-5xl font-bold text-blue-600">
  <AnimatedCounter end={stat.number} />
{stat.suffix}
</h2>

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              {stat.title}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}

export default StatsSection;