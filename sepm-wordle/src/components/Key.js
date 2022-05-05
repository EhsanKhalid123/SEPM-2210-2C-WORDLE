import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyval, functionKey }) {
  const { onPickLetter, onDeleteClick, onEnterClick } = useContext(AppContext);

  const pickLetter = () => {
    if (keyval === "ENTER") {
      onEnterClick();
    } else if (keyval === "DELETE") {
      onDeleteClick();
    } else {
      onPickLetter(keyval);
    }
  };
  return (
    <div className="key" id={functionKey && "functionKey"} onClick={pickLetter}>
      {keyval}
    </div>
  );
}

export default Key;
