import readlineSync from 'readline-sync';

const isEven = (num) => {
  let answer = '';
  if (num % 2 === 0) {
    answer = 'yes';
  }
  if (num % 2 !== 0) {
    answer = 'no';
  }
  return answer;
};

const random = () => {
  const min = Math.ceil(1);
  const max = Math.floor(101);
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let userAnswer;
  let i = 0;
  while (i < 3) {
    const num = random();
    userAnswer = readlineSync.question(`Question: ${num}
Your answer: `);
    if (isEven(num) === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else if (isEven(num) !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer
        was '${isEven(num)}'. Let's try again, ${userName}!`);
      break;
    }
  } if (i === 3) {
    console.log(`Congratulations, ${userName}`);
  }
};

export default evenGame;
