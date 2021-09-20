let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// returns random int (0 - 9)
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

// checks which guess is closest  to target
// return true if user is closest, false if computer is closest
const compareGuesses = (user_guess, comp_guess, secret_number) => {
  const user_diff = user_guess - secret_number;
  const comp_diff = comp_guess - secret_number;
  return Math.abs(user_diff) < Math.abs(comp_diff);
};

// Updates scores
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore += 1;
  }
  if (winner === "computer") {
    computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};
