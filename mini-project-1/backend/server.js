import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js"
import express from "express";
import path from "path";

import dotenv from "dotenv";
dotenv.config();

const app = express()
app.use(express.json())
app.use(express.static(path.join(process.cwd(), "../frontend")))

app.use(contactRoutes)

mongoose.connect(process.env.MONGO_DB_URI)
.then(() => {
    console.log("mongoDB connected successfully")
})
.catch((error) =>{
    console.log("mongoDB connection fail", error.message);
})

app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000")
})