
import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = async (userId, res) => { 
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: "7d"
    })
    res.cookie("SecureApp_v2_AuthToken", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    });
}

export default generateTokenAndSetCookie;