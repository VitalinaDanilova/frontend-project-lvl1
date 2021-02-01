import readlineSync from 'readline-sync';

const random = () => {
  const min = Math.ceil(1);
  const max = Math.floor(51);
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let userAnswer;
  let i = 0;
  while (i < 3) {
    const num1 = random();
    const num2 = random();
    const answer = gcd(num1, num2);

    userAnswer = readlineSync.question(`Question: ${num1} ${num2}
Your answer: `);
    if (answer === parseInt(userAnswer, 10)) {
      console.log('Correct!');
      i += 1;
    } else if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer
        was '${answer}'. Let's try again, ${userName}!`);
      i = 0;
    }
  }
  console.log(`Congratulations, ${userName}`);
};

export default gcdGame;
