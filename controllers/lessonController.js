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
    const lessons = await Lesson.find()
      

    res.status(200).json(lessons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};





/*export const updateLesson = async (req, res) => {
  try {
    const lesson = await recepies.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!lesson) return res.status(404).json({ message: 'lesson  not found' });
    res.status(200).json(lesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};*/
export const updateLesson = async (req, res) => {
  try {
    const { lessonId } = req.params;
    const updateData = req.body;

    // Validate input (optional but recommended)
    if (updateData.status && !["scheduled", "completed", "canceled"].includes(updateData.status)) {
      return res.status(400).json({ error: "Invalid status value" });
    }

    // Find and update the lesson
    const updatedLesson = await Lesson.findByIdAndUpdate(
      lessonId,
      updateData,
      { new: true, runValidators: true }
    );

    // Check if lesson exists
    if (!updatedLesson) {
      return res.status(404).json({ error: "Lesson not found" });
    }

    // Return the updated lesson
    res.status(200).json(updatedLesson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while updating the lesson" });
  }
};