import './App.css';
import LetterBoard from './components/LetterBoard';
import OnScreenKeyboard from './components/OnScreenKeyboard';
import { createContext, useState } from "react";
import { boardMatrix } from "./Matrix";

export const AppContext = createContext();

function App() {
  const [letterBoard, setLetterBoard] = useState(boardMatrix);
  const [presentAttempt, setPresentAttempt] = useState({ attempt: 0, tilePosition: 0 });

  const correctWord = "RIGHT";

  const onPickLetter = (letterValue) => {
    if (presentAttempt.tilePosition > 4) {
      return;
    }
    const newLetterBoard = [...letterBoard];
    newLetterBoard[presentAttempt.attempt][presentAttempt.tilePosition] = letterValue;
    setLetterBoard(newLetterBoard);
    setPresentAttempt({ ...presentAttempt, tilePosition: presentAttempt.tilePosition + 1 });

  }

  const onDeleteLetter = () => {
    if (presentAttempt.tilePosition === 0)
      return;
    const newLetterBoard = [...letterBoard];
    newLetterBoard[presentAttempt.attempt][presentAttempt.tilePosition - 1] = "";
    setLetterBoard(newLetterBoard);
    setPresentAttempt({ ...presentAttempt, tilePosition: presentAttempt.tilePosition - 1 });

  }

  const onEnterButton = () => {
    if (presentAttempt.tilePosition !== 5)
      return;
    setPresentAttempt({ attempt: presentAttempt.attempt + 1, tilePosition: 0 });
  }

  return (
    <div className="App">
      <nav>
        <h1>
          Wordle
        </h1>
      </nav>
      <AppContext.Provider value={{ letterBoard, setLetterBoard, presentAttempt, setPresentAttempt, onPickLetter, onEnterButton, onDeleteLetter, correctWord }}>
        <div className='game'>
          <LetterBoard />
        </div>
        <div className='game'>
          <OnScreenKeyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
