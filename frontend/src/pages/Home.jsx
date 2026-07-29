import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedBackground from "../components/landing/AnimatedBackground";
import { TypeAnimation } from "react-type-animation";
import StatsSection from "../components/landing/StatsSection";
import CompanyMarquee from "../components/landing/CompanyMarquee";
import AuroraBackground from "../components/landing/AuroraBackground";
import MouseSpotlight from "../components/landing/MouseSpotlight";
import HeroIllustration from "../components/landing/HeroIllustration";
import RoadmapSection from "../components/landing/RoadmapSection";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
function Home() {

  const navigate = useNavigate();

  const features = [
    {
      title: "Secure Login",
      desc: "JWT authentication keeps your preparation data safe.",
      icon: "🔐"
    },
    {
      title: "Smart Notes",
      desc: "Create, organize and manage placement notes easily.",
      icon: "📝"
    },
    {
      title: "Track Progress",
      desc: "Monitor your preparation journey from one dashboard.",
      icon: "📊"
    }
  ];


  return (
    <div
    className="
 relative
 overflow-hidden
    min-h-screen
    bg-gradient-to-br
    from-blue-50
    via-indigo-50
    to-purple-50
    dark:from-gray-950
    dark:via-gray-900
    dark:to-gray-950
     transition-colors
      duration-300
    "
  
>
    
<AuroraBackground />
 <MouseSpotlight /> 
<div className="relative z-10">

      {/* Hero Section */}

      <section
  className="
  max-w-7xl
  mx-auto
  px-8
  pt-40
  py-24
  grid
  lg:grid-cols-2
  gap-16
  items-center
  "
>


        {/* Left Content */}

        <motion.div
          initial={{opacity:0, x:-50}}
          animate={{opacity:1, x:0}}
          transition={{duration:0.8}}
        >
          <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2 }}
  className="
  inline-flex
  items-center
  gap-2
  px-5
  py-2
  rounded-full
  bg-blue-100
  dark:bg-blue-900/40
  text-blue-700
  dark:text-blue-300
  font-medium
  mb-6
  "
>
  🚀 Trusted by Placement Aspirants
</motion.div>

 <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight">
  Crack Your

  <span
    className="
    block
    bg-gradient-to-r
    from-blue-600
    via-indigo-600
    to-purple-600
    bg-clip-text
    text-transparent
    "
  >
    Dream Placement
  </span>
</h1>


          <p
  className="
  mt-8
  text-xl
  text-gray-600
  dark:text-gray-300
  leading-8
  max-w-xl
  "
>
  Organize your notes, monitor your progress, prepare for coding,
  aptitude and interviews—all in one beautiful platform built for
  students aiming at top companies.
</p>
<div className="mt-8 text-2xl font-semibold text-blue-600 dark:text-blue-400">
  <TypeAnimation
    sequence={[
      "Preparing for TCS Digital...",
      2000,
      "Preparing for Infosys...",
      2000,
      "Preparing for Accenture...",
      2000,
      "Preparing for Wipro...",
      2000,
      "Preparing for Capgemini...",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</div>


        <div className="mt-10 flex flex-wrap gap-5">

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => navigate("/login")}
    className="
px-10
py-4
rounded-2xl
bg-gradient-to-r
from-blue-600
via-indigo-600
to-purple-600
text-white
font-semibold
shadow-xl
hover:shadow-2xl
hover:scale-105
transition-all
duration-300
"
  >
    🚀 Start Preparing
  </motion.button>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => navigate("/register")}
   className="
px-10
py-4
rounded-2xl
bg-white/70
dark:bg-gray-900/70
backdrop-blur-xl
border
border-gray-300
dark:border-gray-700
text-blue-600
dark:text-blue-400
font-semibold
shadow-lg
hover:shadow-xl
hover:-translate-y-1
transition-all
duration-300
"
  >
    Create Account
  </motion.button>

