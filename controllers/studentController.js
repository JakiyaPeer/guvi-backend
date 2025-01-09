import Lesson from '../models/Lesson.js';

export const getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find({ student: req.user.id });
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const bookLesson = async (req, res) => {
  const { tutor, date, time } = req.body;
  try {
    const lesson = new Lesson({ tutor, student: req.user.id, date, time });
    await lesson.save();
    res.status(201).json(lesson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
