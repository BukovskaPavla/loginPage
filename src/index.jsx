import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Body from "./components/Body";

const App = () => {
  const [click, setClick] = useState(false);
  const [logIn, setLogIn] = useState(false); //true - zobrazí se mi jiná hlavička a Obsah

  const handleClick = () => {
    setClick(true);
  };

  const handleSubmit = () => {
    setLogIn(true)
  }

  return (
    <div className="container">
      <Header click={click} onClick={handleClick} logIn={logIn} />
      {click ? <Form onSubmit={handleSubmit}/> : <Body logIn={logIn} />}
    </div>
  );
};

createRoot(document.querySelector("#app")).render(<App />);
