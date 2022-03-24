import React, { useState, useEffect } from "react";

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((data) => setMessages(data.values));
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
