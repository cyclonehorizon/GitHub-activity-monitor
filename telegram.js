const TelegramBot = require('telegram-bot-api');
require('dotenv').config();

const bot = new TelegramBot({
  token: process.env.TELEGRAM_BOT_TOKEN,
});

async function sendTelegramReminder(message) {
  try {
    await bot.sendMessage({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: message,
    });
    console.log('Telegram message sent successfully!');
  } catch (error) {
    console.error('Error sending Telegram message:', error);
  }
}

module.exports = { sendTelegramReminder };
