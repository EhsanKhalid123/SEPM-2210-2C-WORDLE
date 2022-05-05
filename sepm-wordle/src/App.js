import React, { useEffect } from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useState } from "react";
import { boardClean, generateGuessSet } from "./Tools";
import EndScreen from "./components/EndScreen";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardClean);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  const [guessSet, setGuessSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameCompleted, setGameCompleted] = useState({
    gameCompleted: false,
    guessedWord: false,
  });

  const answer = "RIGHT";

  useEffect(() => {
    generateGuessSet().then((words) => {
      setGuessSet(words.guessSet);
    });
  });

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
  const onEnterClick = () => {
    if (currentAttempt.letterPosition !== 5) return;

    let currentWord = "";
    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.attempt][i];
    }

    if (guessSet.has(currentWord.toLowerCase())) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      alert("Word not in Word List");
    }

    if (currentWord == answer) {
      setGameCompleted({gameCompleted: true, guessedWord: true})
      return;
    }

    if (currentAttempt.attempt === 5){
      setGameCompleted({gameCompleted: true, guessedWord: false})
    }
  };
  return (
    <div className="App">
      <nav>
        <h1>wordo</h1>
      </nav>
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
        }}
      >
        <div className="site">
          <Board />
          {gameCompleted.gameCompleted ? <EndScreen /> : <Keyboard />}
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
