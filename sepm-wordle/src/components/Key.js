import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyval, functionKey }) {
  const { board, setBoard, currentAttempt, setCurrentAttempt } =
    useContext(AppContext);

  const pickLetter = () => {
    if (keyval === "ENTER") {
      if (currentAttempt.letterPosition !== 5) return;
      setCurrentAttempt({
        attempt: currentAttempt.attempt + 1,
        letterPosition: 0,
      });
    } else {
      if (currentAttempt.letterPosition > 4) return;
      const newBoard = [...board];
      newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyval;
      setBoard(newBoard);
      setCurrentAttempt({
        ...currentAttempt,
        letterPosition: currentAttempt.letterPosition + 1,
      });
    }
  };
  return (
    <div className="key" id={functionKey && "functionKey"} onClick={pickLetter}>
      {keyval}
    </div>
  );
}

export default Key;
