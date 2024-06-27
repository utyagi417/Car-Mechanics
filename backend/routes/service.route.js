import express from 'express';
import { newBooking, checkout, verification } from '../controller/service.controller.js';

const router = express.Router();

router.post('/checkout/xz98ty33ch92sr', checkout);
router.post('/verification/xz98yu32vf92sr', verification);
router.post('/new-booking/xz98rt32nb92sr', newBooking);



export default router;