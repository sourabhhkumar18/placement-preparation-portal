import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
    FaCheckCircle,
    FaEnvelope,
    FaUserCircle,
    FaUserTag,
} from "react-icons/fa";
import LoadingSpinner from "../components/LoadingSpinner";

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const res = await axios.get(
        "https://placement-preparation-portal-api.onrender.com/api/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
  return <LoadingSpinner />;
}

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
      >

        {/* Header */}
<div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-10 text-white">

  <motion.div
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center"
  >

    <img
      src={`https://ui-avatars.com/api/?name=${user.name}&background=2563eb&color=fff&size=200`}
      alt="Profile"
      className="w-32 h-32 rounded-full border-4 border-white shadow-xl"
    />

    <h1 className="text-4xl font-bold mt-5">
      {user.name}
    </h1>

    <p className="mt-2 text-blue-100">
      {user.email}
    </p>

    <div className="flex gap-3 mt-5">

      <span className="bg-white/20 px-4 py-2 rounded-full">
        👨‍🎓 Student
      </span>

      <span className="bg-green-500 px-4 py-2 rounded-full">
        Active
      </span>

    </div>

  </motion.div>

</div>

        {/* Details */}
        <div className="p-8">
            <div className="mb-8 bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-6 border border-blue-200 dark:border-blue-700">

  <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">
    Welcome Back 👋
  </h2>

  <p className="mt-2 text-gray-600 dark:text-gray-300">
    Continue building your placement preparation. Every note brings you one step closer to your dream job.
  </p>

</div>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="
bg-white
dark:bg-gray-800
rounded-2xl
p-6
shadow-md
hover:shadow-xl
hover:-translate-y-1
transition-all
duration-300
">
              <div className="flex items-center gap-3 mb-2">
                <FaEnvelope className="text-blue-600" />
                <h3 className="font-semibold">Email</h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300">
                {user.email}
              </p>
            </div>

            <div className="
bg-white
dark:bg-gray-800
rounded-2xl
p-6
shadow-md
hover:shadow-xl
hover:-translate-y-1
transition-all
duration-300
">
              <div className="flex items-center gap-3 mb-2">
                <FaUserTag className="text-blue-600" />
                <h3 className="font-semibold">Role</h3>
              </div>

              <p className="text-gray-700 dark:text-gray-300 capitalize">
                {user.role}
              </p>
            </div>

            <div className="
bg-white
dark:bg-gray-800
rounded-2xl
p-6
shadow-md
hover:shadow-xl
hover:-translate-y-1
transition-all
duration-300
">
              <h3 className="font-semibold mb-2">
                Account Status
              </h3>

              <div className="flex items-center gap-2 text-green-600">
                <FaCheckCircle />
                Active
              </div>
            </div>

            <div className="
bg-white
dark:bg-gray-800
rounded-2xl
p-6
shadow-md
hover:shadow-xl
hover:-translate-y-1
transition-all
duration-300
">
              <h3 className="font-semibold mb-2">
                Welcome
              </h3>

              <p className="text-gray-700 dark:text-gray-300">
                Keep preparing consistently and track your placement notes.
              </p>
            </div>

          </div>

        </div>

      </motion.div>

    </div>
  );
}

export default Profile;