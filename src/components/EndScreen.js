import React, { useContext } from "react";
import { AppContext } from "../App";

function EndScreen() {
  const { gameCompleted, answer, currentAttempt } = useContext(AppContext);

  var midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  var midnightSeconds = Math.floor(
    (midnight.getTime() - new Date().getTime()) / 1000
  );

  const [counter, setCounter] = React.useState(midnightSeconds);

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
          <h3>
            <div id="countdown">
              Next word of the day available in: {counter}
            </div>
          </h3>
        </h4>
      )}
    </div>
  );
}

export default EndScreen;
