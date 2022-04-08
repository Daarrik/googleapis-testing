import React, { useState, useEffect } from "react";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(async () => {
    const response = await fetch("/api/events");
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
