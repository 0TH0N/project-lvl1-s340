import readlineSync from 'readline-sync';

export const qName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const failMessage = (answer, correctAnswer, name) => {
  console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}"`);
  console.log(`Let's try again, ${name}!`);
  return null;
};

export const finalSuccessfulMessage = (name) => {
  console.log(`Congratulations, ${name}!`);
  return null;
};

export const questionAndAnswer = (parametr) => {
  const result = readlineSync.question(`Question: ${parametr}\nYour answer: `);
  return result;
};

export const successfulMessage = () => {
  console.log('Correct!');
  return null;
};
