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
  const letter = board[attemptValue][letterPosition];
  {
    /** Initialise correct variable if the answer is in the position */
  }
  var correct = false;
  if (answer.toUpperCase()[letterPosition] === letter) {
    if (currentAttempt.attempt > attemptValue) {
      letterState = "correct";
      correct = true;
    }
  }
  {
    /** Initialise partial variable if the answer is not in the position,
     * but is includes in the word */
  }
  const [repeat, setRepeat] = useState(false);
  const [repeatChar, setRepeatChar] = useState([]);
  const [repeatCount, setRepeatCount] = useState(0);
  const [answerRepeat, setAnswerRepeat] = useState(0);

  const [repeatCorrect, setRepeatCorrect] = useState(false);
  const [repeatPartial, setRepeatPartial] = useState(false);

  console.log(guess);
  console.log(answer);

  useEffect(() => {
    var guessTest = guess.split("");
    setRepeat(
      guessTest.some(function (v, i, a) {
        return a.lastIndexOf(v) != i;
      })
    );

    const getRepeatesChars = (str) => {
      const chars = {};
      for (const char of str) {
        chars[char] = (chars[char] || 0) + 1;
      }
      return Object.entries(chars)
        .filter((char) => char[1] > 1)
        .map((char) => char[0]);
    };
    setRepeatChar(getRepeatesChars(guess));
  }, [guess]);

  useEffect(() => {
    function countString(str, letterCheck) {
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letterCheck) {
          count += 1;
        }
      }
      return count;
    }

    setRepeatCount(countString(guess, repeatChar.toString().charAt(0)));
  });
  useEffect(() => {
    function countString(str, letterCheck) {
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letterCheck) {
          count += 1;
        }
      }
      return count;
    }

    setAnswerRepeat(countString(answer, repeatChar.toString().charAt(0)));
  });
  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      // console.log(answer.toUpperCase()[i]);
      // console.log(guess.toUpperCase()[i]);
      // console.log(repeatChar.toString().charAt(0));
      if (answer.toUpperCase()[i] === guess.toUpperCase()[i]) {
        setRepeatCorrect(true);
      } else {
        setRepeatCorrect(false);
      }
    }
  });

  // useEffect(() => {
  //   let count = 0;
  //   for (let i = 0; i < 5; i++) {
  //     // console.log(answer.toUpperCase()[i]);
  //     // console.log(guess.toUpperCase()[i]);
  //     // console.log(repeatChar.toString().charAt(0));
  //     if (
  //       (answer.toUpperCase()[i] === guess.toUpperCase()[i]) ===
  //       repeatChar.toString().charAt(0)
  //     ) {
  //       count++;
  //     }
  //   }
  //   if (count > 0) {
  //     setRepeatCorrect(true);
  //   } else {
  //     setRepeatCorrect(false);
  //   }
  //   console.log(count);
  // });

  useEffect(() => {
    if (repeatCount > 0) {
      setRepeatPartial(true);
    } else {
      setRepeatPartial(false);
    }
  });

  console.log(repeatChar.toString().charAt(0));
  console.log(repeatCount);
  console.log(repeatCorrect);
  console.log(repeatPartial);
  console.log(answerRepeat);
  console.log(currentAttempt.attempt);
  console.log(board[currentAttempt.attempt][letterPosition]);
  console.log(guess.indexOf(repeatChar.toString().charAt(0)));
  console.log(letter);

  //
  // var partial = "";
  // if (2 === 2) {

  // partial = !correct;
  // partial = letter !== "";
  // function renderReplace(component, container) {
  //   var temp = document.createElement("div");
  //   var React = require("react-dom");
  //   React.render(component, temp);
  //   container.parentNode.replaceChild(temp.querySelector("#div"), container);
  // }

  // there are no repeated letter in answer, but the guess has multiple repeats
  // there are no repeated letter in answer, but the guess has multiple repeats
  // there are no repeated letter in answer, but the guess has multiple repeats
  if (answerRepeat === 0 && repeatCount > 0) {
    // for (var i = 0; i < board.length; i++) {
    //   var boardy = board[i];
    //   for (var j = 0; j < boardy.length; j++) {
    // }

    // MAKES ARRAY OF INDEXES THAT HAVE THE REPEATED LETTER IN THEM
    var repeatArr = [];
    for (var j = 0; j < 6; j++) {
      for (var i = 0; i < 5; i++) {
        if (board[j][i] === repeatChar.toString().charAt(0)) {
          repeatArr.push(i);
        }
      }
    }

    // DELETES A LETTER FROM THE ARRAY THAT IS ACTUALLY CORRECT AND NOT PARTIAL
    if (repeatCorrect === true) {
      for (var k = 0; k < answer.length; k++) {
        if (repeatChar.toString().charAt(0) === answer.toUpperCase()[k]) {
          console.log(k);
          for (var m = 0; m < repeatArr.length; m++) {
            if (k === repeatArr[m]) {
              repeatArr = repeatArr.filter((element) => element !== k);
            }
          }
        }
      }
    }
    console.log(repeatArr);

    for (var p = 0; p < repeatArr.length; p++) {
      console.log(board[currentAttempt.attempt - 1][p]);
      let mmm = board[currentAttempt.attempt - 1][p];
    }

    // if (board[0][0] === repeatChar.toString().charAt(0)) {
    //   if (currentAttempt.attempt > attemptValue) {
    //     // const root = ReactDOM.createRoot(document.getElementById("partial"));
    //     // renderReplace(element, document.getElementById("partial"));

    //     return (
    //       <div className="letter" id={letterState}>
    //         {letter}
    //       </div>
    //     );
    //   }
    // }
  }

  // for (let i = 0; i < 6; i++) {
  //   for (let j = 0; j < 5; j++) {
  //     console.log(board[i][j]);
  //     if (answer.toUpperCase().includes(board[i][j])) {
  //       console.log("yello");
  //     }
  //   }
  // }

  {
    /** Sets the letterState one of three ways */
  }
  // useEffect(() => {
  //   let mmmm = currentAttempt.attempt - 1;
  //   let ssss = repeatArr[0];
  // });

  let partial = false;
  if (
    answer.toUpperCase().includes(letter) &&
    !correct &&
    letter !== ""
  ) {
    if (currentAttempt.attempt > attemptValue) {
      letterState = "partial";
      partial = true;
    }
  }
  if (
    currentAttempt.attempt > attemptValue &&
    !partial &&
    !correct &&
    letter !== ""
  ) {
    letterState = "incorrect";
  }

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
  // useEffect(() => {
  //   if (letter !== "" && !correct && !partial) {
  //     setDisabledLetters((letterState) => [...letterState, letter]);
  //   }
  // }, [currentAttempt.attempt]);
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
}

export default Letter;
