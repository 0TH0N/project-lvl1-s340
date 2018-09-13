#!/usr/bin/env node
import { qName, questionYesOrNot } from '..';

console.log('Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
const name = qName();
let isCorrectAnswer = true;
let counter = 0;

while ((isCorrectAnswer) && (counter < 3)) {
  const number = Math.round(Math.random() * 100);
  const answer = questionYesOrNot(number);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  if (number % 2 === 0) {
    if (answer === 'yes') {
      isCorrectAnswer = true;
      console.log('Correct!');
    } else {
      isCorrectAnswer = false;
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
      console.log(`Let's try again, ${name}!`);
    }
  } else if (answer === 'no') {
    isCorrectAnswer = true;
    console.log('Correct!');
  } else {
    isCorrectAnswer = false;
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
    console.log(`Let's try again, ${name}!`);
  }

  counter += 1;
}

if (isCorrectAnswer) console.log(`Congratulations, ${name}!`);
