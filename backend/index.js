const { google } = require("googleapis");

const express = require("express");
const app = express();
const port = 5000;

const auth = google.auth.getClient({
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });

const range = "Sheet1!A2:B3";

async function getEvents() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range,
  });

  return response;
}
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get("/test", (req, res) => {
  res.status(200);
  res.send(getEvents());
  console.log("success");
});
