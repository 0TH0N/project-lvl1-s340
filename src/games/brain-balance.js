import { welcomeMessage, engineForGames } from '..';
import { cons } from 'hexlet-pairs';

export default () => {
  const brainBalance = () => {
    const number = Math.round(Math.random() * 5000);
    let stringFormatNumber = String(number);
    let nextStep = true;
    let minDigitInNumber = 99;
    let maxDigitInNumber = -1;
    let minDigitIndex = -1;
    let maxDigitIndex = -1;

    while (nextStep) {
      for (let i = 0; i < stringFormatNumber.length; i += 1) {
        if (Number(stringFormatNumber.charAt(i)) < minDigitInNumber) {
          minDigitInNumber = Number(stringFormatNumber.charAt(i));
          minDigitIndex = i;
        }

        if (Number(stringFormatNumber.charAt(i)) > maxDigitInNumber) {
          maxDigitInNumber = Number(stringFormatNumber.charAt(i));
          maxDigitIndex = i;
        }
      }

      if ((maxDigitInNumber - minDigitInNumber) > 1) {
        const tempStrNumber = stringFormatNumber;
        stringFormatNumber = '';
        minDigitInNumber += 1;
        maxDigitInNumber -= 1;

        for (let i = 0; i < tempStrNumber.length; i += 1) {
          switch (i) {
            case minDigitIndex: {
              stringFormatNumber += String(minDigitInNumber);
              break;
            }

            case maxDigitIndex: {
              stringFormatNumber += String(maxDigitInNumber);
              break;
            }

            default: {
              stringFormatNumber += tempStrNumber.charAt(i);
            }
          }
        }
      } else nextStep = false;
    }

    let countOfMinDigits = 0;
    for (let i = 0; i < stringFormatNumber.length; i += 1) {
      if (Number(stringFormatNumber.charAt(i)) === minDigitInNumber) countOfMinDigits += 1;
    }
    const lengthOfNumberString = stringFormatNumber.length;
    stringFormatNumber = '';
    for (let i = 0; i < countOfMinDigits; i += 1) stringFormatNumber += String(minDigitInNumber);
    for (let i = countOfMinDigits; i < lengthOfNumberString; i += 1) {
      stringFormatNumber += String(maxDigitInNumber);
    }

    const correctAnswer = stringFormatNumber;
    const expressionForQuestion = String(number);
    return cons(expressionForQuestion, correctAnswer);
  };

  welcomeMessage('Balance the given number.');
  engineForGames(brainBalance);
  return null;
};
