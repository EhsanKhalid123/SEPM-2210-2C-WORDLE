import React, { useState } from "react";
import { boardClean } from "./Words";

function Board() {
    const [board, setBoard] = useState(boardClean)
  return <div>Board</div>;
}

export default Board;
