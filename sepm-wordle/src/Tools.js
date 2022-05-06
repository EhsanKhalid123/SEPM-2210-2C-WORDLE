import guessList from "./guess-list.txt";
import answerList from "./answer-list.txt";

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

export const randomlySelectAnswer = async () => {
  let wordOfTheDay;
  await fetch(answerList)
    .then((response) => response.text())
    .then((result) => {
      const answerArr = result.split("\n");
      wordOfTheDay = answerArr[Math.floor(Math.random() * answerArr.length)];
    });
  return { wordOfTheDay };
};
