import React, { useCallback, useEffect, useContext, useState } from "react";
import Key from "./Key";
import { AppContext } from "../App";
import Rules from "./Rules";

function Keyboard() {
  const { onEnterClick, onDeleteClick, onPickLetter, disabledLetters } =
    useContext(AppContext);

  {
    /** Set the keyboard arrays by the three ROWS that are in OG wordle */
  }
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const [rules, setRules] = useState(false);

  const handleKeyboard = useCallback((event) => {
    {
      /** Click enter button executes enter function */
    }
    if (event.key == "Enter") {
      onEnterClick();
    } /* Click delete key to execute backspace  */ else if (
      event.key == "Backspace"
    ) {
      onDeleteClick();
    } else {
      {
        /** Matches key for each row and executes the pick letter function */
      }
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

  {
    /** use effect that runs once to listen to the button clicks */
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  {
    /** Return each row and puts the delete and enter key on either side of the third row */
  }

  const rulesFunction = () => {
    setRules(true);
    setTimeout(function () {
      setRules(false);
    }, 3000);
  };

  return (
    <div className="keyboard">
      {/* <div className="firstLine">
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
      </div> */}{" "}
      {/* <button id="button" onClick={() => rulesFunction()}>
        &#9432;
      </button>
      <Rules trigger={rules}>
        Use the keyboard to play the game<br></br>
        <br></br> The switch above toggles high contrast mode
      </Rules> */}
    </div>
  );
}

export default Keyboard;
