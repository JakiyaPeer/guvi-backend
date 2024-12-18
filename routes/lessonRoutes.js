import express from "express";
import { createLesson, getLessons, updateLesson,  } from "../controllers/lessonController.js";

const router = express.Router();

// Route to create a new lesson
router.post("/lessons", createLesson);

// Route to get all lessons
router.get("/lessons", getLessons);

router.put("/lesson/:lessonId", updateLesson);



export default router;
