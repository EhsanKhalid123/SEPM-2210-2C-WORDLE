import React, { useState } from "react";
import { boardClean } from "./Words";

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
