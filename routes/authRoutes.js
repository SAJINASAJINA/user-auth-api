const express = require("express");

const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/authController");

const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Protected Profile
router.get("/profile", verifyToken, getUserProfile);

module.exports = router;
