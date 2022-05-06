import React, { useContext } from "react";
import { AppContext } from "../App";

function EndScreen() {
  const { gameCompleted, setGameCompleted, answer, currentAttempt } =
    useContext(AppContext);
  return (
    <div className="gameOver">
      <h1>
        {gameCompleted.guessedWord ? "YOU GUESSED CORRECTLY!" : "YOU FAILED! GET A JOB!"}
      </h1>
      <h3>The correct word is: "{answer}"</h3>
      {gameCompleted.guessedWord && (
        <h4>You guessed in {currentAttempt.attempt} attempt(s)</h4>
      )}
    </div>
  );
}

export default EndScreen;
