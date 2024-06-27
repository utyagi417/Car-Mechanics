import express from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import ConnectToDB from './Database/Database.js';

import authRoute from  "./routes/auth.route.js"
import contactRoute from "./routes/contact.route.js";
import serviceRoute from "./routes/service.route.js";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

app.use('/api/auth' , authRoute);
app.use('/api/contact', contactRoute);
app.use('/api/service',serviceRoute);

app.get("/api/getKey", (req, res) => {
    return res.status(200).json({ key: process.env.RAZOR_PAY_KEY })
});



app.listen(PORT , () => {
    ConnectToDB();
    console.log(`listening on ${PORT}`);
})

