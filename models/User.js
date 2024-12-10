import mongoose from 'mongoose';



const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'tutor'], required: true },
    profile: {
        bio: String,
        qualifications: String,
        ratings: { type: Number, default: 0 }
    }
});



const User=mongoose.model("users",UserSchema)
export default User;
