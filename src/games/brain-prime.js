import { game } from '..';
import { cons } from 'hexlet-pairs';


const checkSimple = (number, next) => {
  if ((number / 2) < next) return true;
  if ((number % next) === 0) return false;
  return checkSimple(number, next + 1);
};

export default () => {
  const func = () => {
    const number = Math.round(Math.random() * 1000);
    const answer = checkSimple(number, 2);

    const correctAnswer = answer ? 'yes' : 'no';
    const expression = String(number);
    return cons(expression, correctAnswer);
  };

  console.log('Welcome to Brain Games!\nIs this number prime?');
  game(func);
  return null;
};
