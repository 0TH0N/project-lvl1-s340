import { welcomeMessage, random100, engineForGames } from '..';
import { cons } from 'hexlet-pairs';

export default () => {
  const brainEven = () => {
    const number = random100();
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const expressionForQuestion = number;
    return cons(expressionForQuestion, correctAnswer);
  };

  welcomeMessage('Answer "yes" if number even otherwise answer "no".');
  engineForGames(brainEven);
  return null;
};
