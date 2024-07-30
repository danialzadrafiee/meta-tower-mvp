const TelegramBot = require('node-telegram-bot-api');

const token = '7053995358:AAGt8HsL5epgQZRdTI4sou7SV8mU0ES3cdA';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/game/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendGame(chatId, 'meta_tower_game');
});

bot.on('callback_query', (query) => {
  if (query.game_short_name === 'meta_tower_game') {
    const gameUrl = 'https://tower.developerpie.com/game.html';
    bot.answerCallbackQuery(query.id, {url: gameUrl, cache_time: 0});
  }
});

// Handle game score updates
bot.on('inline_query', (query) => {
  if (query.query === 'game') {
    bot.answerInlineQuery(query.id, [{
      type: 'game',
      id: '1',
      game_short_name: 'meta_tower_game'
    }]);
  }
});

console.log('Bot is running...');