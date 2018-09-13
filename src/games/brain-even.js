import {
  qName, questionAndAnswer, failMessage, successfulMessage, finalSuccessfulMessage,
} from '..';

export default () => {
  console.log('Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".');
  const name = qName();
  let isCorrectAnswer = true;
  let counter = 0;
  const maxCounter = 3;

  while ((isCorrectAnswer) && (counter < maxCounter)) {
    const number = Math.round(Math.random() * 100);
    const answer = questionAndAnswer(number);
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

  if (isCorrectAnswer) finalSuccessfulMessage(name);
};
