import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-xl transition-all duration-300 font-medium ${
      isActive
        ? "bg-blue-600 text-white shadow-lg"
        : "text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-gray-800"
    }`;

  return (
    <motion.nav
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
      fixed
      top-5
      left-1/2
      -translate-x-1/2
      w-[95%]
      max-w-7xl
      z-50

      bg-white/70
      dark:bg-gray-900/70

      backdrop-blur-xl

      border
      border-white/30
      dark:border-gray-700

      rounded-2xl

      shadow-2xl

      px-8
      py-4

      flex
      justify-between
      items-center
      "
    >
      {/* Logo */}

      <NavLink to="/">
        <motion.h1
          whileHover={{
            scale: 1.05,
            rotate: -2,
          }}
          className="
          text-3xl
          font-extrabold
          bg-gradient-to-r
          from-blue-600
          via-indigo-600
          to-purple-600
          bg-clip-text
          text-transparent
          "
        >
          PlacementPrep
        </motion.h1>
      </NavLink>

      {/* Navigation */}

      <div className="flex items-center gap-4">

        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>

        {token ? (
          <>
            <NavLink to="/dashboard" className={navLinkClass}>
              Dashboard
            </NavLink>

            <NavLink to="/profile" className={navLinkClass}>
              Profile
            </NavLink>
            <button
  onClick={toggleTheme}
  className="
  p-3
  rounded-xl
  bg-gray-200
  dark:bg-gray-800
  hover:scale-105
  transition
  "
>
  {darkMode ? <FaSun /> : <FaMoon />}
</button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={logout}
              className="
              px-5
              py-2
              rounded-xl
              bg-gradient-to-r
              from-red-500
              to-red-600
              text-white
              shadow-lg
              "
            >
              Logout
            </motion.button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={navLinkClass}>
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="
              px-5
              py-2
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              text-white
              shadow-lg
              hover:scale-105
              transition
              "
            >
              Register
            </NavLink>
          </>
        )}

      </div>
    </motion.nav>
  );
}

export default Navbar;