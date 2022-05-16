import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import ReactDOM from "react-dom/client";
import Parser from "html-react-parser";

function Letter({ letterPosition, attemptValue }) {
  const { board, answer, currentAttempt, guess } = useContext(AppContext);
  let letterState = "";

  let letter = board[attemptValue][letterPosition];

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
  if (document.getElementsByClassName("letter")[0] !== undefined) {
    let element = document.getElementsByClassName("letter")[0];
    console.log(element);
    if (currentAttempt.attempt > attemptValue) {
      element.setAttribute("id", "incorrect");
    }
  }
  if (document.getElementsByClassName("letter")[6] !== undefined) {
    let element = document.getElementsByClassName("letter")[6];
    console.log(element);
    if (currentAttempt.attempt > attemptValue) {
      element.setAttribute("id", "incorrect");
    }
  }
  if (document.getElementsByClassName("letter")[4] !== undefined) {
    let element = document.getElementsByClassName("letter")[4];
    console.log(element);
    if (currentAttempt.attempt > attemptValue) {
      element.setAttribute("id", "incorrect");
    }
  }

  // id.setAttribute("id", "correct");
  // if (document.getElementsByClassName("letter")[0].hasAttribute(id)){
  //   document.getElementsByClassName("letter")[0].id = "correct";
  // }

  // MAKE PROGRESS BY CHANGING ID INSTEAD
  return (
    <React.Fragment>
      <div className="letter">{letter}</div>
    </React.Fragment>
  );
}

export default Letter;
