const express = require("express");
const Blockchain = require("./blockchain");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const PORT = 8080;
const blockchain = new Blockchain();

app.get("/api/blocks", (req, res) => {
  res.json(blockchain.chain);
});

app.post("/api/mine", (req, res) => {
  const { data } = req.body;
  blockchain.addBlock({ data });
  res.redirect("/api/blocks");
});

app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
