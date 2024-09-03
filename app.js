const express = require("express");
const app = express();
const expiration = require("./server");
app.get("*", (req, res) => {
  res.send("hahahahaha");
});

app.listen(10000, () => {
  console.log("Server running");
});
