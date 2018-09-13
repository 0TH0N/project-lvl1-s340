import {
  qName, questionAndAnswer, failMessage, successfulMessage, finalSuccessfulMessage,
} from '..';

export default () => {
  console.log('Welcome to Brain Games!\nFind the greatest common divisor of given numbers.');
  const name = qName();
  let isCorrectAnswer = true;
  let counter = 0;
  const maxCounter = 3;

  while ((isCorrectAnswer) && (counter < maxCounter)) {
    const number1 = Math.round(Math.random() * 100);
    const number2 = Math.round(Math.random() * 100);
    let min = number1 < number2 ? number1 : number2;
    let max = number1 > number2 ? number1 : number2;
    let buffer;
    const answer = questionAndAnswer(`${number1} ${number2}`);

    while (max % min !== 0) {
      buffer = max % min;
      max = min;
      min = buffer;
    }

    if (Number(answer) === min) {
      successfulMessage(name);
    } else {
      isCorrectAnswer = false;
      failMessage(answer, min, name);
    }

    counter += 1;
  }

  if (isCorrectAnswer) finalSuccessfulMessage(name);
};
