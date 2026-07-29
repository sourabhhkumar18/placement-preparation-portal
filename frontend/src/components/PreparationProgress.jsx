import { motion } from "framer-motion";

function PreparationProgress() {

  const progress = [
    {
      name: "DSA",
      value: 80
    },
    {
      name: "Java",
      value: 70
    },
    {
      name: "Aptitude",
      value: 90
    },
    {
      name: "Interview Preparation",
      value: 50
    }
  ];


  return (

    <motion.div

      initial={{
        opacity:0,
        y:30
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:0.5
      }}

    className="
bg-white/80
dark:bg-gray-900/80
backdrop-blur-xl
rounded-2xl
shadow-xl
p-6
border
border-white/30
dark:border-gray-700
"

    >

      <h2 className="
      text-2xl
      font-bold
      mb-6
      text-gray-800
      dark:text-white
      ">
        Placement Preparation Progress 🚀
      </h2>


      <div className="space-y-6">


      {
        progress.map((item,index)=>(

          <div key={index}>


            <div className="
            flex
            justify-between
            mb-2
            font-medium
            text-gray-700
            dark:text-gray-300
            ">

              <span>
                {item.name}
              </span>

              <span>
                {item.value}%
              </span>

            </div>



             <div className="
w-full
h-3
bg-gray-200/80
dark:bg-gray-700
rounded-full
overflow-hidden
shadow-inner
">


              <motion.div

  initial={{
    width:0
  }}

  animate={{
    width:`${item.value}%`
  }}

  transition={{
    duration:1.2,
    delay:index*0.2,
    ease:"easeOut"
  }}

  className="
  h-full
  bg-gradient-to-r
  from-blue-500
  to-indigo-600
  rounded-full
  relative
  "

>

  <div
    className="
    absolute
    right-0
    top-0
    h-full
    w-4
    bg-white/40
    rounded-full
    "
  />

</motion.div>


            </div>


          </div>

        ))
      }


      </div>


    </motion.div>

  );
}


export default PreparationProgress;