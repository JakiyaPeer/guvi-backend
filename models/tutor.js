import mongoose from "mongoose";



// Define the Tutor schema
const tutorSchema =  new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    ratings: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    availability: {
      type: [Date], // List of available time slots
      default: [],
    },
    qualifications: {
      type: String,
    },
    experience: {
      type: String, // e.g., "5 years experience teaching math"
    },
    reviews: [
      {
        studentName: String,
        feedback: String,
        rating: {
          type: Number,
          min: 0,
          max: 5,
        },
      },
    ],
    earnings: {
      type: Number,
      default: 0, // Track total earnings for the tutor
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Export the Tutor model
const Tutor = mongoose.model("Tutor", tutorSchema);

export default Tutor;
