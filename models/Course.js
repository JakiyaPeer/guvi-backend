// server/models/Course.js
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    content: String,
    tutor: { type: mongoose.Schema.Types.ObjectId, ref: 'Tutor' }
});

const Course = mongoose.model('Course', courseSchema);
export default Course;
