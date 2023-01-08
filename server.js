require("dotenv").config();
const {
  generateImageFromChatGTP,
  createCompletionChatGTP,
} = require("./chatGTP");
const express = require("express");
const cors = require("cors");
const authRouter = require("./routers/auth");
const chatRouter = require("./routers/chat");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/chat", chatRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log("Listeningserver on port : ", process.env.PORT || 8000);
});
