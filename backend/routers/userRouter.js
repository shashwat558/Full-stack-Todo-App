const express = require("express");
import {loginUser, signUpUser, getUser} from "../controllers/loginSignup"
const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", signUpUser);
router.get("/me", getUser);

module.exports = router;