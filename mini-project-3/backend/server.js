import mongoose from "mongoose";
import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import path from "path";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(process.cwd(), "../frontend")));

app.use("/api",notesRoutes);

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((error) => {
    console.log("MongoDB connection fail", error.message);
})

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000")
})