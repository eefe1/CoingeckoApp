const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const { getCoins, getCoinById } = require("./api");

app.get("/coins", async (req, res) => {
  const skip = parseInt(req.query.skip) || 0;
  const limit = parseInt(req.query.limit) || 100;
  const coins = await getCoins(skip, limit);
  res.send(coins);
});

app.get("/coins/:id", async (req, res) => {
  const { id } = req.params;
  const coin = await getCoinById(id);
  res.send(coin);
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
