import React from "react";

function Keyboard() {
    const keys1 = ["Q","W","E","R","T","Y","U","I","O","P"];
    const keys3 = ["A","S","D","F","G","H","J","K","L"];
    const keys4 = ["Z","X","C","V","B","N","M"];
  return (
    <div className="keyboard">
      <div className="firstLine"></div>
      <div className="secondLine"></div>
      <div className="thirdLine"></div>
    </div>
  );
}

export default Keyboard;
