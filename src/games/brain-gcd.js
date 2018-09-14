import { random100, game } from '..';
import { cons } from 'hexlet-pairs';

const calcNod = (num1, num2) => {
  const max = num1 > num2 ? num1 : num2;
  const min = num1 < num2 ? num1 : num2;

  if ((max % min) === 0) return min;
  return calcNod(min, (max % min));
};

export default () => {
  const func = () => {
    const number1 = random100();
    const number2 = random100();
    const nod = calcNod(number1, number2);

    const correctAnswer = String(nod);
    const expression = `${number1} ${number2}`;
    return cons(expression, correctAnswer);
  };

  console.log('Welcome to Brain Games!\nFind the greatest common divisor of given numbers.');
  game(func);
  return null;
};
