const express = require('express');
const setupWebhook = require('./webHook');
const bot = require('./app/bot');

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(`/`, bot);

app.listen(PORT, async () => {
  try {
    console.log(`Server started on ${PORT} port!`);
    await setupWebhook();
  } catch (e) {
    console.log(e.message);
  }
});