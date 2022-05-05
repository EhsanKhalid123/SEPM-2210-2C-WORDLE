import React from "react";
import "./App.css";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { createContext, useState } from "react";
import { boardClean } from "./Words";

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardClean);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });
  return (
    <div className="App">
      <nav>
        <h1>SEPM Wordle</h1>
      </nav>
      <AppContext.Provider
        value={{ board, setBoard, setCurrentAttempt, currentAttempt }}
      >
        <div className="site">
          <Board />
          <Keyboard />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
