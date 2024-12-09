import Payement from "../models/Payement.js";



import Razorpay from "razorpay";



 export const razorpay = new Razorpay({
    key_id: 'your_key_id',
    key_secret: 'your_key_secret',
  });
  export  const createpayement=async(req,res)=>{
    const { amount } = req.body;
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to smallest currency unit
      currency: 'INR',
    });
    res.json(order);
  };
  
  export default Payement;// For CommonJS

  
