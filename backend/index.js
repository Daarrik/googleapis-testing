require("dotenv").config();
const { google } = require("googleapis");

const express = require("express");
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/a", (req, res) => {
  console.log("Success.");
  res.status(200);
  res.send("hi");
});

app.get("/test", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    scopes: "https://www.googleapis.com/auth/spreadsheets.readonly",
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = process.env.SHEET_ID;
  const range = "Sheet1!A2:B3";

  const events = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range,
  });

  res.status(200);
  res.send(events.data);
  console.log("success");
});
