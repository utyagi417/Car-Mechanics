import express from "express";
import { Login, SignUp, Logout } from "../controller/auth.controller.js";


const router = express.Router();


router.post('/login', Login);
router.post('/signup', SignUp);
router.get('/logout', Logout);



export default router ; 