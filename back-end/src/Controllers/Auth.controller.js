const authModel = require("../Models/Auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


//register user

const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const existingUser = await authModel.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedpassword = await bcrypt.hash(password, 10)

        const newUser = await authModel.create({ name, email, password: hashedpassword })


        if (!newUser) return res.status(400).json({
            success: false,
            message: "user not created",
            data: null
        })

        const token = jwt.sign(
            { id: newUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        res.cookie("registerToken", token, {
            httpOnly: true
        });

        res.status(201).json({
            success: true,
            message: "user created sucessfully",
            data: newUser
        })


    } catch (err) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            data: null
        })
    }

}

// login user 

const loginUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        const getUser = await authModel.findOne({ email });

        if (!getUser) return res.status(400).json({
            success: false,
            message: "user not found"
        })

        const verifypassword = await bcrypt.compare(password, getUser.password);

        if (!verifypassword) return res.status(401).json({
            success: false,
            message: "invalid credentials",
            data: getUser
        })

        const token = jwt.sign(
            { id: getUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        res.cookie("loginToken", token, {
            httpOnly: true
        });

        res.status(200).json({
            success: true,
            message: "user loggedin sucessfully",
            data: getUser
        })

    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "internal server error",
            data: null
        })
    }

}

// logout user

const logoutUser = (req, res) => {

    res.clearCookie("loginToken", { httpOnly: true });

    res.status(200).json({
        success: true,
        message: "User logged out successfully"
    });

}

module.exports = { registerUser, loginUser, logoutUser }