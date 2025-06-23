const TelegramBot = require("node-telegram-bot-api");
const { BOT_TOKEN, SOURCE_CHANNEL_ID, TARGET_CHANNEL_ID } = require("./config");

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.on("message", async (msg) => {
  if (msg.chat.id.toString() === SOURCE_CHANNEL_ID) {
    const text = msg.text || "";
    const media = msg.photo || msg.video || msg.document;

    if (media) {
      // If media, forward as copy
      bot.copyMessage(TARGET_CHANNEL_ID, msg.chat.id, msg.message_id);
    } else if (text) {
      // Just text
      bot.sendMessage(TARGET_CHANNEL_ID, text);
    }
  }
});
