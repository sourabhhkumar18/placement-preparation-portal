import { motion } from "framer-motion";
import { useState } from "react";
import {
    FaEnvelope,
    FaLock,
    FaUser,
    FaUserPlus,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../services/authService";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
  toast.error("Name is required");
  return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
  toast.error("Enter a valid email address");
  return;
}

if (password.length < 6) {
  toast.error("Password must be at least 6 characters");
  return;
}

    setLoading(true);

    try {
      await registerUser({
        name,
        email,
        password,
        role: "student",
      });

      toast.success("Registration Successful!");

      navigate("/login");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
  className="
  min-h-screen
  bg-gradient-to-br
  from-blue-700
  via-indigo-600
  to-purple-700
  flex
  items-center
  justify-center
  px-4
  relative
  overflow-hidden
  "
>
    <motion.div
  animate={{
    y:[0,30,0],
    x:[0,20,0]
  }}
  transition={{
    duration:8,
    repeat:Infinity
  }}
  className="
  absolute
  w-72
  h-72
  bg-white/20
  rounded-full
  blur-3xl
  top-10
  left-10
  "
/>


<motion.div
  animate={{
    y:[0,-30,0],
    x:[0,-20,0]
  }}
  transition={{
    duration:7,
    repeat:Infinity
  }}
  className="
  absolute
  w-80
  h-80
  bg-purple-300/20
  rounded-full
  blur-3xl
  bottom-10
  right-10
  "
/>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
bg-white/80
dark:bg-gray-900/80
backdrop-blur-xl
border
border-white/30
rounded-3xl
shadow-2xl
w-full
max-w-md
p-8
relative
z-10
"
      >

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-blue-700 dark:text-blue-400">
            Create Account
          </h1>

          <p className="text-gray-500 mt-2">
            Start your placement preparation journey
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div className="relative">

            <FaUser className="absolute left-4 top-4 text-gray-400" />

            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="
                w-full
                pl-12
                pr-4
                py-3
                rounded-xl
                border
                focus:ring-2
                focus:ring-blue-500
                outline-none
                dark:bg-gray-800
                dark:text-white
              "
            />

          </div>

          <div className="relative">

            <FaEnvelope className="absolute left-4 top-4 text-gray-400" />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full
                pl-12
                pr-4
                py-3
                rounded-xl
                border
                focus:ring-2
                focus:ring-blue-500
                outline-none
                dark:bg-gray-800
                dark:text-white
              "
            />

          </div>

          <div className="relative">

            <FaLock className="absolute left-4 top-4 text-gray-400" />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="
                w-full
                pl-12
                pr-4
                py-3
                rounded-xl
                border
                focus:ring-2
                focus:ring-blue-500
                outline-none
                dark:bg-gray-800
                dark:text-white
              "
            />

          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{
  scale: 1.03
}}

whileTap={{
  scale: 0.95
}}
            className="
              w-full
              bg-blue-600
              hover:bg-blue-700
              text-white
              py-3
              rounded-xl
              font-semibold
              transition
              flex
              justify-center
              items-center
              gap-2
            "
          >
            <FaUserPlus />

            {loading ? "Creating Account..." : "Register"}
          </motion.button>

        </form>

        <p className="text-center mt-6 text-gray-600 dark:text-gray-400">

          Already have an account?

          <Link
            to="/login"
            className="text-blue-600 font-semibold ml-2 hover:underline"
          >
            Login
          </Link>

        </p>

      </motion.div>

    </div>
  );
}

export default Register;