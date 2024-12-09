import express from 'express';
import { createpayement } from '../controllers/payementController.js';



const router = express.Router();
router.post("/createPayment",createpayement)




export default router;