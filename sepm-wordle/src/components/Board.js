import React, { useState } from "react";
import { boardClean } from "./Words";
{/*
    the board component which will set the board state 
*/}
function Board() {
  const [board, setBoard] = useState(boardClean);
  return (
    <div className="Board">
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
      <div className="row"></div>
    </div>
  );
}

export default Board;
