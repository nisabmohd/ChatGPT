const { login, signup } = require("../controllers/auth");

const router = require("express").Router();

router.route("/login").post(login);

router.route("/signup").post(signup);

module.exports = router;
