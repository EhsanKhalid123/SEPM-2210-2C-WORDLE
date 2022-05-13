import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";
import Parser from "html-react-parser";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

function EndScreen() {
  const {
    gameCompleted,
    answer,
    currentAttempt,
    diffInDays,
    board,
    emojiGrid,
    setEmojiGrid,
  } = useContext(AppContext);
  const [emoji, setEmoji] = useState("");

  var midnight = new Date(new Date()).setUTCHours(24, 0, 0, 0) - new Date();

  // console.log(midnight);
  // console.log(midnight);
  // const midnightUTCObject = new Date(midnightUTC);

  // console.log(l);
  // console.log(midnightUTCObject);

  // console.log(d);

  // midnight.setHours(24, 0, 0, 0);

  var midnightSeconds = Math.floor(midnight / 1000);

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

  const wordoTitleTwt = "\r\n" + "\r\n" + "WORDO: " + diffInDays.toString();

  const wordoTitleFb = "WORDO: " + diffInDays.toString() + "\r\n" + "\r\n";
  const shareFbTxt =
    "I completed the WORDO in " +
    currentAttempt.attempt.toString() +
    "attempt[s]";

  const fbMessage = wordoTitleFb + shareFbTxt;

  useEffect(() => {
    for (var i = 0; i < board.length; i++) {
      // if (board[i] === "") {
      //   return;
      // }
      var boardy = board[i];
      for (var j = 0; j < boardy.length; j++) {
        if (boardy[j] === "") {
          return;
        }
        // console.log("board[" + i + "][" + j + "] = " + boardy[j]);
        if (board[i][j] === answer.toUpperCase()[j]) {
          setEmojiGrid((emojiGrid) => [...emojiGrid, "&#129001;"]);
        } else if (
          answer.toUpperCase().includes(board[i][j]) &&
          board[i][j] != "" &&
          board[i][j] != answer.toUpperCase()[j]
        ) {
          setEmojiGrid((emojiGrid) => [...emojiGrid, "&#129000;"]);
        } else {
          setEmojiGrid((emojiGrid) => [...emojiGrid, "&#11035;;"]);
        }
      }
      // console.log("\n");
    }
  }, []);

  useEffect(() => {
    const half = Math.ceil([...emojiGrid].length / 2);
    const emoji = [...emojiGrid].slice(0, half);
    var emojiString = emoji.toString();
    // console.log(emojiString);
    emojiString = emojiString.replace(/,/g, " ");
    emojiString = emojiString.replace(/(?!$|\n)([^\n]{50}(?!\n))/g, "$1\n");
    emojiString = emojiString.replace(/&#11035;;/g, "&#11035;");
    // console.log(emojiString);
    // emoji = emojiString;
    setEmoji(emojiString);
  });

  // console.log(emoji);

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
            title={Parser(emoji)}
            url={wordoTitleTwt}
            className="shareBtn col-md-1 col-sm-1 col-xs-1"
          >
            {" "}
            <TwitterIcon size={32} round={true} />
            <a className="twitter">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </TwitterShareButton>
          <FacebookShareButton
            url="www.google.com"
            quote={fbMessage}
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
