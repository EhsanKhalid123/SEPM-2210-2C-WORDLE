import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyval, functionKey, disabled }) {
  const { onPickLetter, onDeleteClick, onEnterClick } = useContext(AppContext);

  {
    /** actions when clicking button */
  }
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
    <div
      className="key"
      id={functionKey ? "functionKey" : disabled && "disabled"}
      onClick={pickLetter}
    >
      {keyval}
    </div>
  );
}

export default Key;
