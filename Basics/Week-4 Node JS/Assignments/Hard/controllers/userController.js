const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json({ message: "User created successfully.", user });
    }
    catch (err) {
        res.status(500).json({ message: "Internal server error." });
        console.log(err);
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid username or password." });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid password." });

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ message: "Login successful.", token, userId: user._id });
    } catch (err) {
        res.status(500).json({ error: "Error logging in." });
    }
};

exports.logout = async (req, res) => {
    try {
        res.clearCookie("token"); // Clear JWT stored in cookies
        res.status(200).json({ message: "Logged out successfully." });
    } catch (err) {
        res.status(500).json({ error: "Error logging out." });
    }
};

exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password");
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Error fetching user." });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: "User not found." });
        res.json({ message: "User updated successfully." }, updatedUser)
    }
    catch (err) {
        res.status(500).json({ message: "Error updating user." });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ error: "User not found" });

        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting user" });
    }
}