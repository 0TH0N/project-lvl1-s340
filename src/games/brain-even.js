import { welcomeMessage, random100, game } from '..';
import { cons } from 'hexlet-pairs';

export default () => {
  const func = () => {
    const number = random100();
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const expression = number;
    return cons(expression, correctAnswer);
  };

  welcomeMessage();
  console.log('Answer "yes" if number even otherwise answer "no".');
  game(func);
  return null;
};
