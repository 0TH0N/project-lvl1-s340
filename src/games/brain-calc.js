import {
  qName, questionAndAnswer, failMessage, successfulMessage, finalSuccessfulMessage,
} from '..';

export default () => {
  console.log('Welcome to Brain Games!\nWhat is the result of the expression?');
  const name = qName();
  let isCorrectAnswer = true;
  let counter = 0;
  const maxCounter = 3;

  while ((isCorrectAnswer) && (counter < maxCounter)) {
    const number1 = Math.round(Math.random() * 100);
    const number2 = Math.round(Math.random() * 100);
    const forOperation = Math.random() * 300;
    const operation = forOperation < 100 ? '+' : (forOperation < 200 ? '-' : '*');
    let result = 0;
    switch (operation) {
      case '+': {
        result = number1 + number2;
        break;
      }

      case '-': {
        result = number1 - number2;
        break;
      }

      default: result = number1 * number2;
    }

    const expression = `${number1} ${operation} ${number2}`;
    const answer = Number(questionAndAnswer(expression));

    if ((typeof (answer) === 'number') && (answer === result)) {
      isCorrectAnswer = true;
      successfulMessage();
    } else {
      isCorrectAnswer = false;
      failMessage(answer, result, name);
    }

    counter += 1;
  }

  if (isCorrectAnswer) finalSuccessfulMessage(name);
};
