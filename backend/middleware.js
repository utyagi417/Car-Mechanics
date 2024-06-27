import jwt from 'jsonwebtoken';
import User from './Models/User.model.js';


const protectRoute = async (req, res, next) => {

    try {
        const token = req.cookies.SecureApp_v2_AuthToken;
        if (!token) {
            return res.status(403).json({ error: 'Unauthorized: No token provided' });
        }

        const decode = jwt.decode(token, process.env.JWT_SECRET_KEY);
        if (!decode) {
            return res.status(403).json({ error: 'Unauthorized: Invalid Token' });
        }

        const user = await User.findById(decode.userId).select("-password");

        if(!user){
            return res.status(403).json({ error: 'Unauthorized User' });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error("Error in protectRoute", error.message);
        return res.status(500).json({error: "Internal Server Error"});
    }

};

export default protectRoute;