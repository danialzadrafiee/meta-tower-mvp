const TelegramBot = require('node-telegram-bot-api');

const token = '7053995358:AAGt8HsL5epgQZRdTI4sou7SV8mU0ES3cdA';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/game/, (msg) => {
  const chatId = msg.chat.id;
  const gameUrl = 'https://tower.developerpie.com/dist/index.html';
  
  bot.sendMessage(chatId, 'Play our game!', {
    reply_markup: {
      inline_keyboard: [[
        { text: "Play Now!", web_app: { url: gameUrl } }
      ]]
    }
  });
});

console.log('Bot is running...');