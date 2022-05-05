import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";

function Keyboard() {
  const { onEnterClick, onDeleteClick, onPickLetter, disabledLetters } =
    useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const handleKeyboard = useCallback((event) => {
    if (event.key == "Enter") {
      onEnterClick();
    } else if (event.key == "Backspace") {
      onDeleteClick();
    } else {
      keys1.forEach((key) => {
        if (event.key.toUpperCase() === key.toUpperCase()) {
          onPickLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toUpperCase() === key.toUpperCase()) {
          onPickLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toUpperCase() === key.toUpperCase()) {
          onPickLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="firstLine">
        {keys1.map((key) => {
          return <Key keyval={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className="secondLine">
        {keys2.map((key) => {
          return <Key keyval={key} disabled={disabledLetters.includes(key)} />;
        })}
      </div>
      <div className="thirdLine">
        <Key keyval={"DELETE"} functionKey />
        {keys3.map((key) => {
          return <Key keyval={key} disabled={disabledLetters.includes(key)} />;
        })}
        <Key keyval={"ENTER"} functionKey />
      </div>
    </div>
  );
}

export default Keyboard;
