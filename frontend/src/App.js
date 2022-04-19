import React, { useState, useEffect } from "react";
const spreadsheetId = "11TLb2eesRU5EC3N7fv6wX0ted5O2jik2T8SpM67PYm0";
const range = "Sheet1!A2:B3";
const apiKey = "AIzaSyB7bzY4r_lr7gjDCZ0fetgDjM2vjixKIPs";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`
    );
    const { values } = await response.json();
    setMessages(values);
  }, []);

  return (
    <div>
      {messages.map((message, idx) => (
        <div key={idx}>
          <h1>{message[0]}</h1>
          <h2>{message[1]}</h2>
        </div>
      ))}
    </div>
  );
};

export default App;
