

import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// ✅ Register a new user
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.json({ success: false, message: 'Missing Details' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user object
        const userData = {
            name,
            email,
            password: hashedPassword
        };

        // Save to DB
        const newUser = new userModel(userData);
        const user = await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        // Respond with token and user name
        res.json({ success: true, token, user: { name: user.name } });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// ✅ Login user
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }

        // Compare hashed passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            // Generate token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            res.json({ success: true, token, user: { name: user.name } });
        } else {
            return res.json({ success: false, message: 'Invalid credentials' });
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// ✅ Get user credits (Protected route)
const userCredits = async (req, res) => {
    try {
        const { userId } = req.body; // userId was injected by middleware

        // Fetch user from DB
        const user = await userModel.findById(userId);

        res.json({
            success: true,
            credits: user.creditBalance,
            user: { name: user.name }
        });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};
const purchaseCredits = async (req, res) => {
    try {
        const { userId, planId, credits } = req.body;

        if (!userId || !planId || !credits) {
            return res.json({ success: false, message: 'Missing Details' });
        }

        const user = await userModel.findById(userId);
        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }

        // ✅ Add credits to user's balance
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $inc: { creditBalance: credits } },
            { new: true }
        );

        res.json({
            success: true,
            message: `Successfully purchased ${credits} credits!`,
            credits: updatedUser.creditBalance,
            user: { name: updatedUser.name }
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};


export { registerUser, loginUser, userCredits, purchaseCredits };
