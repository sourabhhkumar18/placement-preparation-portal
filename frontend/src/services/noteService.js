import axios from "axios";

const API_URL = "http://localhost:5000/api/notes";

const getToken = () => localStorage.getItem("token");

const config = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const getNotes = async () => {
  const res = await axios.get(API_URL, config());
  return res.data;
};

export const createNote = async (note) => {
  const res = await axios.post(API_URL, note, config());
  return res.data;
};

export const updateNote = async (id, note) => {
  const res = await axios.put(`${API_URL}/${id}`, note, config());
  return res.data;
};

export const deleteNote = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`, config());
  return res.data;
};

export const togglePin = async (id) => {
  const res = await axios.patch(
    `${API_URL}/${id}/pin`,
    {},
    config()
  );
  return res.data;
};