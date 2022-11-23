const axios = require("axios");
const {serverURL, telegramToken} = require("./config");

const TELEGRAM_API = `https://api.telegram.org/bot${telegramToken}`;
const URI = `/webhook/${telegramToken}`;
const webhookURL = `${serverURL}${URI}`;

const setupWebhook = async () => {
  try {
    const url = `${TELEGRAM_API}/setWebhook?url=${webhookURL}&drop_pending_updates=true`;
    console.log(url);
    const { data } = await axios.get(url);
    console.log(data)
  } catch (error) {
    return error;
  }
};

module.exports = setupWebhook;