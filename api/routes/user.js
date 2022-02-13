const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

router.post("/signup", UserController.userSignup);

router.post("/login", UserController.userLogin);

router.delete("/delete/:userId", checkAuth, UserController.userDelete);
// router.delete("/delete/:userId", UserController.userDelete);

module.exports = router;
