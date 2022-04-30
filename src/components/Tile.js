import React, { useContext } from "react";
import { AppContext } from "../App";
 
function Tile({tilePosition, attemptNumber}) {

    const { letterBoard } = useContext(AppContext);
    const tile = letterBoard[attemptNumber][tilePosition];

    return (
        <div className="tile">
           {tile}
        </div>

    )
}

export default Tile;