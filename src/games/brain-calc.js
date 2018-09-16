import { welcomeMessage, random100, engineForGames } from '..';
import { cons } from 'hexlet-pairs';


export default () => {
  const brainCalc = () => {
    const number1 = random100();
    const number2 = random100();
    const arithmeticOperationCode = Math.ceil(Math.random() * 3);
    let result;
    let stringExpressionForQuestion;

    switch (arithmeticOperationCode) {
      case 1: {
        result = number1 + number2;
        stringExpressionForQuestion = `${number1} + ${number2}`;
        break;
      }

      case 2: {
        result = number1 - number2;
        stringExpressionForQuestion = `${number1} - ${number2}`;
        break;
      }

      default: {
        result = number1 * number2;
        stringExpressionForQuestion = `${number1} * ${number2}`;
      }
    }

    const correctAnswer = String(result);
    const expressionForQuestion = stringExpressionForQuestion;
    return cons(expressionForQuestion, correctAnswer);
  };

  welcomeMessage('What is the result of the expression?');
  engineForGames(brainCalc);
  return null;
};
