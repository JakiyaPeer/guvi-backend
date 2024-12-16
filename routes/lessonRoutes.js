import express from "express";
import { createLesson, getLessons,  } from "../controllers/lessonController.js";

const router = express.Router();

// Route to create a new lesson
router.post("/lessons", createLesson);

// Route to get all lessons
router.get("/lessons", getLessons);



export default router;
