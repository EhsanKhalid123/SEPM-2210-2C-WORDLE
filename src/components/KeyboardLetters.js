import React, { useContext, useState } from "react";
import { AppContext } from "../App";

function KeyboardLetters({ letterValue, largeLetter }) {

    const { onDeleteLetter, onEnterButton, onPickLetter } = useContext(AppContext);

    const pickLetter = () => {
        if (letterValue === "ENTER") {
            onEnterButton()
        } else if (letterValue === "DELETE") {
            onDeleteLetter();
        } else {
            onPickLetter(letterValue)
        }
    };

    return (
        <div className="key" id={largeLetter && "large"} onClick={pickLetter}>
            {letterValue}
        </div>

    )
}

export default KeyboardLetters;