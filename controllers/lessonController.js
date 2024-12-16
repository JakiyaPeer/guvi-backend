import Lesson from "../models/Lesson.js";

export const createLesson = async (req, res) => {
  const { tutorId, studentId, date } = req.body;

  try {
    const newLesson = new Lesson({ tutorId, studentId, date });
    await newLesson.save();
    res.status(201).json(newLesson);
  } catch (err) {
    res.status(500).json({ error: "Error creating lesson: " + err.message });
  }
};



export const getLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find("tutorId studentId")
      

    res.status(200).json(lessons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

