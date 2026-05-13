const express = require("express");
const { registerUser, loginUser, logoutUser } = require("../Controllers/Auth.controller");
const registrationRules = require("../Middlewares/Auth.middlware");
const router = express.Router();

router.post('/register', registrationRules, registerUser)
router.post('/login', registrationRules, loginUser)
router.post('/logout', logoutUser)

module.exports = router