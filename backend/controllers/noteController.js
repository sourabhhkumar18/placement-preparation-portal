const Note = require("../models/Note");

// =========================
// Create Note
// =========================
const createNote = async (req, res) => {
  try {
    const {
      title,
      content,
      category,
      priority,
      pinned
    } = req.body;

    const note = await Note.create({
      title,
      content,
      category,
      priority,
      pinned,
      user: req.user.id,
    });

    res.status(201).json({
      message: "Note Created Successfully",
      note,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// Get All Notes
// =========================
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({
      user: req.user.id,
    }).sort({
      pinned: -1,
      updatedAt: -1,
    });

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// Get Single Note
// =========================
const getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note Not Found",
      });
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// Update Note
// =========================
const updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note Not Found",
      });
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;
    note.category = req.body.category || note.category;
    note.priority = req.body.priority || note.priority;

    if (typeof req.body.pinned === "boolean") {
      note.pinned = req.body.pinned;
    }

    const updatedNote = await note.save();

    res.status(200).json({
      message: "Note Updated Successfully",
      note: updatedNote,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// Delete Note
// =========================
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note Not Found",
      });
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    await note.deleteOne();

    res.status(200).json({
      message: "Note Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// =========================
// Toggle Pin
// =========================
const togglePin = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note Not Found",
      });
    }

    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    note.pinned = !note.pinned;

    await note.save();

    res.status(200).json({
      message: note.pinned ? "Note Pinned" : "Note Unpinned",
      note,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
  togglePin,
};