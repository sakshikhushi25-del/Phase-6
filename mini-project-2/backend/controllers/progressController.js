import Progress from "../models/progress.js";

async function addProgress(req, res) {
    try{
        const progress = new Progress(req.body)
        await progress.save();
        res.status(201).json({
            message: "Progress added successfully",
            progress: progress
        });
    } catch(error) {
        console.log(error)
        res.status(500).json({
            message: "Failed to add progress",
            error: error.message
        })
    }
}

async function getProgress(req, res) {
    try {
        const progress = await Progress.find();
        res.status(200).json(progress);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Failed to get progress",
            error: error.message
        });
    }
}

export {addProgress, getProgress };