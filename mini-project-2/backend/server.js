import express from "express";
import connectDB from "./config/db.js";
import progressRoutes from "./routes/progressRoutes.js";
import cors from "cors";
import path from "path";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(progressRoutes);
app.use(cors());
app.use(express.static(path.join(process.cwd(), "../frontend")));

connectDB()

app.listen("3000", () => {
    console.log("Server is running http://localhost:3000");
})