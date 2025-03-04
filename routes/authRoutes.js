const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/register", authController.register); // Register a new user
router.post("/login", authController.login); // Login an existing user
router.post("/reset-password", authController.resetPassword); // Reset password

module.exports = router;
