import React from "react";

function Key({ keyval, functionKey }) {
  return (
    <div className="key" id={functionKey && "functionKey"}>
      {keyval}
    </div>
  );
}

export default Key;
