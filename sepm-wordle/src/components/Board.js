import React, { useState } from "react";
import { boardClean } from "./Words";
import Letter from "./Letter";
{
  /*
    the board component which will set the board state 
*/
}
function Board() {
  const [board, setBoard] = useState(boardClean);
  return (
    <div className="Board">
      <div className="row">
        <Letter letterPosition={0} attempNumber={0} />
        <Letter letterPosition={1} attempNumber={0} />
        <Letter letterPosition={2} attempNumber={0} />
        <Letter letterPosition={3} attempNumber={0} />
        <Letter letterPosition={4} attempNumber={0} />
      </div>
      <div className="row">
        <Letter letterPosition={0} attempNumber={1} />
        <Letter letterPosition={1} attempNumber={1} />
        <Letter letterPosition={2} attempNumber={1} />
        <Letter letterPosition={3} attempNumber={1} />
        <Letter letterPosition={4} attempNumber={1} />
      </div>
      <div className="row">
        <Letter letterPosition={0} attempNumber={2} />
        <Letter letterPosition={1} attempNumber={2} />
        <Letter letterPosition={2} attempNumber={2} />
        <Letter letterPosition={3} attempNumber={2} />
        <Letter letterPosition={4} attempNumber={2} />
      </div>
      <div className="row">
        <Letter letterPosition={0} attempNumber={3} />
        <Letter letterPosition={1} attempNumber={3} />
        <Letter letterPosition={2} attempNumber={3} />
        <Letter letterPosition={3} attempNumber={3} />
        <Letter letterPosition={4} attempNumber={3} />
      </div>
      <div className="row">
        <Letter letterPosition={0} attempNumber={4} />
        <Letter letterPosition={1} attempNumber={4} />
        <Letter letterPosition={2} attempNumber={4} />
        <Letter letterPosition={3} attempNumber={4} />
        <Letter letterPosition={4} attempNumber={4} />
      </div>
      <div className="row">
        <Letter letterPosition={0} attempNumber={0} />
        <Letter letterPosition={1} attempNumber={0} />
        <Letter letterPosition={2} attempNumber={0} />
        <Letter letterPosition={3} attempNumber={0} />
        <Letter letterPosition={4} attempNumber={0} />
      </div>
    </div>
  );
}

export default Board;
