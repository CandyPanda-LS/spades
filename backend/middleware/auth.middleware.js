import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const auth = async (req, res, next) => {
    const token = req.header("x-auth-token");
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET,async (err,decoded)=>{
            if (err) {
                res.status(401).send("Incorrect x-auth-token");
            }else{
                const user = await User.findById(decoded._id);
                if (!user) {
                    res.status(401).send("Unauthorized");
                } else {
                    req.user = user;
                    next();
                }

            }
        });

    } catch (err) {
        res.status(500).send("Server Error");
    }


}
