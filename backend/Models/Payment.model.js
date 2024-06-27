import mongoose from "mongoose";


const paymentSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true
    },
    paymentId: {
        type: String,
        required: true,
        unique: true
    },
    signature: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });



const Payments = mongoose.model("Payments", paymentSchema);


export default Payments;