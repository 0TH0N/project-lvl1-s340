import { welcomeMessage, random100, game } from '..';
import { cons } from 'hexlet-pairs';


const prime = (number) => {
  let divisor = 2;
  while (Math.floor(number / divisor) > 1) {
    divisor += 1;
    if ((number % divisor) === 0) return false;
  }
  return true;
};

export default () => {
  const func = () => {
    const number = random100();
    const answer = prime(number);

    const correctAnswer = answer ? 'yes' : 'no';
    const expression = String(number);
    return cons(expression, correctAnswer);
  };

  welcomeMessage();
  console.log('Is this number prime?');
  game(func);
  return null;
};
