import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import ReactDOM from "react-dom/client";
import Parser from "html-react-parser";

function Letter({ letterPosition, attemptValue }) {
  const { board, answer, currentAttempt, guess } = useContext(AppContext);
  let letterState = "";

  let letter = board[attemptValue][letterPosition];

  if (board[0][0] === "P") {
    if (currentAttempt.attempt > attemptValue) {
      //   letterState = "correct";
      //  return board[0][0] = (
      //     <React.Fragment>
      //       <div id={letterState}>
      //         {letter}
      //       </div>
      //     </React.Fragment>
      //   );


      return (board[0][0] = (
        <React.Fragment>
          <div className="letter" id="correct">
            {letter}
          </div>
        </React.Fragment>
      ));
    }
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
  let id = document.getElementsByClassName("letter")[0].id;
  console.log(id);

  // MAKE PROGRESS BY CHANGING ID INSTEAD
  return (
    <React.Fragment>
      <div className="letter">{letter}</div>
    </React.Fragment>
  );
}

export default Letter;
