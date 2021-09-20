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
  const user_diff = getAbsoluteDistance(user_guess, secret_number);
  const comp_diff = getAbsoluteDistance(comp_guess, secret_number);
  return user_diff < comp_diff;
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

const getAbsoluteDistance = (val1, val2) => {
  return Math.abs(val1 - val2);
};
