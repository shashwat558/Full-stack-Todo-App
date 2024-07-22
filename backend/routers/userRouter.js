const express = require("express");
const {loginUser, signUpUser, getUser} = require("../controllers/loginSignup")
const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signUpUser);
router.get("/me", getUser);

module.exports = router;