const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateImageFromChatGTP({ message }) {
  const response = await openai.createImage({
    prompt: message,
    n: 2,
    size: "1024x1024",
  });
  return response;
}

async function createCompletionChatGTP({ message }) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    max_tokens: 2048,
    temperature: 0,
  });
  return response;
}

module.exports = { generateImageFromChatGTP, createCompletionChatGTP };
