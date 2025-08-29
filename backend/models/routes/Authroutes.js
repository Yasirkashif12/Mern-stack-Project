import express from "express";
import bcrypt from "bcrypt";
import user from "../User.js";

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = new user({ name, email, password: hash });
    const savedUser = await newUser.save();

    const { password: _, ...safeUser } = savedUser.toObject();

    res.json({
      message: 'User signup successfully',
      user: safeUser
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
