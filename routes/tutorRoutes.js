import express from 'express';
import { createTutor, getTutors, updateAvailability } from '../controllers/tutorController.js';


const router = express.Router();

// Create a new tutor
//router.post('/', createTutor);
router.post('/',createTutor);

// Get all tutors with optional filters
//router.get('/', getTutors);
router.get('/',getTutors)
// Update tutor availability
//router.put('/:id/availability', updateAvailability);
router.put('/:id/availability',updateAvailability);
export default router;
