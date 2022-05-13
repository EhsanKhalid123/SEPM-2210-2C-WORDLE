import React from "react";
import "./Rules.css";
function Rules(props) {
  return props.trigger ? (
    <div className="rules">
      <div className="rules-inner">{props.children}</div>
    </div>
  ) : (
    ""
  );
}

export default Rules;
