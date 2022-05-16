import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import ReactDOM from "react-dom/client";
import Parser from "html-react-parser";

function Letter({ letterPosition, attemptValue }) {
  const { board, answer, currentAttempt, setDisabledLetters, guess } =
    useContext(AppContext);
  let letterState = "";
  {
    /** Get the current letter that is on the board */
  }
  let letter = board[attemptValue][letterPosition];
  {
    /** Initialise correct variable if the answer is in the position */
  }

  var correct = false;
  if (answer.toUpperCase()[letterPosition] === letter) {
    if (currentAttempt.attempt > attemptValue) {
      letterState = "correct";
      correct = true;
      return (
        <React.Fragment>
          <div className="letter" id={letterState}>
            {letter}
          </div>
        </React.Fragment>
      );
    }
  }

  let partial = false;
  if (answer.toUpperCase().includes(letter) && !correct && letter !== "") {
    if (currentAttempt.attempt > attemptValue) {
      letterState = "partial";
      partial = true;
      return (
        <React.Fragment>
          <div className="letter" id={letterState}>
            {letter}
          </div>
        </React.Fragment>
      );
    }
  }

  if (
    currentAttempt.attempt > attemptValue &&
    !partial &&
    !correct &&
    letter !== ""
  ) {
    letterState = "incorrect";
    return (
      <React.Fragment>
        <div className="letter" id={letterState}>
          {letter}
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="letter">{letter}</div>
    </React.Fragment>
  );
}

export default Letter;
