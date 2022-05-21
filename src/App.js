import React, { useEffect } from "react";
import "./App.css";
import "./index.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useState } from "react";
import { boardClean, generateGuessSet, getWordOfTheDay } from "./Tools";
import EndScreen from "./components/EndScreen";
import Switch from "./Switch";
import Popup from "./components/Popup";

{
  /* Allows the functions here to be called in other components */
}

export const AppContext = createContext();

{
  /** Set up all the constants for the app, and their default states */
}
function App() {
  const [board, setBoard] = useState(boardClean);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [guessSet, setGuessSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [answer, setAnswer] = useState("");
  const [gameCompleted, setGameCompleted] = useState({
    gameCompleted: false,
    guessedWord: false,
  });
  const [diffInDays, setDiffInDays] = useState("");
  const [emojiGrid, setEmojiGrid] = useState([]);
  const [contrast, setContrast] = useState("normal");
  const [value, setValue] = useState(false);
  const [popup, setPopup] = useState(false);
  const [popupCount, setPopupCount] = useState(0);
  const [guess, setGuess] = useState("");
  const [letter1, setLetter1] = useState("");

  {
    /** The useEffect function here means that the function will only be able to run once

  This useeffect calls the Tools.js component which splits the guess list text file into a Set. Which is more 
  efficient to read than an array (which would be too resource intensive).

  It also makes a set from the answer list. This is different to guess list as the user is able to guess ~10000 words
  in the game, however the game will only choose from ~2000 words as an answer to the game. */
  }
  useEffect(() => {
    generateGuessSet().then((words) => {
      setGuessSet(words.guessSet);
    });
    getWordOfTheDay().then((words) => {
      // setAnswer(words.wordOfTheDay);
      setAnswer("DECOY")
      setDiffInDays(words.diffInDays);
    });
  }, []);

  {
    /** This allows the word of the day to refresh every 24 hours. 8.64e7 is 24 hours in miliseconds */
  }
  // window.setInterval(function () {
  //   randomlySelectAnswer().then((words) => {
  //     setAnswer(words.wordOfTheDay);
  //   });
  // }, 8.64e7);

  {
    /** below is me trying to figure out how to do all of this stuff  */
  }

  // let wordOfTheDay;
  // window.setInterval(
  //   (function () {
  //     fetch(answerList)
  //       .then((response) => response.text())
  //       .then((result) => {
  //         const answerArr = result.split("\n");
  //         wordOfTheDay =
  //           answerArr[Math.floor(Math.random() * answerArr.length)];
  //         setAnswer(wordOfTheDay);
  //       });
  //   },
  //   10)
  // );

  {
    /** This keeps track of where the user is on the board when they pick a letter */
  }
  const onPickLetter = (keyval) => {
    if (currentAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyval;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  };

  {
    /** This keeps track of where the user is on the board when they delete a letter */
  }
  const onDeleteClick = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
  };

  {
    /** This keeps track of where the user is on the board when they click ENTER */
  }

  const onEnterClick = () => {
    if (currentAttempt.letterPosition !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currentAttempt.attempt][i];
    }
    setGuess(currWord);

    {
      /** Checks if the word a user submits is valid for guessing */
    }
    if (guessSet.has(currWord.toLowerCase())) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      // alert("Word not in Word List");
      setPopup(true);
      if (popupCount < 1) {
        setTimeout(function () {
          setPopup(false);
        }, 2000);
        setPopupCount(popupCount + 1);
        return;
      } else {
        setTimeout(function () {
          setPopup(false);
        }, 600);
        return;
      }
    }

    {
      /** Set EndScreen by keeping track if the user has won or lost */
    }
    if (currWord.toLowerCase() === answer.toLowerCase()) {
      setGameCompleted({ gameCompleted: true, guessedWord: true });

      return;
    }

    if (currentAttempt.attempt === 5) {
      setGameCompleted({ gameCompleted: true, guessedWord: false });
    }
  };

  const r = document.querySelector(":root");
  const setHighContrastDark = () => {
    r.style.setProperty("--colour-correct", "#e5804a");
    r.style.setProperty("--colour-partial", "#92bef4");
    setContrast("high");
  };

  const setDarkMode = () => {
    r.style.setProperty("--colour-correct", "#618b55");
    r.style.setProperty("--colour-partial", "#b1a04c");
    setContrast("normal");
  };
  useEffect(() => {
    if (!value) {
      setDarkMode();
    }
    if (value) {
      setHighContrastDark();
    }
  });

  return (
    <div className="App">
      <nav>
        <h1>wordo</h1>

        <Switch isOn={value} handleToggle={() => setValue(!value)} />
      </nav>
      <Popup trigger={popup}>
        <h2>Word not in Word List!!</h2>
      </Popup>

      {/* <button id="button" onClick={setHighContrastDark}>
        High Contrast Theme
      </button>
      <button id="button" onClick={setDarkMode}>
        Normal Theme
      </button> */}

      {/** The following values are being used by other components in the project */}
      <AppContext.Provider
        value={{
          board,
          setBoard,
          setCurrentAttempt,
          currentAttempt,
          onPickLetter,
          onDeleteClick,
          onEnterClick,
          answer,
          disabledLetters,
          setDisabledLetters,
          setGameCompleted,
          gameCompleted,
          emojiGrid,
          diffInDays,
          setEmojiGrid,
          contrast,
          guess,
          letter1,
          setLetter1
        }}
      >
        <div className="site">
          {/** Board is first, then either the endscreen or the keyboard
           * depending on if the game is completed or not (simple boolean)
           */}
          <Board />

          {gameCompleted.gameCompleted ? <EndScreen /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
