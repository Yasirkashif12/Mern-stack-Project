import express from "express";
import user from "../User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const Loginroute = express.Router();

Loginroute.post('/login', async (req, res) => {
  try {

    const { email, password } = req.body;


    const existingUser = await user.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isValidPassword = await bcrypt.compare(password, existingUser.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login Successful",
      token,
    });

  } catch (error) {
    console.error("🔥 Server error:", error.message);
    return res.status(500).json({ message: "Server Error" });
  }
});

export default Loginroute;
