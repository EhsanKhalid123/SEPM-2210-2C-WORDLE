import guessList from "./guess-list.txt";

export const boardClean = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateGuessSet = async () => {
  let guessSet;
  await fetch(guessList)
    .then((response) => response.text())
    .then((result) => {
      const guessArr = result.split("\n");
      guessSet = new Set(guessArr);
    });

  return { guessSet };
};
