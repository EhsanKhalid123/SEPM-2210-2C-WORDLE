import React from "react";
import Tile from "./Tile";

function LetterBoard() {
    const items = [];
    const items1 = [];
    const items2 = [];
    const items3 = [];
    const items4 = [];
    const items5 = []
    
  
    for (let i = 0; i < 5; i++) {
        items1.push(<Tile tilePosition={i} attemptNumber={0} />);
        items2.push(<Tile tilePosition={i} attemptNumber={1} />);
        items3.push(<Tile tilePosition={i} attemptNumber={2} />);
        items4.push(<Tile tilePosition={i} attemptNumber={3} />);
        items5.push(<Tile tilePosition={i} attemptNumber={4} />);
        items.push(<Tile tilePosition={i} attemptNumber={5} />);
        


    }

    return (
        <div className="board">
            <div className="row">
                <>{items1}</>
    

            </div>


            <div className="row">
            <>{items2}</>
    
            </div>

            <div className="row">
            <>{items3}</>
    
            </div>

            <div className="row">
            <>{items4}</>
    
            </div>

            <div className="row">
            <>{items5}</>
    
            </div>

            <div className="row">
            <>{items}</>
    
            </div>

            
        </div>

    )
}

export default LetterBoard;