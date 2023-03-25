// Let's play Rock, Paper, Scissors!

const choices = ["rock","paper","scissors"];

//Computer randomly picks from choices
function getComputerChoice(arr) {
  const randomPick = Math.floor(Math.random() * arr.length);
  const pick = arr[randomPick];
  return pick;
}

const computerSelection = getComputerChoice(choices);

//Player choice
const playerSelection = prompt("What's your pick? < rock, paper, scissors >").toLowerCase();

console.log("You picked " + `${playerSelection}`);
console.log("While computer picked " + `${computerSelection}`);


//Match begins
if (playerSelection === computerSelection) {
  return "It's a tie!";
}
else if (playerSelection === "rock") {
  if (computerSelection === "paper") {
    return "Paper covers rock. Computer wins!";
  }
  else {
    return "Rock smashes scissors. Player wins!";
  }
}
else if (playerSelection === "paper") {
  if (computerSelection === "scissors") {
    return "Scissors cuts paper. Computer wins!";
  }
  else {
    return "Paper covers rock. Player wins!";
  }
}
else if (playerSelection === "scissors") {
  if (computerSelection === "rock") {
    return "Rock smashes scissors. Computer wins!";
  }
  else {
    return "Scissors cuts paper. Player wins!";
  }
}