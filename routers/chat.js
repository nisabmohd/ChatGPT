const { chat, getAllChats } = require("../controllers/chat");
const { checkApiKey } = require("../middlewares/apiKey");
const router = require("express").Router();

router.route("/chat/:apiKey").post(checkApiKey, chat);
router.route("/getchats/:apiKey").get(checkApiKey, getAllChats);

module.exports = router;
