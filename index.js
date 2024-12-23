import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbconfig.js";





dotenv.config();
const app=express();
import authRoutes from "./routes/authRoutes.js";
import lessonRoutes from "./routes/lessonRoutes.js";
import payementRoutes from "./routes/payementRoutes.js";
import tutorRoutes from "./routes/tutorRoutes.js"




app.use(express.json());
app.use(cors());
connectDB();

app.use("/api/auth",authRoutes)
app.use("/api/lessons",lessonRoutes)
app.use("api/auth",payementRoutes)
app.use("/api/tutors",tutorRoutes)
///api/lessons/lesson/6756a5873b88be36fe6f5b0


app.get("/", (req,res)=>{
res.status(200).send("welcome to our api");
});


const port=process.env.PORT || 4000;


app.listen(port,()=>{
    console.log("server started and running on the port");
});

