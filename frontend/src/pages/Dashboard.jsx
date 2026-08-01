import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import Analytics from "../components/Analytics";
import DashboardHero from "../components/DashboardHero";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import PreparationProgress from "../components/PreparationProgress";
import EditNoteModal from "../components/EditNoteModal";
import EmptyState from "../components/EmptyState";
import FloatingButton from "../components/FloatingButton";
import NoteForm from "../components/NoteForm";
import QuickActions from "../components/QuickActions";
import SkeletonCard from "../components/SkeletonCard";
import ViewNoteModal from "../components/ViewNoteModal";
import { getProfile } from "../services/userService";
import LoadingScreen from "../components/LoadingScreen";
import RecentActivity from "../components/RecentActivity";
import AnalyticsCharts from "../components/dashboard/AnalyticsCharts";
import DailyGoal from "../components/dashboard/DailyGoal";
import StudyStreak from "../components/dashboard/StudyStreak";
import StudyHeatmap from "../components/dashboard/StudyHeatmap";
import Achievements from "../components/dashboard/Achievements";
import { FaCircle } from "react-icons/fa";
import MouseSpotlight from "../components/landing/MouseSpotlight";
import exportNotesPDF from "../utils/exportNotesPDF";
import Footer from "../components/Footer";

import {
    createNote,
    deleteNote,
    getNotes,
    togglePin
} from "../services/noteService";

import CategoryFilter from "../components/CategoryFilter";
import DashboardStats from "../components/DashboardStats";
import NoteCard from "../components/NoteCard";
import SearchBar from "../components/SearchBar";


