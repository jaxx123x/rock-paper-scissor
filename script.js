let humanScore = 0;
let computerScore = 0;
for (i = 0; i < 5; i++){


function getComputerChoice(max) {
    let result =  Math.floor(Math.random() * max);
    if (result == 0) {
        return "rock";
    }
    else if (result == 1) {
        return "paper";
    }
    else if (result == 2) {
        return "scissor";
    } 
}
let computerChoice = getComputerChoice(3);
console.log(computerChoice);

let humanChoice = prompt ("What is your choice", "rock/paper/scissor").toLowerCase();
console.log(humanChoice);




if (humanChoice == computerChoice){
    alert(`Your choice was ${humanChoice}. Computer choice was ${computerChoice}. It's a tie.`)
    console.log("TIE")
}
else if (
    (computerChoice == "rock" && humanChoice == "scissor") || 
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissor" && humanChoice =="paper")
 ) {
    alert(`Your choice was ${humanChoice}. Computer choice was ${computerChoice}. Computer won.`)
    computerScore++;
    console.log(`YOU ${humanScore} - ${computerScore} COMPUTER`)
  }
else if (
    (computerChoice == "rock" && humanChoice == "scissor") || 
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissor" && humanChoice =="paper")
 ) {
    alert(`Your choice was ${humanChoice}. Computer choice was ${computerChoice}. You won.`)
    computerScore++;
    console.log(`YOU ${humanScore} - ${computerScore} COMPUTER`)
  }
else {
    alert('You must choose either rock, paper or scissor. Please refresh and try again')
    console.log('Game broke. Invalid input.')
    break;
}
}
alert(`The game is over. After 5 rounds, the score is: YOU ${humanScore} - ${computerScore} COMPUTER`)
alert('Thank you for playing.')
console.log(`The game is over. After 5 rounds, the score is: YOU ${humanScore} - ${computerScore} COMPUTER`)