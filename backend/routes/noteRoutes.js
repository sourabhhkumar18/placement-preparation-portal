const express = require("express");
const router = express.Router();

const {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
  togglePin,
} = require("../controllers/noteController");

const protect = require("../middleware/authMiddleware");

// Create Note
router.post("/", protect, createNote);

// Get All Notes
router.get("/", protect, getNotes);

// Get Single Note
router.get("/:id", protect, getNoteById);

// Update Note
router.put("/:id", protect, updateNote);

// Delete Note
router.delete("/:id", protect, deleteNote);

// Pin / Unpin Note
router.patch("/:id/pin", protect, togglePin);

module.exports = router;