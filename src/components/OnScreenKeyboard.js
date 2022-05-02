import React, {useCallback, useEffect, useContext} from "react";
import KeyboardLetters from "./KeyboardLetters";
import { AppContext } from "../App";

function OnScreenKeyboard() {

    const { onDeleteLetter, onPickLetter, onEnterButton } = useContext(AppContext);

    const keyboardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const keyboardRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const keyboardRow3 = ["Z", "X", "C", "V", "B", "N", "M"];
    
    const manageKeyboard = useCallback((event) => {
        
        if (event.key === "Enter"){
            onEnterButton();
        }else if (event.key === "Backspace"){
            onDeleteLetter();
        } else {
            keyboardRow1.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()){
                    onPickLetter(key);
                }
            });
            keyboardRow2.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()){
                    onPickLetter(key);
                }
            });
            keyboardRow3.forEach((key) => {
                if (event.key.toLowerCase() === key.toLowerCase()){
                    onPickLetter(key);
                }
            });
        }
    });

    useEffect(() => {
        document.addEventListener("keydown", manageKeyboard)

        return () => {
            document.removeEventListener("keydown", manageKeyboard)
        }
    }, [manageKeyboard]);

    return (
        <div className="keyboard" onKeyDown={manageKeyboard}>

            <div className="line1">{keyboardRow1.map((key) => {
                return (
                    <KeyboardLetters letterValue={key} />
                );

            })}
            </div>

            <div className="line2">{keyboardRow2.map((key) => {
                return (
                    <KeyboardLetters letterValue={key} />
                );

            })}
            </div>

            <div className="line3"><KeyboardLetters letterValue={"ENTER"} largeLetter />
            {keyboardRow3.map((key) => {
                
                return (
                    <KeyboardLetters letterValue={key} />
                );

            })}
                <KeyboardLetters letterValue={"DELETE"} largeLetter />
            </div>

        </div>

    )
}

export default OnScreenKeyboard;