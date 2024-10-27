const dotenv  = require('dotenv');
dotenv.config();
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_TOKEN
const bot = new TelegramBot(token, { polling: true });

console.log("start bot");


const helpMessage = `
/help - get help
`

const welcomeMessage = `
Welcome to the Guided Adventures! with this bot you can enjoy bright emotions during your visit of new places, enhance your reach to interesting places! No more FOMO during of your travel!
🌅
Click Start Adventure Button to see More! 󠁿󠁿󠁿󠁿🎸

`

bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/start') {
    bot.sendMessage(chatId, welcomeMessage);
  }
  if (messageText === '/help') {
    bot.sendMessage(chatId, helpMessage);
  }
});

