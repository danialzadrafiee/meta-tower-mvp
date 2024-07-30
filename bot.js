const TelegramBot = require('node-telegram-bot-api');

const token = '7053995358:AAGt8HsL5epgQZRdTI4sou7SV8mU0ES3cdA';
const bot = new TelegramBot(token, {polling: true});
bot.onText(/\/game/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendGame(chatId, 'meta_tower_game');
});

bot.on('callback_query', (query) => {
  if (query.game_short_name) {
    // Replace with the URL where your game is hosted
    const gameUrl = 'http://tower.developerpie.com/';
    bot.answerCallbackQuery(query.id, {url: gameUrl});
  }
});

console.log('Bot is running...');