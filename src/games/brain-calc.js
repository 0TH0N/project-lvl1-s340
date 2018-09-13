import { random100, game } from '..';
import { cons } from 'hexlet-pairs';


export default () => {
  const func = () => {
    const number1 = random100();
    const number2 = random100();
    const forOperation = Math.ceil(Math.random() * 3);
    let result;
    let str;

    switch (forOperation) {
      case 1: {
        result = number1 + number2;
        str = `${number1} + ${number2}`;
        break;
      }

      case 2: {
        result = number1 - number2;
        str = `${number1} - ${number2}`;
        break;
      }

      default: {
        result = number1 * number2;
        str = `${number1} * ${number2}`;
      }
    }

    const correctAnswer = String(result);
    const expression = str;
    return cons(expression, correctAnswer);
  };

  console.log('Welcome to Brain Games!\nWhat is the result of the expression?');
  game(func);
  return null;
};
