#!/usr/bin/env node
import { qName, questionYesOrNot } from '..';

console.log('Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
const name = qName();
let isCorrectAnswer = true;
let counter = 0;

const failMessage = (answer1, correctAnswer1, name1) => {
  console.log(`"${answer1}" is wrong answer ;(. Correct answer was "${correctAnswer1}"`);
  console.log(`Let's try again, ${name1}!`);
  return null;
};

const successfulMessage = () => {
  console.log('Correct!');
  return null;
};

while ((isCorrectAnswer) && (counter < 3)) {
  const number = Math.round(Math.random() * 100);
  const answer = questionYesOrNot(number);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  if (number % 2 === 0) {
    if (answer === 'yes') {
      isCorrectAnswer = true;
      successfulMessage();
    } else {
      isCorrectAnswer = false;
      failMessage(answer, correctAnswer, name);
    }
  } else if (answer === 'no') {
    isCorrectAnswer = true;
    successfulMessage();
  } else {
    isCorrectAnswer = false;
    failMessage(answer, correctAnswer, name);
  }

  counter += 1;
}

if (isCorrectAnswer) console.log(`Congratulations, ${name}!`);
