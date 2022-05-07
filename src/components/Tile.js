import React, { useContext } from "react";
import { AppContext } from "../App";
 
function Tile({tilePosition, attemptNumber}) {

    const { letterBoard, correctWord, presentAttempt } = useContext(AppContext);
    const tile = letterBoard[attemptNumber][tilePosition];

    const correct = correctWord[tilePosition] === tile;
    const partial = !correct && tile !== "" && correctWord.includes(tile)

    const letterState = presentAttempt.attempt > attemptNumber && (correct ? "correct" : partial ? "almost" : "error");   
    
    return (
        <div className="tile" id={letterState}>
           {tile}
        </div>

    )
}

export default Tile;