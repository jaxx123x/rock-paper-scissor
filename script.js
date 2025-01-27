let humanScore = 0;
let computerScore = 0;
const rockHuman = document.querySelector(".rock-human");
const paperHuman = document.querySelector(".paper-human");
const scissorHuman = document.querySelector(".scissor-human");
const scoreText = document.querySelector(".score-text");
const nextRound = document.querySelector(".next-round");

function javaStyle(event){
    event.target.style.backgroundColor = "green";
    setTimeout(function() {
        event.target.style.backgroundColor = "rgb(105, 23, 2)";
    }, 1000);
}
rockHuman.addEventListener("click", javaStyle);
paperHuman.addEventListener("click", javaStyle);
scissorHuman.addEventListener("click", javaStyle);

    function getHumanChoice(callback) {
        let result;
        rockHuman.addEventListener("click", function () {
            callback("rock");
        })
        paperHuman.addEventListener("click", function () {
            callback("paper");
        })
        scissorHuman.addEventListener("click", function () {
            callback("scissor");
        })
        
    }
    
    let humanChoice;
    
    
    getHumanChoice(function (choice) {  
        humanChoice = choice;
        console.log(`You have choosen ${humanChoice}.`);

        function getComputerChoice (max){
            let result =  Math.floor(Math.random() * max);
            if (result == 0) {return "rock";}
            else if (result == 1) {return "paper";}
            else if (result == 2) {return "scissor";} 
        }
        let computerChoice = getComputerChoice(3);
        console.log(`Computer has choosen ${computerChoice}.`);

        if (humanChoice == computerChoice){
            console.log(`Your choice: ${humanChoice}. Computer choose: ${computerChoice}. Tie :).`);
        }
        else if (
            (computerChoice == "rock" && humanChoice == "scissor") || 
            (computerChoice == "paper" && humanChoice == "rock") ||
            (computerChoice == "scissor" && humanChoice =="paper")
         ) {
            console.log(`Your choice was ${humanChoice}. Computer choice was ${computerChoice}. Computer won.`);
            computerScore++;
          }
        else if (
            (humanChoice == "rock" && computerChoice == "scissor") || 
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissor" && computerChoice =="paper")
         ) {
            console.log(`Your choice was ${humanChoice}. Computer choice was ${computerChoice}. You won.`);
            humanScore++;
        };

        scoreText.textContent = `YOU ${humanScore} - ${computerScore} COMPUTER`;

        if (computerScore == 5 || humanScore == 5 ) {
            scoreText.textContent = `Thank you for playing. The final score is : YOU ${humanScore} - ${computerScore} COMPUTER`;
            
        
        }

    });  

    
 



   
    
    
    
    
    

    


   
    



    
    

    








