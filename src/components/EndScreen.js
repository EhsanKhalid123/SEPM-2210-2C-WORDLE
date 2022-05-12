import React, { useContext } from "react";
import { AppContext } from "../App";
import {
  FacebookIcon,
  FacebookShareButton,
  ShareButtons,
  ShareCounts,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

function EndScreen() {
  const { gameCompleted, answer, currentAttempt, diffInDays } =
    useContext(AppContext);

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

  const wordoTitle = "Wordo: " + diffInDays.toString() + "\r\n" + "\r\n";

  const shareText =
    "I won in " + currentAttempt.attempt.toString() + " attempt[s]";

  const combined = wordoTitle + shareText;

  // let emojiGrid = "";
  // let gLen = twitterGrid.length;
  // for (let i = 0; i < gLen; i + 2) {
  //   if (twitterGrid[i] === "correct") {
  //     emojiGrid += "yo";
  //   }
  // }
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
        <br></br>
        <div id="secondEnd">The correct word is: "{answer.toUpperCase()}"</div>
      </h1>
      {gameCompleted.guessedWord && (
        <h4>
          You guessed in {currentAttempt.attempt} attempt[s]
          <h3>
            <div id="countdown">
              <div>
                The next Word Of The Day will arrive in: <br></br>
                {format(counter)}
              </div>
            </div>
          </h3>
          <TwitterShareButton
            url={shareText}
            title={wordoTitle}
            className="shareBtn col-md-1 col-sm-1 col-xs-1"
          >
            {" "}
            <TwitterIcon size={32} round={true} />
            <a className="twitter">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </TwitterShareButton>
          <FacebookShareButton
            url="https://www.rmit.edu.au/"
            quote={combined}
            hashtag="wordo"
            className="shareBtn col-md-1 col-sm-1 col-xs-1"
          >
            <FacebookIcon id="fbook" size={32} round={true} />
          </FacebookShareButton>
        </h4>
      )}
    </div>
  );
}

export default EndScreen;
