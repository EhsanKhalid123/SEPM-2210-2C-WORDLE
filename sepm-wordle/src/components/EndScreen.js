import React, { useContext } from "react";
import { AppContext } from "../App";

function EndScreen() {
  const { gameCompleted, setGameCompleted, answer, currentAttempt } =
    useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>
        {gameCompleted.guessedWord ? "You guessed Correctly!" : "You failed!"}
      </h3>
      <h1>Correct: {answer}</h1>
      {gameCompleted.guessedWord && (
        <h3>You guessed in {currentAttempt.attempt} attempts</h3>
      )}
    </div>
  );
}

export default EndScreen;
