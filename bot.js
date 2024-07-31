const TelegramBot = require('node-telegram-bot-api');

const token = '7053995358:AAGt8HsL5epgQZRdTI4sou7SV8mU0ES3cdA';
const bot = new TelegramBot(token, {polling: true});

// Handle the /start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const gameUrl = 'https://tower.developerpie.com/dist/index.html';
  
  bot.sendMessage(chatId, '🎮 Welcome to Our Exciting Game! 🎮\n\nReady to begin your adventure?', {
    reply_markup: {
      keyboard: [[
        { text: "Start Game", web_app: { url: gameUrl } }
      ]],
      resize_keyboard: true,
      one_time_keyboard: false
    }
  });
});

console.log('Bot is running...');