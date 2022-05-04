import React, { useState, useEffect } from "react";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(async () => {
    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SHEET_ID}/values/${process.env.REACT_APP_RANGE}?key=${process.env.REACT_APP_API_KEY}`
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
