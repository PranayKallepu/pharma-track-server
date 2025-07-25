const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");

//_________________API for AUTH_________________
router.post("/register", authController.register);
router.post("/login", authController.login);

module.exports = router;
