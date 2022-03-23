import React, { useState, useEffect } from "react";

const App = () => {
  const [message, setMessage] = useState();

  useEffect(() => {
    fetch("/a")
      .then((res) => res.text())
      .then((text) => setMessage(text));

    fetch("/test").then((res) => console.log(res));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default App;
