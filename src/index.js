import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const qName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

const failMessage = (answer, correctAnswer, name) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
  console.log(`Let's try again, ${name}!`);
  return null;
};

const finalSuccessfulMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
  return null;
};

const questionAndAnswer = (parametr) => {
  const result = readlineSync.question(`Question: ${parametr}\nYour answer: `);
  return result;
};

const successfulMessage = () => {
  console.log('Correct!');
  return null;
};

export const random100 = () => Math.round(Math.random() * 100);

export const game = (func) => {
  const name = qName();
  let isCorrectAnswer = true;
  let counter = 0;
  const maxCounter = 3;

  while ((isCorrectAnswer) && (counter < maxCounter)) {
    const pair = func();
    const expression = car(pair);
    const correctAnswer = cdr(pair);
    const answer = questionAndAnswer(expression);

    if (answer === correctAnswer) {
      successfulMessage();
    } else {
      isCorrectAnswer = false;
      failMessage(answer, correctAnswer, name);
    }

    counter += 1;
  }

  if (isCorrectAnswer) finalSuccessfulMessage(name);
  return null;
};
