import { random100, engineForGames } from '..';
import { cons } from 'hexlet-pairs';


const isEven = number => (number % 2 === 0 ? 'yes' : 'no');


export default () => {
  const brainEven = () => {
    const number = random100();
    const correctAnswer = isEven(number);
    const expressionForQuestion = String(number);
    return cons(expressionForQuestion, correctAnswer);
  };

  engineForGames(brainEven, 'Answer "yes" if number even otherwise answer "no".');
  return null;
};
