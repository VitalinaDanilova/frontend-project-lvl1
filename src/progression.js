import readlineSync from 'readline-sync';

const random = () => {
  const min = Math.ceil(1);
  const max = Math.floor(51);
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
};

const items = {
  hidden: null,
};

const createProgression = () => {
  const arr = [];
  const x = random();
  let i = random();
  while (arr.length < 10) {
    i += x;
    arr.push(i);
  }

  const strProgressionWithHiddenItem = () => {
    items.hidden = arr[Math.floor(Math.random() * arr.length)];
    const result = [];
    for (let j = 0; j <= arr.length - 1; j += 1) {
      if (arr[j] === items.hidden) {
        result.push('..');
      } else {
        result.push(arr[j]);
      }
    }
    return result.join(' ');
  };
  return strProgressionWithHiddenItem(arr);
};

const progressionGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  let userAnswer;
  let i = 0;
  while (i < 3) {
    const question = createProgression();
    const answer = items.hidden;

    userAnswer = readlineSync.question(`Question: ${question}
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
    console.log(`Congratulations, ${userName}!`);
  }
};

export default progressionGame;
