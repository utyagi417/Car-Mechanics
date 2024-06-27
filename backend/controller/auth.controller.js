import User from "../Models/User.model.js";
import generateTokenAndSetCookie from "../generateJWT.js";
import bcrypt from "bcrypt";


const verifyLoginUserDetails = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = emailRegex.test(email);

    if(isValidEmail && password.length >= 6 ){
        return true;
    }else{
        return false;
    }
}

export const Login = (req, res) => {
    const {email, password} = req.body;
    if(!verifyLoginUserDetails(email, password)) {
        return res.status(500).json({error: "Invalid email or password"});
    }

    User.findOne({ email: email })
    .then(user => {
        if (!user) {
            return res.status(200).json({ error: "Account not found" });
        }else{
            bcrypt.compare(password, user.password)
            .then(isPasswordCorrect => {
                if(!isPasswordCorrect) {
                    return res.status(403).json({ error: "Wrong Password"});
                }else{
                    generateTokenAndSetCookie(user._id, res);
                    return res.status(200).json(user);
                }
            })
        }
    })
    .catch(error => {
        console.log("Error in [Login]", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    });
};

const verifySignUpUserDetails = (username, email, password, confirm_password) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValidEmail = emailRegex.test(email);
    const passwordMatches = password === confirm_password;

    if(username.length >= 4 &&isValidEmail && password.length >= 6 && passwordMatches){
        return true;
    }else{
        return false;
    }
}

export const SignUp = (req, res) => {

    const {username, email, password, confirm_password} = req.body;

    if(!verifySignUpUserDetails(username,email, password, confirm_password)) {
        return res.status(500).json({error: "Invalid email or password"});
    }

    User.findOne({ email: email })
        .then(async (user) => {
            if (user) {
                return res.status(200).json({ error: "Account already exists" });
            } else {
                const salt = await bcrypt.genSalt(10);
                return bcrypt.hash(password, salt);
            }
        })
        .then(hashedPassword => {
            return User.create({ username, email, password:hashedPassword });
        })
        .then(newUser => {
            // Save the new user
            return newUser.save();
        })
        .then(newUser => {
            // Return the new user in the response
            generateTokenAndSetCookie(newUser._id, res);
            return res.status(200).json(newUser);
        })
        .catch(error => {
            console.log("Error in [SignUp]", error.message);
            return res.status(500).json({ error: "Internal Server Error" });
        });

};


    
export const Logout = (req, res) => {
    res.cookie("SecureApp_v2_AuthToken", "", { maxAge: 0 });
    return res.status(200).json({ message: "Logged out successfully" });
};

