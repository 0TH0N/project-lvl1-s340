import { welcomeMessage, random100, engineForGames } from '..';
import { cons } from 'hexlet-pairs';


const checkPrime = (number, divisor) => {
  if ((number / 2) < divisor) return true;
  if ((number % divisor) === 0) return false;
  return checkPrime(number, divisor + 1);
};


const isPrime = number => checkPrime(number, 2);


export default () => {
  const brainPrime = () => {
    const number = random100();
    const booleanAnswer = isPrime(number);

    const correctAnswer = booleanAnswer ? 'yes' : 'no';
    const expressionForQuestion = String(number);
    return cons(expressionForQuestion, correctAnswer);
  };

  welcomeMessage('Is this number prime?');
  engineForGames(brainPrime);
  return null;
};
