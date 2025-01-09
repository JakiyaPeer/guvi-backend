import Tutor from "../models/tutor.js";

// Create a new tutor
export const createTutor = async (req, res) => {
  try {
    const tutor = new Tutor(req.body);
    await tutor.save();
    res.status(201).json({ success: true, tutor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all tutors with filters
export const getTutors = async (req, res) => {
  try {
    const { subject, price, ratings } = req.query;
    const query = {};
    if (subject) query.subject = subject;
    if (price) query.price = { $lte: price };
    if (ratings) query.ratings = { $gte: ratings };

    const tutors = await Tutor.find(query);
    res.status(200).json({ success: true, tutors });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update tutor availability
export const updateAvailability = async (req, res) => {
  try {
    const { id } = req.params;
    const { availability } = req.body;
    const tutor = await Tutor.findByIdAndUpdate(
      id,
      { availability },
      { new: true }
    );
    res.status(200).json({ success: true, tutor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
