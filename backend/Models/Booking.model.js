import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    purchasedServices: [{
        serviceName: {
            type: String,
            required: true,
        },
        serviceCharge: {
            type: Number,
            required: true,
        },
    }],
    amount: {
        type: Number,
    },
    discount: {
        type: Number,
    },
    totalAmount: {
        type: Number,
    },
    paymentId: {
        type: String,
        default: null,
        unique: true,
    },
}, { timestamps: true });



const Bookings = mongoose.model('Bookings', bookingSchema);

export default Bookings;