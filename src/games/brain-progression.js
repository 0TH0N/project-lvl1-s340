import { random100, engineForGames } from '..';
import { cons } from 'hexlet-pairs';


const getNextNumberInProgression = currentElement => currentElement + 2;


const getCorrectAnswer = (startNumber, hiddenNumberIndex, currentIndex) => {
  if (currentIndex === hiddenNumberIndex) return startNumber;
  return getCorrectAnswer(getNextNumberInProgression(startNumber),
    hiddenNumberIndex, currentIndex + 1);
};


const makeExpresstionForQuestion = (startNumber,
  hiddenNumberIndex, amountOfNumbers, currentIndex) => {
  const currentElement = currentIndex === hiddenNumberIndex ? '..' : `${startNumber}`;
  if (currentIndex === amountOfNumbers - 1) return currentElement;
  return `${currentElement} ${makeExpresstionForQuestion(getNextNumberInProgression(startNumber),
    hiddenNumberIndex, amountOfNumbers, currentIndex + 1)}`;
};


const getExpressionForQuestionAndCorrectAnswer = (startNumber,
  hiddenNumberIndex, amountOfNumbers) => {
  const expressionForQuestion = makeExpresstionForQuestion(startNumber,
    hiddenNumberIndex, amountOfNumbers, 0);
  const correctAnswer = String(getCorrectAnswer(startNumber, hiddenNumberIndex, 0));
  return cons(expressionForQuestion, correctAnswer);
};


export default () => {
  const brainProgression = () => {
    const startNumber = random100();
    const amountOfNumbers = 10;
    const temp = Math.floor((Math.random()) * amountOfNumbers);
    const hiddenNumberIndex = temp === amountOfNumbers ? temp - 1 : temp;
    return getExpressionForQuestionAndCorrectAnswer(startNumber,
      hiddenNumberIndex, amountOfNumbers);
  };

  engineForGames(brainProgression, 'What number is missing in this progression?');
  return null;
};
