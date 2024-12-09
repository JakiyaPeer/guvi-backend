import mongoose from 'mongoose';

import bcrypt from "bcrypt";

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

// Hash password before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User=mongoose.model("User",UserSchema)
export default User;
