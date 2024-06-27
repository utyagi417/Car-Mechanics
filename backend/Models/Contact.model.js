import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    queries: [{
        subject:{
            type: String,
            required: true
        },
        description:{
            type: String,
            required: true
        }
    }]
}, {timestamps: true});


const Contact = mongoose.model("Contact", contactSchema);

export default Contact;