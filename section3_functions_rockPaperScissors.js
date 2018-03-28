const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Invalid input');
  }
};

const getComputerChoice = () => {
  switch(Math.floor(Math.random() * 2)) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
    default:
      console.log('error');
      break;
   }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'player won with secret bomb';
  }
  if (userChoice === computerChoice) {
    return 'tie';
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'computer won';
    } else {
      return 'player won';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'computer won';
    } else {
      return 'player won';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'computer won';
    } else {
      return 'player won';
    }
  }
  return 'error found';
};

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`userChoice: ${userChoice}, computerChoice: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
