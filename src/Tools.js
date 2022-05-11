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
export const getWordOfTheDay = async () => {
  const dateStart = new Date("5/11/2022");
  const current = new Date();
  const dateCurrent = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  console.log(dateStart);
  console.log(dateCurrent);

  let wordOfTheDay;
  await fetch(answerList)
    .then((response) => response.text())
    .then((result) => {
      const answerArr = result.split("\n");
      wordOfTheDay = answerArr[Math.floor(Math.random() * answerArr.length)];
    });
  return { wordOfTheDay };
};
