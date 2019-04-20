import { random100, engineForGames } from '..';
import { cons } from 'hexlet-pairs';


export default () => {
  const calcExpression = (number1, number2, arithmeticOperationCode) => {
    switch (arithmeticOperationCode) {
      case 1: return cons((`${number1} + ${number2}`), String(number1 + number2));
      case 2: return cons((`${number1} - ${number2}`), String(number1 - number2));
      default: return cons((`${number1} * ${number2}`), String(number1 * number2));
    }
  };


  const brainCalc = () => {
    const number1 = random100();
    const number2 = random100();
    const arithmeticOperationCode = Math.ceil(Math.random() * 3);
    return calcExpression(number1, number2, arithmeticOperationCode);
  };

  engineForGames(brainCalc, 'What is the result of the expression?');
  return null;
};
