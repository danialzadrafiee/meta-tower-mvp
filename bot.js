const TelegramBot = require('node-telegram-bot-api');

const token = '7053995358:AAGt8HsL5epgQZRdTI4sou7SV8mU0ES3cdA';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/game/, (msg) => {
  const chatId = msg.chat.id;
  const gameUrl = 'https://tower.developerpie.com/dist/index.html';
  
  bot.sendPhoto(chatId, 'https://play-lh.googleusercontent.com/Ai4Ld0NsDjBi_TZwJ2KBSWFfmN_GJ9ckesdC3q1mXvzdiouAqgbwj6LoCvRn0x3rWMs', {
    caption: '🎮 Welcome to Our Exciting Game! 🎮\n\nReady to begin your adventure?',
    reply_markup: {
      inline_keyboard: [[
        { text: "▶️ Start Game", web_app: { url: gameUrl } }
      ]]
    }
  });
});

console.log('Bot is running...');