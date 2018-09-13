import readlineSync from 'readline-sync';

export const qName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};

export const questionYesOrNot = (number) => {
  const result = readlineSync.question(`Question: ${number}\nYour answer: `);
  return result;
};
