import User from '../models/user.model.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        //check to see if the user already exists
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ errors: [{ msg: "User already exist" }] });
        } else {
            const hash = await bcrypt.hash(password, 10);
            const newUser = new User({ username, email, password: hash });
            const savedUser = await newUser.save();
            const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: 360000 });
            res.status(200).send({ token });
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (user) {
            if (await bcrypt.compare(password, user.password)) {
                const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET,{ expiresIn: 360000 });
                res.status(200).send({ token });
            } else {
                res.status(400).send("Incorrect password");
            }
        } else {

            res.status(400).send("User does not exist");

        }
    } catch (err) {
        res.status(500).send(err);
    }
}

export { register, login };