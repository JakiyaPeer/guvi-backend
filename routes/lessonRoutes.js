import express from 'express';
import { createLesson, getLessons } from '../controllers/lessonController.js';


const router = express.Router();

// Create a new lesson
//router.post('/', createLesson);
router.post("/createLesson",createLesson);
router.get("/getLessons",getLessons);

// Get all lessons


export default router;