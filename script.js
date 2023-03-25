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
  console.log("It's a tie!");
}
else if (playerSelection === "rock") {
  if (computerSelection === "paper") {
    console.log("Paper covers rock. Computer wins!");
  }
  else {
    console.log("Rock smashes scissors. Player wins!");
  }
}
else if (playerSelection === "paper") {
  if (computerSelection === "scissors") {
    console.log("Scissors cuts paper. Computer wins!");
  }
  else {
    console.log("Paper covers rock. Player wins!");
  }
}
else if (playerSelection === "scissors") {
  if (computerSelection === "rock") {
    console.log("Rock smashes scissors. Computer wins!");
  }
  else {
    console.log("Scissors cuts paper. Player wins!");
  }
}