const User = require("../models/User");
const jwt = require("jsonwebtoken");

async function register(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ error: "Registration failed" });
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user || user.password !== req.body.password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
}

module.exports = {
  register,
  login
};