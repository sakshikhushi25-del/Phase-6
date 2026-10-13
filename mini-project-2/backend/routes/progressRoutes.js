import express from "express";
import { addProgress, getProgress } from "../controllers/progressController.js";
const router = express.Router();

router.post("/progress", addProgress);

router.get("/progress", getProgress);

export default router;