function Dashboard() {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [category, setCategory] = useState("Java");
  const [priority, setPriority] = useState("Medium");

  const [editingId, setEditingId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
const [noteToDelete, setNoteToDelete] = useState(null);

const formRef = useRef(null);

const [selectedNote, setSelectedNote] = useState(null);
const [showNoteModal, setShowNoteModal] = useState(false);

const [selectedEditNote, setSelectedEditNote] = useState(null);
const [showEditModal, setShowEditModal] = useState(false);


const [filterPriority, setFilterPriority] = useState("All");





 const loadNotes = async () => {
  try {
    const data = await getNotes();
    setNotes(data);
  } catch (error) {
    toast.error("Failed to load notes");
  }
};
 useEffect(() => {
  const loadData = async () => {
    try {
      setLoading(true);

      const profile = await getProfile();
      setUser(profile);

      await loadNotes();
    } catch (error) {
      toast.error("Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  loadData();
}, []);

   

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      if (isEditing) {
        await updateNote(editingId, {
          title,
          content,
          category,
          priority,
        });

        toast.success("Note Updated Successfully");

        setIsEditing(false);
        setEditingId(null);
      } else {
        await createNote({
          title,
          content,
          category,
          priority,
        });

        toast.success("Note Added Successfully");
      }

      setTitle("");
      setContent("");
      setCategory("Java");
      setPriority("Medium");

      await loadNotes();
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

 const handleDelete = (id) => {
  setNoteToDelete(id);
  setShowDeleteModal(true);
};
const confirmDelete = async () => {
  try {
    await deleteNote(noteToDelete);

    toast.success("Note Deleted Successfully");

    await loadNotes();
  } catch (error) {
    toast.error(
      error.response?.data?.message || "Failed to delete note"
    );
  } finally {
    setShowDeleteModal(false);
    setNoteToDelete(null);
  }
};
  const handlePin = async (note) => {
    try {
      await togglePin(note._id);

      toast.success(note.pinned ? "Note Unpinned" : "Note Pinned");

      await loadNotes();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update pin");
    }
  };

 const startEdit = (note) => {

  setSelectedEditNote(note);
  setShowEditModal(true);

};

  const openNote = (note) => {
  setSelectedNote(note);
  setShowNoteModal(true);
};
const closeNote = () => {
    setShowNoteModal(false);
  setSelectedNote(null);
};
const openEditNote = (note) => {

  setSelectedEditNote(note);
  setShowEditModal(true);

};
const updateNote = async (id, updatedData) => {

  try {

    const response = await axios.put(
      `https://placement-preparation-portal-api.onrender.com/api/notes/${id}`,
      updatedData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    );


    // Update note instantly in UI
    setNotes((prevNotes) =>
  prevNotes.map((note) =>
    note._id === id
      ? { ...note, ...updatedData }
      : note
  )
);


    setShowEditModal(false);
    setSelectedEditNote(null);


  } catch(error) {

    console.log("Update Error:", error);

  }

};
  const filteredNotes = useMemo(() => {

  return notes.filter((note) => {

    const matchSearch =
      note.title?.toLowerCase().includes(search.toLowerCase()) ||
      note.content?.toLowerCase().includes(search.toLowerCase());


    const matchCategory =
      filterCategory === "All" ||
      note.category === filterCategory;


    const matchPriority =
      filterPriority === "All" ||
      note.priority === filterPriority;


    return (
      matchSearch &&
      matchCategory &&
      matchPriority
    );

  });

}, [notes, search, filterCategory, filterPriority]);

const totalNotes = notes.length;

const highPriorityNotes = notes.filter(
  (note) => note.priority === "High"
).length;

const pinnedNotes = notes.filter(
  (note) => note.pinned
).length;

const totalCategories = [
  ...new Set(notes.map((note) => note.category))
].length;
const categories = [
  "All",
  ...new Set(
    notes
      .map((note) => note.category)
      .filter(Boolean)
  ),
];
  const scrollToForm = () => {
  formRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  if (loading) {
  return <LoadingScreen />;
}

  return (
  
    

   <div
  className="
  relative
  overflow-hidden
  min-h-screen
  bg-gray-100
  dark:bg-gray-950
  text-gray-900
  dark:text-white
  transition-colors
  duration-300
  "
>
  <div
  className="
  relative
  overflow-hidden
  min-h-screen
  bg-gray-100
  dark:bg-gray-950
  text-gray-900
  dark:text-white
  transition-colors
  duration-300
"
>

<MouseSpotlight />

  {[...Array(18)].map((_, index) => (
  <motion.div
    key={index}
    className="
      absolute
      text-blue-400/20
      pointer-events-none
    "
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={{
      y: [0, -40, 0],
      opacity: [0.2, 0.8, 0.2],
      scale: [0.8, 1.3, 0.8],
    }}
    transition={{
      duration: 4 + Math.random() * 3,
      repeat: Infinity,
      delay: Math.random() * 5,
    }}
  >
    <FaCircle size={8 + Math.random() * 8} />
  </motion.div>
))}
   
  {/* Animated Background */}

  <motion.div
    animate={{
      x: [0, 80, 0],
      y: [0, -60, 0],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
    absolute
    w-96
    h-96
    bg-blue-400/20
    rounded-full
    blur-3xl
    -top-20
    -left-20
    "
  />

  <motion.div
    animate={{
      x: [0, -70, 0],
      y: [0, 70, 0],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
    absolute
    w-96
    h-96
    bg-purple-500/20
    rounded-full
    blur-3xl
    bottom-0
    right-0
    "
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-8 space-y-8"> 
     <motion.div
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.6,
    ease: "easeOut",
  }}
>
  <DashboardHero user={user} />

<motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  whileHover={{
    scale: 1.02,
    y: -3,
  }}
  transition={{ duration: 0.6 }}
  className="
    relative
    overflow-hidden
    rounded-3xl
    p-7
    bg-gradient-to-r
    from-blue-600
    via-indigo-600
    to-purple-600
    text-white
    shadow-2xl
    mb-8
  "
>
  {/* Shimmer Effect */}
  <motion.div
    animate={{ x: [-500, 900] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      top-0
      left-0
      w-40
      h-full
      bg-white/20
      skew-x-12
      blur-md
    "
  />

  <div className="relative z-10">
    <h2 className="text-3xl font-bold">
      🚀 Keep Going, {user?.name?.split(" ")[0]}!
    </h2>

    <p className="mt-2 text-blue-100 text-lg">
      Every note you create brings you one step closer to your dream placement.
    </p>
  </div>

</motion.div>
</motion.div>

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    delay: 0.1,
  }}
>
  <QuickActions
    totalNotes={notes.length}
    pinnedNotes={pinnedNotes}
    highPriorityNotes={highPriorityNotes}
    scrollToForm={scrollToForm}
  />
</motion.div>

{/* Dashboard Stats */}
<motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    delay: 0.15,
  }}
>
  <DashboardStats notes={notes} />
</motion.div>

{/* Analytics Charts */}
<motion.div
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    delay: 0.2,
  }}
>
  <AnalyticsCharts notes={notes} />
</motion.div>

{/* Dashboard Widgets */}
<div className="grid lg:grid-cols-2 gap-8">

  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.25 }}
  >
    <DailyGoal
      completed={pinnedNotes}
      total={totalNotes}
    />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
  >
    <StudyStreak notes={notes} />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.35 }}
  >
    <StudyHeatmap notes={notes} />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <RecentActivity notes={notes} />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.45 }}
  >
    <Achievements notes={notes} />
  </motion.div>

  <motion.div
    initial={{ opacity: 0, y: 25 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
  >
    <PreparationProgress />
  </motion.div>

</div>

{/* Add Note Form */}
<motion.div
  ref={formRef}
  initial={{ opacity: 0, y: 25 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    delay: 0.55,
  }}
>
  <NoteForm
    title={title}
    setTitle={setTitle}
    content={content}
    setContent={setContent}
    category={category}
    setCategory={setCategory}
    priority={priority}
    setPriority={setPriority}
    isEditing={isEditing}
    setIsEditing={setIsEditing}
    setEditingId={setEditingId}
    setTitleState={setTitle}
    setContentState={setContent}
    setCategoryState={setCategory}
    setPriorityState={setPriority}
    handleSubmit={handleSubmit}
  />
</motion.div>


      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.4,
    delay: 0.45,
    ease: "easeOut",
  }}
