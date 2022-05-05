import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPosition, attemptValue }) {
  const { board, answer, currentAttempt, setDisabledLetters, disabledLetters } =
    useContext(AppContext);
  const letter = board[attemptValue][letterPosition];

  const correct = answer.toUpperCase()[letterPosition] === letter;
  const partial =
    !correct && letter !== "" && answer.toUpperCase().includes(letter);

  const letterState =
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : partial ? "partial" : "incorrect");

  useEffect(() => {
    if (letter !== "" && !correct && !partial) {
      setDisabledLetters((letterState) => [...letterState, letter]);
    }
  }, [currentAttempt.attempt]);
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
