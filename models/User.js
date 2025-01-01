import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the User Schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['student', 'tutor', ], // Enforce allowed roles
      default: 'student',
    },
    token: {
      type: String,
      default: null,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Pre-save middleware to hash passwords if they are new or modified
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next(); // Skip if the password hasn't been modified
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Export the User model
const User = mongoose.model('User', userSchema);
export default User;
