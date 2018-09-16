import { welcomeMessage, random100, engineForGames } from '..';
import { cons } from 'hexlet-pairs';

const calcGcd = (num1, num2) => {
  const max = num1 > num2 ? num1 : num2;
  const min = num1 < num2 ? num1 : num2;

  if ((max % min) === 0) return min;
  return calcGcd(min, (max % min));
};

export default () => {
  const brainGcd = () => {
    const number1 = random100();
    const number2 = random100();
    const gcd = calcGcd(number1, number2);

    const correctAnswer = String(gcd);
    const expressionForQuestion = `${number1} ${number2}`;
    return cons(expressionForQuestion, correctAnswer);
  };

  welcomeMessage('Find the greatest common divisor of given numbers.');
  engineForGames(brainGcd);
  return null;
};
