const { createCompletionChatGTP } = require("../chatGTp");

exports.chat = (req, res) => {
  createCompletionChatGTP({ message: req.body.message })
    .then((res) => res.send(res.data))
    .catch((err) => res.status(400).send({ error: err.message }));
};
