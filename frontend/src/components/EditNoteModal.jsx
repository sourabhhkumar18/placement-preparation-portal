import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";


function EditNoteModal({
  isOpen,
  note,
  onClose,
  onUpdate
}) {

  const [formData, setFormData] = useState({
    title:"",
    content:"",
    category:"",
    priority:"",
  });


  useEffect(() => {

    if(note){
      setFormData({
        title: note.title,
        content: note.content,
        category: note.category,
        priority: note.priority,
      });
    }

  },[note]);


  if(!isOpen || !note)
    return null;



  const handleChange = (e)=>{

    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });

  };



  const handleSubmit=(e)=>{

    e.preventDefault();

    onUpdate(note._id, formData);

  };



  return (

    <div className="
      fixed inset-0 
      bg-black/60 
      backdrop-blur-sm
      flex items-center justify-center
      z-50
      px-4
    ">


      <div className="
        bg-white 
        dark:bg-gray-900
        rounded-2xl
        p-8
        w-full
        max-w-xl
      ">


        <div className="flex justify-between mb-6">

          <h2 className="text-2xl font-bold dark:text-white">
            Edit Note
          </h2>


          <button onClick={onClose}>
            <FaTimes/>
          </button>

        </div>



        <form onSubmit={handleSubmit}>


          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded-lg border"
            placeholder="Title"
          />



          <textarea

            name="content"
            value={formData.content}
            onChange={handleChange}

            className="
              w-full
              p-3
              mb-4
              rounded-lg
              border
              h-40
            "

            placeholder="Content"

          />



          <input

            name="category"
            value={formData.category}
            onChange={handleChange}

            className="w-full p-3 mb-4 rounded-lg border"

            placeholder="Category"

          />



          <select

            name="priority"
            value={formData.priority}
            onChange={handleChange}

            className="w-full p-3 mb-5 rounded-lg border"

          >

            <option>Low</option>
            <option>Medium</option>
            <option>High</option>

          </select>



          <button

            className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-xl
            w-full
            "

          >

            Update Note

          </button>


        </form>


      </div>


    </div>

  );

}


export default EditNoteModal;