const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userControllers");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");
router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/info").get(validateToken, currentUser);
module.exports = router;
