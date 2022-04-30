import React from "react";
import Tile from "./Tile";

function LetterBoard() {

    return (
        <div className="board">

            <div className="row">
                <Tile tilePosition={0} attemptNumber={0} />
                <Tile tilePosition={1} attemptNumber={0} />
                <Tile tilePosition={2} attemptNumber={0} />
                <Tile tilePosition={3} attemptNumber={0} />
                <Tile tilePosition={4} attemptNumber={0} />
            </div>

            <div className="row">
                <Tile tilePosition={0} attemptNumber={1} />
                <Tile tilePosition={1} attemptNumber={1} />
                <Tile tilePosition={2} attemptNumber={1} />
                <Tile tilePosition={3} attemptNumber={1} />
                <Tile tilePosition={4} attemptNumber={1} />
            </div>

            <div className="row">
                <Tile tilePosition={0} attemptNumber={2} />
                <Tile tilePosition={1} attemptNumber={2} />
                <Tile tilePosition={2} attemptNumber={2} />
                <Tile tilePosition={3} attemptNumber={2} />
                <Tile tilePosition={4} attemptNumber={2} />
            </div>

            <div className="row">
                <Tile tilePosition={0} attemptNumber={3} />
                <Tile tilePosition={1} attemptNumber={3} />
                <Tile tilePosition={2} attemptNumber={3} />
                <Tile tilePosition={3} attemptNumber={3} />
                <Tile tilePosition={4} attemptNumber={3} />
            </div>

            <div className="row">
                <Tile tilePosition={0} attemptNumber={4} />
                <Tile tilePosition={1} attemptNumber={4} />
                <Tile tilePosition={2} attemptNumber={4} />
                <Tile tilePosition={3} attemptNumber={4} />
                <Tile tilePosition={4} attemptNumber={4} />
            </div>

            <div className="row">
                <Tile tilePosition={0} attemptNumber={5} />
                <Tile tilePosition={1} attemptNumber={5} />
                <Tile tilePosition={2} attemptNumber={5} />
                <Tile tilePosition={3} attemptNumber={5} />
                <Tile tilePosition={4} attemptNumber={5} />
            </div>
            
        </div>

    )
}

export default LetterBoard;