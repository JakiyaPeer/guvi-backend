import mongoose from "mongoose";


const LessonSchema = new mongoose.Schema({
    tutorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['scheduled', 'completed', 'canceled'], default: 'scheduled' },
    recordingUrl: String
});



const Lesson=mongoose.model("Lesson",LessonSchema)
export default Lesson;

