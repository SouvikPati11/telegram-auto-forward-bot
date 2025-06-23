require("dotenv").config();

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  SOURCE_CHANNEL_ID: process.env.SOURCE_CHANNEL_ID,
  TARGET_CHANNEL_ID: process.env.TARGET_CHANNEL_ID,
};
