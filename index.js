const express = require("express");
const app = express();
const port = 9000;



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.use("/", (req, res) => {
  res.json({message: "Hellosss"});
});

app.listen(9000, () => {
  console.log(`Starting server`)
});
