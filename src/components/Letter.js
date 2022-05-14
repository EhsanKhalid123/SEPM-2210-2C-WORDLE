import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

function Letter({ letterPosition, attemptValue }) {
  const { board, answer, currentAttempt, setDisabledLetters, guess } =
    useContext(AppContext);
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
  // const [repeat, setRepeat] = useState(false);
  // const [repeatChar, setRepeatChar] = useState([]);
  // const [repeatCount, setRepeatCount] = useState(0);
  // const [answerRepeat, setAnswerRepeat] = useState(0);

  // const [repeatCorrect, setRepeatCorrect] = useState(false);
  // const [repeatPartial, setRepeatPartial] = useState(false);

  // console.log(guess);
  // console.log(answer);

  // useEffect(() => {
  //   var guessTest = guess.split("");
  //   setRepeat(
  //     guessTest.some(function (v, i, a) {
  //       return a.lastIndexOf(v) != i;
  //     })
  //   );

  //   const getRepeatesChars = (str) => {
  //     const chars = {};
  //     for (const char of str) {
  //       chars[char] = (chars[char] || 0) + 1;
  //     }
  //     return Object.entries(chars)
  //       .filter((char) => char[1] > 1)
  //       .map((char) => char[0]);
  //   };
  //   setRepeatChar(getRepeatesChars(guess));
  // }, [guess]);

  // useEffect(() => {
  //   function countString(str, letterCheck) {
  //     let count = 0;
  //     for (let i = 0; i < str.length; i++) {
  //       if (str.charAt(i) == letterCheck) {
  //         count += 1;
  //       }
  //     }
  //     return count;
  //   }

  //   setRepeatCount(countString(guess, repeatChar.toString().charAt(0)));
  // });
  // useEffect(() => {
  //   function countString(str, letterCheck) {
  //     let count = 0;
  //     for (let i = 0; i < str.length; i++) {
  //       if (str.charAt(i) == letterCheck) {
  //         count += 1;
  //       }
  //     }
  //     return count;
  //   }

  //   setAnswerRepeat(countString(answer, repeatChar.toString().charAt(0)));
  // });

  // useEffect(() => {
  //   let count = 0;
  //   for (let i = 0; i < 5; i++) {
  //     // console.log(answer.toUpperCase()[i]);
  //     // console.log(guess.toUpperCase()[i]);
  //     // console.log(repeatChar.toString().charAt(0));
  //     if (answer.toUpperCase()[i] === guess.toUpperCase()[i]) {
  //       count++;
  //     }
  //   }
  //   if (count > 0) {
  //     setRepeatCorrect(true);
  //   } else {
  //     setRepeatCorrect(false);
  //   }
  //   console.log(count);
  // }, [guess]);

  // useEffect(() => {
  //   if (repeatCount > 0) {
  //     setRepeatPartial(true);
  //   } else {
  //     setRepeatPartial(false);
  //   }
  // });

  // console.log(repeatChar.toString().charAt(0));
  // console.log(repeatCount);
  // console.log(repeatCorrect);
  // console.log(repeatPartial);
  // console.log(answerRepeat);
  // console.log(currentAttempt.attempt);
  // console.log(board[currentAttempt.attempt][letterPosition]);
  // console.log(guess.indexOf(repeatChar.toString().charAt(0)));

  //
  // var partial = "";
  // if (2 === 2) {

  
  
    // partial = !correct;
    // partial = letter !== "";
    const partial = answer.toUpperCase().includes(letter);
  
  // }
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
