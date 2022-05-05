import React, { useContext } from "react";
import { AppContext } from "../App";

function Letter({ letterPosition, attemptValue }) {
  const { board, answer, currentAttempt } = useContext(AppContext);
  const letter = board[attemptValue][letterPosition];

  const correct = answer[letterPosition] === letter;
  const partial =
    !correct && letter !== "" && answer.toUpperCase().includes(letter);

  const letterState =
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : partial ? "partial" : "incorrect");
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
