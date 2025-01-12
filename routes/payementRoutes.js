import express from 'express';
import Razorpay from 'razorpay';
import Payement from '../models/Payement.js'; // Assuming this is your payment model schema

const router = express.Router();

// Initialize Razorpay instance
export const razorpay = new Razorpay({
  key_id: 'your_key_id',
  key_secret: 'your_key_secret',
});

// Create Payment Order
export const createPayment = async (req, res) => {
  const { amount } = req.body;
  
  if (!amount) {
    return res.status(400).json({ message: 'Amount is required' });
  }

  try {
    const order = await razorpay.orders.create({
      amount: amount * 100, // Convert to the smallest currency unit (paisa for INR)
      currency: 'INR',
      receipt: `receipt_order_${new Date().getTime()}`,
    });
    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating payment order:', error);
    res.status(500).json({ message: 'Unable to create payment order', error });
  }
};

// Verify Payment (Optional)
export const verifyPayment = (req, res) => {
  const { order_id, payment_id, signature } = req.body;

  // Use Razorpay's SDK or manual verification here
  // Example for manual verification (check signature matching):
  const crypto = require('crypto');
  const body = order_id + '|' + payment_id;

  const expectedSignature = crypto.createHmac('sha256', razorpay.key_secret)
                                   .update(body.toString())
                                   .digest('hex');

  if (expectedSignature === signature) {
    res.json({ message: 'Payment verified successfully' });
  } else {
    res.status(400).json({ message: 'Payment verification failed' });
  }
};

// Routes
router.post('/create-order', createPayment);
router.post('/verify-payment', verifyPayment);

export default router;
