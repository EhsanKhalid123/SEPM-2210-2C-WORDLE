import React, { useContext } from "react";
import { AppContext } from "../App";
 
function Tile({tilePosition, attemptNumber}) {

    const { letterBoard,checkcorrect,lastattempt} = useContext(AppContext);
    const tile = letterBoard[attemptNumber][tilePosition];

    const rightnumber=checkcorrect[tilePosition] === tile;
    const nearlyright= !rightnumber && tile !== "" && checkcorrect.includes(tile);

    const tilesituation = lastattempt?.attempt() !== attemptNumber && (rightnumber ? "correct" : nearlyright ? "almost" : "error");

    return (
        <div className="tile" id ={tilesituation}>
            {" "}
           {tile}
        </div>

    )
}

export default Tile;