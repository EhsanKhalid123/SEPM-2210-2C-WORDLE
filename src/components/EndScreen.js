import React, { useContext } from "react";
import { AppContext } from "../App";

function EndScreen() {
  const { gameCompleted, answer, currentAttempt } = useContext(AppContext);

  var midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  var midnightSeconds = Math.floor(
    (midnight.getTime() - new Date().getTime()) / 1000
  );

  const format = (time) => {
    //convert seconds into hours and take whole part
    const hours = Math.floor(time / 60 / 60) % 60;

    // Convert seconds into minutes and take the whole part
    const minutes = Math.floor((time / 60) % 60);

    // Get the seconds left after converting minutes
    const seconds = time % 60;

    //Return combined values as string in format
    return `${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
  };

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
              <div>
                The next Word Of The Day will arrive in: {format(counter)}
              </div>
            </div>
          </h3>
        </h4>
      )}
    </div>
  );
}

export default EndScreen;
