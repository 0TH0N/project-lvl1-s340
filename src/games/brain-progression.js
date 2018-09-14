import { random100, game } from '..';
import { cons } from 'hexlet-pairs';


const sum2 = (startNumber, amountOfNumbers, hiddenNumberIndex, currenIndex) => {
  const nextNumber = startNumber + 2;

  if ((hiddenNumberIndex === (amountOfNumbers - 1))
    && (currenIndex === (amountOfNumbers - 1))) return '..';
  if (currenIndex === (amountOfNumbers - 1)) return String(startNumber);
  if (hiddenNumberIndex === currenIndex) {
    return `.. ${sum2(nextNumber, amountOfNumbers, hiddenNumberIndex, currenIndex + 1)}`;
  }
  return `${startNumber} ${sum2(nextNumber, amountOfNumbers,
    hiddenNumberIndex, currenIndex + 1)}`;
};


const multi2 = (startNumber, amountOfNumbers, hiddenNumberIndex, currenIndex) => {
  const nextNumber = startNumber * 2;

  if ((hiddenNumberIndex === (amountOfNumbers - 1))
    && (currenIndex === (amountOfNumbers - 1))) return '..';
  if (currenIndex === (amountOfNumbers - 1)) return String(startNumber);
  if (hiddenNumberIndex === currenIndex) {
    return `.. ${multi2(nextNumber, amountOfNumbers, hiddenNumberIndex, currenIndex + 1)}`;
  }
  return `${startNumber} ${multi2(nextNumber, amountOfNumbers,
    hiddenNumberIndex, currenIndex + 1)}`;
};


const sumIndex = (startNumber, amountOfNumbers, hiddenNumberIndex, currenIndex) => {
  const nextNumber = startNumber + currenIndex + 1;

  if ((hiddenNumberIndex === (amountOfNumbers - 1))
    && (currenIndex === (amountOfNumbers - 1))) return '..';
  if (currenIndex === (amountOfNumbers - 1)) return String(startNumber);
  if (hiddenNumberIndex === currenIndex) {
    return `.. ${sumIndex(nextNumber, amountOfNumbers, hiddenNumberIndex, currenIndex + 1)}`;
  }
  return `${startNumber} ${sumIndex(nextNumber, amountOfNumbers,
    hiddenNumberIndex, currenIndex + 1)}`;
};


const resultExpression = (startNumber, amountOfNumbers, hiddenNumberIndex, forOperation) => {
  switch (forOperation) {
    case 1: return sum2(startNumber, amountOfNumbers, hiddenNumberIndex, 0);
    case 2: return multi2(startNumber, amountOfNumbers, hiddenNumberIndex, 0);
    default: return sumIndex(startNumber, amountOfNumbers, hiddenNumberIndex, 0);
  }
};


const sum2Answer = (startNumber, hiddenNumberIndex, currenIndex) => {
  if (currenIndex === hiddenNumberIndex) return startNumber;
  return sum2Answer(startNumber + 2, hiddenNumberIndex, currenIndex + 1);
};


const multi2Answer = (startNumber, hiddenNumberIndex, currenIndex) => {
  if (currenIndex === hiddenNumberIndex) return startNumber;
  return multi2Answer(startNumber * 2, hiddenNumberIndex, currenIndex + 1);
};


const sumIndexAnswer = (startNumber, hiddenNumberIndex, currenIndex) => {
  if (currenIndex === hiddenNumberIndex) return startNumber;
  return sumIndexAnswer(startNumber + currenIndex + 1, hiddenNumberIndex, currenIndex + 1);
};


const trueAnswer = (startNumber, hiddenNumberIndex, forOperation) => {
  switch (forOperation) {
    case 1: return sum2Answer(startNumber, hiddenNumberIndex, 0);
    case 2: return multi2Answer(startNumber, hiddenNumberIndex, 0);
    default: return sumIndexAnswer(startNumber, hiddenNumberIndex, 0);
  }
};

export default () => {
  const func = () => {
    const startNumber = random100();
    const amountOfNumbers = 10;
    const temp = Math.floor((Math.random()) * amountOfNumbers);
    const hiddenNumberIndex = temp === amountOfNumbers ? temp - 1 : temp;
    const forOperation = Math.ceil(Math.random() * 3);

    const correctAnswer = String(trueAnswer(startNumber, hiddenNumberIndex, forOperation));
    const expression = resultExpression(startNumber, amountOfNumbers,
      hiddenNumberIndex, forOperation);
    return cons(expression, correctAnswer);
  };

  console.log('Welcome to Brain Games!\nWhat number is missing in this progression?');
  game(func);
  return null;
};
