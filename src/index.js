import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const welcomeMessage = (additionalMessage) => {
  console.log(`Welcome to the Brain Games!\n${additionalMessage}`);
};

export const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

const failMessage = (answer, correctAnswer, userName) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
  console.log(`Let's try again, ${userName}!`);
  return null;
};

const finalSuccessfulMessage = (userName) => {
  console.log(`Congratulations, ${userName}!`);
  return null;
};

const viewQuestionAndTakingUserAnswer = (parametr) => {
  const result = readlineSync.question(`Question: ${parametr}\nYour answer: `);
  return result;
};

const successfulMessageForCurrentStep = () => {
  console.log('Correct!');
  return null;
};

export const random100 = () => Math.round(Math.random() * 100);

export const engineForGames = (runningGame) => {
  const userName = askName();
  let isCorrectAnswer = true;
  let counter = 0;
  const maxCounter = 3;

  while ((isCorrectAnswer) && (counter < maxCounter)) {
    const pair = runningGame();
    const questionExpression = car(pair);
    const correctAnswer = cdr(pair);
    const userAnswer = viewQuestionAndTakingUserAnswer(questionExpression);

    if (userAnswer === correctAnswer) {
      successfulMessageForCurrentStep();
    } else {
      isCorrectAnswer = false;
      failMessage(userAnswer, correctAnswer, userName);
    }

    counter += 1;
  }

  if (isCorrectAnswer) finalSuccessfulMessage(userName);
  return null;
};