</div>
<div className="mt-10">
  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
    Prepare for top recruiters
  </p>

  <div className="flex flex-wrap gap-3">
    {["TCS", "Infosys", "Accenture", "Wipro", "Capgemini"].map((company) => (
      <motion.div
  key={company}
  whileHover={{
    y: -5,
    scale: 1.05,
  }}
        className="
          px-4
          py-2
          rounded-full
          bg-white/80
          dark:bg-gray-800/70
          backdrop-blur-x1
          border
          border-gray-200
          dark:border-gray-700
          text-sm
          font-semibold
          shadow-lg
        "
      >
        {company}
      </motion.div>
    ))}
  </div>
</div>


        </motion.div>




        {/* Floating Dashboard Preview */}


   {/* Hero Illustration */}

<div
  className="
  flex
  justify-center
  items-center
  w-full
  lg:min-h-[520px]
  "
>
  <HeroIllustration />
</div>

      </section>
      <StatsSection />
      
    <CompanyMarquee /> 
    <RoadmapSection />
    <Testimonials />
    <FAQ />


</div>


      {/* Features Section */}


      <section className="max-w-7xl mx-auto px-6 pb-20">


        <h2
  className="
  text-5xl
  font-extrabold
  text-center
  mb-14
  bg-gradient-to-r
  from-blue-600
  to-purple-600
  bg-clip-text
  text-transparent
"
>
  Everything You Need To Crack Placements
</h2>



        <div className="grid md:grid-cols-3 gap-8">


        {
          features.map((feature,index)=>(

            <motion.div
  key={index}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    delay: index * 0.2,
    duration: 0.6,
  }}
  whileHover={{
    y: -12,
    scale: 1.03,
    rotateX: 4,
    rotateY: 4,
  }}
  className="
    group
    relative
    overflow-hidden
    rounded-3xl
    p-8
    bg-white/70
    dark:bg-gray-900/70
    backdrop-blur-xl
    border
    border-white/30
    shadow-xl
    transition-all
  "
>
  {/* Glow Effect */}
  <div
    className="
      absolute
      inset-0
      opacity-0
      group-hover:opacity-100
      transition
      duration-500
      bg-gradient-to-br
      from-blue-500/10
      via-purple-500/10
      to-pink-500/10
    "
  />

  <div className="relative z-10">

    <div className="text-6xl mb-6">
      {feature.icon}
    </div>

    <h3 className="text-2xl font-bold text-blue-600">
      {feature.title}
    </h3>

    <p className="mt-4 text-gray-600 dark:text-gray-300 leading-7">
      {feature.desc}
    </p>

  </div>
</motion.div>


          ))
        }


        </div>


      </section>
     <footer
  className="
  mt-24
  bg-gradient-to-r
  from-slate-900
  via-gray-900
  to-black
  text-white
  "
>
  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-4 gap-10">

      {/* Brand */}

      <div>

        <h2 className="text-3xl font-bold text-blue-400">
          PlacementPrep
        </h2>

        <p className="mt-4 text-gray-400 leading-7">
          Your complete placement preparation platform for coding,
          aptitude, notes and interview preparation.
        </p>

      </div>

      {/* Quick Links */}

      <div>

        <h3 className="text-xl font-semibold mb-5">
          Quick Links
        </h3>

        <ul className="space-y-3 text-gray-400">

          <li>Home</li>
          <li>Dashboard</li>
          <li>Profile</li>
          <li>Login</li>

        </ul>

      </div>

      {/* Top Companies */}

      <div>

        <h3 className="text-xl font-semibold mb-5">
          Top Recruiters
        </h3>

        <ul className="space-y-3 text-gray-400">

          <li>TCS</li>
          <li>Infosys</li>
          <li>Accenture</li>
          <li>Capgemini</li>
          <li>Wipro</li>

        </ul>

      </div>

      {/* Contact */}

      <div>

        <h3 className="text-xl font-semibold mb-5">
          Contact
        </h3>

        <p className="text-gray-400">
          📧 sourabh@example.com
        </p>

        <p className="mt-3 text-gray-400">
          📍 India
        </p>

      </div>

    </div>

    <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">

      © 2026 PlacementPrep • Built with React, Node.js, Express & MongoDB

    </div>

  </div>

</footer>


    </div>
  );
}


export default Home;