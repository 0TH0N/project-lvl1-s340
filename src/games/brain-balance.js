import { welcomeMessage, game } from '..';
import { cons } from 'hexlet-pairs';

export default () => {
  const func = () => {
    const number = Math.round(Math.random() * 5000);
    let strNumber = String(number);
    let nextStep = true;
    let min = 99;
    let max = -1;
    let minIndex = -1;
    let maxIndex = -1;

    while (nextStep) {
      nextStep = false;

      for (let i = 0; i < strNumber.length; i += 1) {
        if (Number(strNumber.charAt(i)) < min) {
          min = Number(strNumber.charAt(i));
          minIndex = i;
        }

        if (Number(strNumber.charAt(i)) > max) {
          max = Number(strNumber.charAt(i));
          maxIndex = i;
        }
      }

      if ((max - min) > 1) {
        nextStep = true;
        const tempStrNumber = strNumber;
        strNumber = '';
        min += 1;
        max -= 1;

        for (let i = 0; i < tempStrNumber.length; i += 1) {
          switch (i) {
            case minIndex: {
              strNumber += String(min);
              break;
            }

            case maxIndex: {
              strNumber += String(max);
              break;
            }

            default: {
              strNumber += tempStrNumber.charAt(i);
            }
          }
        }
      } else nextStep = false;
    }

    let minCount = 0;
    for (let i = 0; i < strNumber.length; i += 1) {
      if (Number(strNumber.charAt(i)) === min) minCount += 1;
    }
    const maxCount = strNumber.length - minCount;
    strNumber = '';
    for (let i = 0; i < minCount; i += 1) strNumber += String(min);
    for (let i = minCount; i < (minCount + maxCount); i += 1) strNumber += String(max);

    const correctAnswer = strNumber;
    const expression = String(number);
    return cons(expression, correctAnswer);
  };

  welcomeMessage();
  console.log('Balance the given number.');
  game(func);
  return null;
};
