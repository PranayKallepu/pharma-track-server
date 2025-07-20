const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Register
exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    await new User({ username, password: hashedPassword }).save();
    res.json({ success: true, message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    // Check if user exists
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    }

    // Check password
    const isMatch = bcrypt.compareSync(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, "pharma_secret_key", {
      expiresIn: "1d",
    });

    res.json({ success: true, message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
