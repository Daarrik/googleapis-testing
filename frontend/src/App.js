import React, { useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState();

  const getMessage = async () => {
    const response = await fetch("/test");
    setMessage(await response.text());
  };

  useEffect(() => {
    getMessage();
  }, []);

  return (
    <div>
      <div>{message}</div>
    </div>
  );
};

export default App;
