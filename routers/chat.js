const { chat } = require("../controllers/chat");
const router = require("express").Router();

router.route("/chat").post(chat);

module.exports = router;
