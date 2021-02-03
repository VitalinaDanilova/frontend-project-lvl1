import readlineSync from 'readline-sync';

const random = () => {
  const min = Math.ceil(1);
  const max = Math.floor(51);
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};

const operators = [{
  sign: '+',
  method(a, b) { return a + b; },
}, {
  sign: '-',
  method(a, b) { return a - b; },
}, {
  sign: '*',
  method(a, b) { return a * b; },
}];

const calcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  let userAnswer;
  let i = 0;
  while (i < 3) {
    const num1 = random();
    const num2 = random();
    const selectedOperator = Math.floor(Math.random() * operators.length);
    const operator = operators[selectedOperator].sign;
    const answer = operators[selectedOperator].method(num1, num2);

    userAnswer = readlineSync.question(`Question: ${num1} ${operator} ${num2}
Your answer: `);
    if (answer === parseInt(userAnswer, 10)) {
      console.log('Correct!');
      i += 1;
    } else if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer
        was '${answer}'. Let's try again, ${userName}!`);
      break;
    }
  } if (i === 3) {
    console.log(`Congratulations, ${userName}`);
  }
  return 0;
};

export default calcGame;
