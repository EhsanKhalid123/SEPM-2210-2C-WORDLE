import guessList from "./guess-list.txt";
import answerList from "./answer-list.txt";

{
  /** Board Matrix. The default matrix array that is empty */
}
export const boardClean = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

{
  /** Generate guess set to check users guesses for validity */
}
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

{
  /** Select word of the day */
}
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
