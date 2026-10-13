import express from "express";
import Note from "../models/notes.js";

const router = express.Router();

router.post("/notes", async (req, res) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.status(201).json({
            message: "Note saved successfully",
            Note:note
        })
    } catch (error) {
        res.status(500).json({
            message: "Failed to save note",
            error: error
        })
    }
})

router.get("/notes", async (req, res) => {
    try {
        const note = await Note.find();
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch notes",
            error: error.message
        })
    }
})

export default router;