
import User from "../models/User.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        const hashPassword = await bcryptjs.hash(password, 10);
        //console.log(hashPassword);
        const newUser = new User({ name, email, password: hashPassword, role });
        await newUser.save();
        res
            .status(200)
            .json({ message: "User Registered Successfully", data: newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        //const user = await User.findOne({ email });
        const user = await User.findOne({ email });
        console.log(user.password);

        if (!user) {
            return res.status(404).json({ message: "User Not Found" });
        }



        const passwordMatch = await bcryptjs.compare(password, user.password


        );
        console.log(passwordMatch);


        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
       
        user.token = token;
        await user.save();
        res
            .status(200)
            .json({ message: "User Logged In Successfully", token: token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    
};