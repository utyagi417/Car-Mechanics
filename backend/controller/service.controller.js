import Bookings from "../Models/Booking.model.js";
import Payments from "../Models/Payment.model.js";

import Razorpay from "razorpay";
import crypto from "crypto"

export const newBooking = async (req, res) => {
    try {
        const {email, purchasedServices, amount,totalAmount,discount,paymentId} = req.body;

        let booking = await Bookings.findOne({paymentId: paymentId});
        if(booking) {
            return res.status(400).json({error: "Already Booked with this payment Id"});
        }

        booking = new Bookings({
            email,
            purchasedServices,
            amount,
            discount,
            totalAmount,
            paymentId,
        })
        
        await booking.save();
        return res.status(200).json(booking);

    } catch (error) {
     console.log("Error on [NEW BOOKING]", error.message);
     return res.status(500).json({error: "Internal Server Error"});   
    }
}

export const checkout = async (req, res) => {
    try {
        const instance = new Razorpay(
        {
            key_id: process.env.RAZOR_PAY_KEY,
            key_secret: process.env.RAZOR_PAY_SECRET_KEY,
        })

        const { amount } = req.body;
        const options = {
            amount: Number(amount * 100),
            currency: "INR",
        }
        instance.orders.create(options, (error, order) => {
            if (error) {
                console.error("Error in [CREATING ORDER]", error);
                return res.status(500).json({ error: "Something went wrong" });
            }
            return res.status(200).json(order);
        });

    } catch (error) {
        console.log("Error in [CHECKOUT CONTROLLER]", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


export const verification = async (req, res) => { 
    try {
        const { razorpay_payment_id, razorpay_order_id , razorpay_signature } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto.createHmac('sha256', process.env.RAZOR_PAY_SECRET_KEY)
            .update(body.toString())
            .digest('hex');
        
        const isAuthenticated = expectedSignature === razorpay_signature;
        if (isAuthenticated) { 

            const payment = await Payments.findOne({ orderId: razorpay_order_id });
            if (payment) {
                return res.status(400).json({ error: "Already exist an Order" });
            }
            const newPayment = new Payments({
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
                signature: razorpay_signature
            })
            await newPayment.save();

            return res.status(200).json(razorpay_payment_id);
        } else {
            return res.status(500).json({ error: "Invalid Signature Sent" });
        } 
        
    } catch (error) {
        console.log("Error in [PAYMENT VERIFICATION]", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}