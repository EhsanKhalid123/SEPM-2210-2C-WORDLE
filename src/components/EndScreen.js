import React, { useContext } from "react";
import { AppContext } from "../App";

function EndScreen() {
  const { gameCompleted, setGameCompleted, answer, currentAttempt } =
    useContext(AppContext);


  


  const [counter, setCounter] = React.useState(60);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  {
    /** Set gameover screen, can be either win or lose. Very basic, but does the trick
        and replaces the keyboard */
  }
  return (
    <div className="endScreen">
      <h1>
        {gameCompleted.guessedWord
          ? "YOU GUESSED CORRECTLY!"
          : "YOU FAILED! GET A JOB!"}
      </h1>
      <h3>The correct word is: "{answer}"</h3>
      {gameCompleted.guessedWord && (
        <h4>
          You guessed in {currentAttempt.attempt} attempt(s)
          <h4>
            {" "}
            <div>Next word of the day available in: {counter}</div>
          </h4>
        </h4>
      )}
    </div>
  );
}

export default EndScreen;
