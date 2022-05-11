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
  /**
   * set date at initial value, then get current date
   * find the difference in days and use that as indicator
   * to fetch word of list so it updates every day
   */
  const start = new Date("5/11/2022");
  const current = new Date();
  current.setHours(0, 0, 0, 0);
  const diffInDays = Math.abs(current - start) / (1000 * 60 * 60 * 24);



  let wordOfTheDay;
  await fetch(answerList)
    .then((response) => response.text())
    .then((result) => {
      const answerArr = result.split("\n");
      wordOfTheDay = answerArr[diffInDays];
    });
  return { wordOfTheDay, diffInDays};
};
