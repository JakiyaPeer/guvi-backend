import Lesson from '../models/Lesson.js';

 export const createLesson = async (req, res) => {
    const { tutorId, studentId, date } = req.body;
    try {
        const lesson = new Lesson({ tutorId, studentId, date });
        await lesson.save();
        res.status(201).json(lesson);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

 export const getLessons = async (req, res) => {
    try {
        const lessons = await Lesson.find({}).populate('tutorId studentId');
        res.status(200).json(lessons);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};






