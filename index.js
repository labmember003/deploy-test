
const express = require("express");
// const https = require("https");
// const bodyParser = require("body-parser");
// const request = require("request");
const app = express();





app.use("/", (req, res) => {
  res.json({message: "Hellosss"});
});

app.listen(9000, () => {
  console.log(`Starting server`)
});