>
  <SearchBar
    search={search}
    setSearch={setSearch}
  />
</motion.div>

      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.4,
    delay: 0.55,
    ease: "easeOut",
  }}
>
  <CategoryFilter
  category={filterCategory}
  setCategory={setFilterCategory}
  priority={filterPriority}
  setPriority={setFilterPriority}
/>
</motion.div>
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.4,
    delay: 0.6,
  }}
  className="flex justify-end mb-6"
>
  <button
    onClick={() => exportNotesPDF(filteredNotes)}
    className="
      px-6
      py-3
      rounded-xl
      bg-gradient-to-r
      from-red-500
      to-red-600
      text-white
      font-semibold
      shadow-lg
      hover:scale-105
      hover:shadow-red-500/40
      transition-all
      duration-300
    "
  >
    📄 Export Notes PDF
  </button>
</motion.div>


     
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
     <AnimatePresence mode="popLayout">

{
loading ? (

Array.from({length:6}).map((_,index)=>(
  <SkeletonCard key={index}/>
))

) : filteredNotes.length === 0 ? (

<div className="col-span-full">
  <EmptyState scrollToForm={scrollToForm} />
</div>

) : (

filteredNotes.map((note)=>(
<motion.div
key={note._id}
layout
initial={{
 opacity:0,
 y:40,
 scale:0.9
}}
animate={{
 opacity:1,
 y:0,
 scale:1
}}
exit={{
 opacity:0,
 scale:0.8
}}
transition={{
 duration:0.45
}}
>

<NoteCard
note={note}
startEdit={startEdit}
handleDelete={handleDelete}
handlePin={handlePin}
openNote={openNote}
/>

</motion.div>
))

)

}

</AnimatePresence>
        
      </div>
      
    </div>
    
    </div>
    <Footer />
    
     <FloatingButton scrollToForm={scrollToForm} />
     <ViewNoteModal
  isOpen={showNoteModal}
  note={selectedNote}
  onClose={() => setShowNoteModal(false)}
/>
<EditNoteModal
  isOpen={showEditModal}
  note={selectedEditNote}
  onClose={() => setShowEditModal(false)}
  onUpdate={updateNote}
/>
<DeleteConfirmModal
  isOpen={showDeleteModal}
  note={notes.find(
    (note) => note._id === noteToDelete
  )}
  onClose={() => setShowDeleteModal(false)}
  onConfirm={confirmDelete}
/>
  </div>
);
}

export default Dashboard;