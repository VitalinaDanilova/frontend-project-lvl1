import readlineSync from 'readline-sync';

const random = () => {
  const min = Math.ceil(1);
  const max = Math.floor(101);
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= num; i += 1) {
    if (num % i === 0 && num !== i) {
      return false;
    }
  }
  return true;
};

const getAnswer = (num) => {
  let answer = '';
  if (isPrime(num)) {
    answer = 'yes';
  }
  if (!isPrime(num)) {
    answer = 'no';
  }
  return answer;
};

const primeGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  let userAnswer;
  let i = 0;
  while (i < 3) {
    const num = random();
    const answer = getAnswer(num);
    userAnswer = readlineSync.question(`Question: ${num}
Your answer: `);
    if (getAnswer(num) === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else if (answer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer
        was '${answer}'. Let's try again, ${userName}!`);
      break;
    }
  } if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default primeGame;
