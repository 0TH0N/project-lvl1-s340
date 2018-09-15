import { welcomeMessage, random100, game } from '..';
import { cons } from 'hexlet-pairs';

// Здесь вычисляю следующий член прогрессии в зависимости от её типа
const calcNextNumber = (startNumber, forOperation, currenIndex) => {
  switch (forOperation) {
    case 1: {
      return (startNumber + 2);
    }
    case 2: {
      return (startNumber * 2);
    }
    default: {
      return (startNumber + currenIndex + 1);
    }
  }
};

/* Функция где составляется строка с последовательностью. Член прогрессии выбранный в
качестве ответа сохраняется в строчке, а перед ним ставится две точки. Позже в другой
функции член-прогрессии ответ будет "выдран" из последовательности, ответ и строчка
с отсутствующим членом будут переданы дальше */
const resultExpressionWithAnswer = (startNumber, amountOfNumbers, hiddenNumberIndex,
  forOperation, currenIndex) => {
  const nextNumber = calcNextNumber(startNumber, forOperation, currenIndex);

  if ((hiddenNumberIndex === (amountOfNumbers - 1))
    && (currenIndex === (amountOfNumbers - 1))) return `..${startNumber}`;

  if (currenIndex === (amountOfNumbers - 1)) return String(startNumber);

  if (hiddenNumberIndex === currenIndex) {
    return `..${startNumber} ${resultExpressionWithAnswer(nextNumber, amountOfNumbers,
      hiddenNumberIndex, forOperation, currenIndex + 1)} `;
  }

  return `${startNumber} ${resultExpressionWithAnswer(nextNumber, amountOfNumbers,
    hiddenNumberIndex, forOperation, currenIndex + 1)} `;
};

/* Функция где "выдирается ответ, формируется пара из составных данных "вопрос-ответ"
общим для всех игр и передается дальше. */
const getAllResult = (expressionWithResult) => {
  const dotsPosition = expressionWithResult.indexOf('..', 0);
  const answerIndexEnd = expressionWithResult.indexOf(' ', dotsPosition + 1);
  const first = expressionWithResult.substring(0, dotsPosition + 2);
  const second = expressionWithResult.substring(answerIndexEnd + 1);
  const answer = expressionWithResult.substring(dotsPosition + 2, answerIndexEnd);
  return cons(`${first} ${second} `, answer);
};

export default () => {
  const func = () => {
    // Генерация случайных и инициализация жестко заданых чисел нужных для игры
    const startNumber = random100();
    const amountOfNumbers = 10;
    const temp = Math.floor((Math.random()) * amountOfNumbers);
    const hiddenNumberIndex = temp === amountOfNumbers ? temp - 1 : temp;
    const forOperation = Math.ceil(Math.random() * 3);
    /* Вызов функции формирующей строку с последовательностью вместе с точками и ответом
    сразу после них без пробелов */
    const expressionWithResult = resultExpressionWithAnswer(startNumber, amountOfNumbers,
      hiddenNumberIndex, forOperation, 0);
    /* Вызов функции возвращающей составные данные из пары "вопрос-ответ" общим для всех
    игр, которые затем передаются в общую логику для всех игр */
    return getAllResult(expressionWithResult);
  };

  welcomeMessage();
  console.log('What number is missing in this progression?');
  game(func);
  return null;
};
