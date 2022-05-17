import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

function Letter({ letterPosition, attemptValue }) {
  const { board, answer, currentAttempt, guess } = useContext(AppContext);
  let letterState = "";

  let letter = board[attemptValue][letterPosition];
  const correct = "correct";
  const partial = "partial";
  const incorrect = "incorrect";

  // var correct = false;
  // if (answer.toUpperCase()[letterPosition] === letter) {
  //   if (currentAttempt.attempt > attemptValue) {
  //     letterState = "correct";
  //     correct = true;
  //     return (
  //       <React.Fragment>
  //         <div className="letter" id={letterState}>
  //           {letter}
  //         </div>
  //       </React.Fragment>
  //     );
  //   }
  // }

  // let partial = false;
  // if (answer.toUpperCase().includes(letter) && !correct && letter !== "") {
  //   if (currentAttempt.attempt > attemptValue) {
  //     letterState = "partial";
  //     partial = true;
  //     return (
  //       <React.Fragment>
  //         <div className="letter" id={letterState}>
  //           {letter}
  //         </div>
  //       </React.Fragment>
  //     );
  //   }
  // }

  // if (
  //   currentAttempt.attempt > attemptValue &&
  //   !partial &&
  //   !correct &&
  //   letter !== ""
  // ) {
  //   letterState = "incorrect";
  //   return (
  //     <React.Fragment>
  //       <div className="letter" id={letterState}>
  //         {letter}
  //       </div>
  //     </React.Fragment>
  //   );
  // }
  const getRepeatedChars = (str) => {
    const chars = {};
    for (const char of str) {
      chars[char] = (chars[char] || 0) + 1;
    }
    return Object.entries(chars)
      .filter((char) => char[1] > 1)
      .map((char) => char[0]);
  };

  function colourLetter(i, colour) {
    if (document.getElementsByClassName("letter")[i] !== undefined) {
      let element = document.getElementsByClassName("letter")[i];
      if (currentAttempt.attempt > attemptValue) {
        element.setAttribute("id", colour);
      }
    }
  }

  function letterCheck(letterIndex, boardIndex, boardRow) {
    if (boardRow[boardIndex] === answer.toUpperCase()[boardIndex]) {
      colourLetter(letterIndex, correct);
    } else if (answer.toUpperCase().includes(boardRow[boardIndex])) {
      var guessRepeatChars = getRepeatedChars(guess);
      colourLetter(letterIndex, partial);
      for (let p = 0; p < guessRepeatChars.length; p++) {
        if (guessRepeatChars[p] === boardRow[boardIndex]) {
          let repeatAnswer = false;
          for (let g = 0; g < boardRow.length; g++) {
            if (
              boardRow[g] === answer.toUpperCase()[g] &&
              boardRow[g] === guessRepeatChars[p]
            ) {
              repeatAnswer = true;
            }
          }

          if (repeatAnswer) {
            colourLetter(letterIndex, incorrect);
          } else {
            if (
              boardIndex ===
              boardRow.findIndex((element) => element === guessRepeatChars[p])
            ) {
              colourLetter(letterIndex, partial);
            } else {
              colourLetter(letterIndex, incorrect);
            }
          }
        } else {
          colourLetter(letterIndex, partial);
        }
  
      }
    } else {
      colourLetter(letterIndex, incorrect);
    }
  }
  /**
   *
   * FIRST ROW
   *
   */
  useEffect(() => {
    if (currentAttempt.attempt > 0) {
      var boardRow = board[0];
      letterCheck(0, 0, boardRow);
      letterCheck(1, 1, boardRow);
      letterCheck(2, 2, boardRow);
      letterCheck(3, 3, boardRow);
      letterCheck(4, 4, boardRow);
    }
  }, [currentAttempt.attempt < 1]);
  /**
   *
   * SECOND ROW
   *
   */
  useEffect(() => {
    if (currentAttempt.attempt > 1) {
      var boardRow = board[1];
      letterCheck(5, 0, boardRow);
      letterCheck(6, 1, boardRow);
      letterCheck(7, 2, boardRow);
      letterCheck(8, 3, boardRow);
      letterCheck(9, 4, boardRow);
    }
  }, [currentAttempt.attempt < 2]);
  /**
   *
   * THIRD ROW
   *
   */
  useEffect(() => {
    if (currentAttempt.attempt > 2) {
      var boardRow = board[2];
      letterCheck(10, 0, boardRow);
      letterCheck(11, 1, boardRow);
      letterCheck(12, 2, boardRow);
      letterCheck(13, 3, boardRow);
      letterCheck(14, 4, boardRow);
    }
  }, [currentAttempt.attempt < 3]);
  /**
   *
   * FOURTH ROW
   *
   */
  useEffect(() => {
    if (currentAttempt.attempt > 3) {
      var boardRow = board[3];
      letterCheck(15, 0, boardRow);
      letterCheck(16, 1, boardRow);
      letterCheck(17, 2, boardRow);
      letterCheck(18, 3, boardRow);
      letterCheck(19, 4, boardRow);
    }
  }, [currentAttempt.attempt < 4]);
  /**
   *
   * FIFTH ROW
   *
   */
  useEffect(() => {
    if (currentAttempt.attempt > 4) {
      var boardRow = board[4];
      letterCheck(20, 0, boardRow);
      letterCheck(21, 1, boardRow);
      letterCheck(22, 2, boardRow);
      letterCheck(23, 3, boardRow);
      letterCheck(24, 4, boardRow);
    }
  }, [currentAttempt.attempt < 5]);
  /**
   *
   * SIXTH ROW
   *
   */
  useEffect(() => {
    if (currentAttempt.attempt > 5) {
      var boardRow = board[5];
      letterCheck(25, 0, boardRow);
      letterCheck(26, 1, boardRow);
      letterCheck(27, 2, boardRow);
      letterCheck(28, 3, boardRow);
      letterCheck(29, 3, boardRow);
    }
  }, [currentAttempt.attempt < 6]);

  return (
    <>
      <div className="letter">{letter}</div>
    </>
  );
}

export default Letter;
