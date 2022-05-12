import React, { useContext, useEffect } from "react";
import { AppContext } from "../App";

function Letter({ letterPosition, attemptValue }) {
  const {
    board,
    answer,
    currentAttempt,
    setDisabledLetters,
  } = useContext(AppContext);
  {
    /** Get the current letter that is on the board */
  }
  const letter = board[attemptValue][letterPosition];
  {
    /** Initialise correct variable if the answer is in the position */
  }
  const correct = answer.toUpperCase()[letterPosition] === letter;
  {
    /** Initialise partial variable if the answer is not in the position,
     * but is includes in the word */
  }
  const partial =
    !correct && letter !== "" && answer.toUpperCase().includes(letter);

  {
    /** Sets the letterState one of three ways */
  }
  const letterState =
    currentAttempt.attempt > attemptValue &&
    (correct ? "correct" : partial ? "partial" : "incorrect");

  // if (currentAttempt.attempt > attemptValue) {
  //   correct
  //     ? setTwitterGrid((twitterGrid) => [...twitterGrid, "&#129001;"])
  //     : partial
  //     ? setTwitterGrid((twitterGrid) => [...twitterGrid, "partial"])
  //     : setTwitterGrid((twitterGrid) => [...twitterGrid, "incorrect"]);
  // }

  {
    /** Grey out the keyboard letters that are not in the word from guesses */
  }
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
