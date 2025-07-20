const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { v2: cloudinary } = require("cloudinary");
const connectDB = require("./config/db");
const { verifyToken } = require("./middleware/authMiddleware");
const apiRoutes = require("./routes/apiRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// config
dotenv.config();

//db connection
connectDB();

// middlewares
app.use(express.json());
// app.use(cors());

// Body parser middleware for handling JSON
// app.use(bodyParser.json());

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//routes
app.use("/api/auth", authRoutes);
app.use("/api", verifyToken, apiRoutes);

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
