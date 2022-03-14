const { google } = require("googleapis");
const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/test", (req, res) => {
  res.status(200);
  res.send("testtest");
  console.log("success");
});
