import mongoose from "mongoose";

 export const PaymentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['success', 'failed'], default: 'success' },
    paymentMethod: { type: String, default: 'Razorpay' }
});


const Payement=mongoose.model("Payement",PaymentSchema)
export default Payement;