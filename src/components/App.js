import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  let [buttonClicked, setButtonClicked] = React.useState(false);
  function handleClick() {
    let buttonClickedCopy = buttonClicked;
    buttonClickedCopy = !buttonClickedCopy;

    setButtonClicked(buttonClickedCopy);
  }

  return (
    <div id="main">
      {/* Do not alter the main div */}
      <button id="click" onClick={() => handleClick()}></button>
      {buttonClicked ? (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      ) : null}
    </div>
  );
}

export default App;
