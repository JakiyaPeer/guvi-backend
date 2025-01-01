// server/routes/courseRoutes.js
import express from "express";
import Course from '../models/Course.js';

const router = express.Router();

// Create a new course
router.post('/', async (req, res) => {
    try {
        const course = new Course(req.body);
        const savedCourse = await course.save();
        res.status(201).json(savedCourse);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find().populate('tutor' );
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get a specific course by ID
router.get('/:id', async (req, res) => {
    try {
        const course = await Course.findById(req.params.id).populate('tutor', 'name');
        if (!course) return res.status(404).json({ message: 'Course not found' });
        res.json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update a course
router.put('/:id', async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
        res.json(updatedCourse);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a course
router.delete('/:id', async (req, res) => {
    try {
        const deletedCourse = await Course.findByIdAndDelete(req.params.id);
        if (!deletedCourse) return res.status(404).json({ message: 'Course not found' });
        res.json({ message: 'Course deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
export default router;
