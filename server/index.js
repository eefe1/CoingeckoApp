const express = require('express');
const cors = require('cors');
const app = express();

//allows all the routes to be accessed anywhere on the web.
  app.use(cors())

  const { getCoins, getCoinById } = require('./api');
  app.get('/coins', async (req, res) => {
    const coins = await getCoins();
    res.send(coins);
  });
  
  app.get('/coins/:id', async (req, res) => {
    const { id } = req.params;
    const coin = await getCoinById(id);
    res.send(coin);
  });
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });