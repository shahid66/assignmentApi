const express = require("express");

const {
  registration,
  login,
  profileUpdate,
} = require("../controllers/UserController");
const AuthVerifyMiddleware = require("../middlewares/AuthVerifyMiddleware");
const router = express.Router();

router.post("/register", registration);
router.post("/login", login);
router.post("/profileUpdate", AuthVerifyMiddleware, profileUpdate);

module.exports = router;
