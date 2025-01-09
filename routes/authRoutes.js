import express from "express";
import { loginUser, registerUser, getUserById } from "../controllers/authController.js";



const router = express.Router();
router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/users/:id", getUserById)

export default router;