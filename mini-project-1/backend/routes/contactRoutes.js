import express from "express";
import Contact from "../models/contact.js";

const router = express.Router();

router.post("/contacts", async(req, res) => {
    const contact = new Contact(req.body);
    await contact.save();
    res.send("Contact saved successfully")
})

router.get("/contacts", async(req, res) =>{
    const contacts = await Contact.find();
    res.json(contacts);
})

export default router;