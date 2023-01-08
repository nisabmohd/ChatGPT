require('dotenv').config()
const { generateImageFromChatGTP, createCompletionChatGTP } = require('./chatGTP')

// generateImageFromChatGTP().then(resp => {
//     console.log(resp.data);
// }).catch(err => console.log(err))


createCompletionChatGTP().then(resp => {
    console.log(resp.data);
}).catch(err => console.log(err))
