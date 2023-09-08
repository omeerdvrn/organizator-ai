

import OpenAI from 'openai';
import { ORGANIZER_PROMPT } from './prompts.js'

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_API_KEY,
  dangerouslyAllowBrowser: true
});
let sentMessages = []

sentMessages.push({"role": "system", "content": ORGANIZER_PROMPT})


const sendMessage = async (message) => {
   sentMessages.push({"role": "user", "content": message})
   const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: sentMessages,
   });
   const { choices: responseMessages } = chatCompletion
   console.log(responseMessages[0].message.content);
   sentMessages.push({"role": "assistant", "content": responseMessages[0].message.content})
   return responseMessages[0].message.content
}


export default sendMessage




 