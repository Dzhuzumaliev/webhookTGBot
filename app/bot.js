const express = require('express');
const axios = require("axios");

const router = express.Router();
const {telegramToken} = require("../config");

const TELEGRAM_API = `https://api.telegram.org/bot${telegramToken}`;
const URI = `/webhook/${telegramToken}`;

router.post(URI , async (req, res) => {
  try {
    console.log(req.body);

    const chatId = req.body.message.chat.id;

    const message = req.body.message.text;

    let responseMessage;

    switch (message) {
      case "/start":
        responseMessage = {
          chat_id: chatId,
          text: "Let`s start bot!"
        };
        await axios.post(`${TELEGRAM_API}/sendMessage`, responseMessage);
        res.status(200).send("ok");
        break;
      case "/hi":
        responseMessage = {
          chat_id: chatId,
          text: "Hello!"
        };
        await axios.post(`${TELEGRAM_API}/sendMessage`, responseMessage);
        res.status(200).send("ok");
        break;
      default:
        console.log(message);
        res.status(200).send("ok");
        break;
    }

  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;