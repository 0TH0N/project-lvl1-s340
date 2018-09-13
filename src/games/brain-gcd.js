import { random100, game } from '..';
import { cons } from 'hexlet-pairs';

export default () => {
  const func = () => {
    const number1 = random100();
    const number2 = random100();
    let min = number1 < number2 ? number1 : number2;
    let max = number1 > number2 ? number1 : number2;
    let buffer;

    while (max % min !== 0) {
      buffer = max % min;
      max = min;
      min = buffer;
    }

    const correctAnswer = String(min);
    const expression = `${number1} ${number2}`;
    return cons(expression, correctAnswer);
  };

  console.log('Welcome to Brain Games!\nFind the greatest common divisor of given numbers.');
  game(func);
  return null;
};
