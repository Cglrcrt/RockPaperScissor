console.log("Oyun başlasın")

function getComputerChoice() {

    let randomNumber = Math.random();
    console.log(randomNumber);
if (randomNumber < 0.33 ){ return "Rock" ;} 
else if (randomNumber < 0.66 ){ return "Paper" ;} 
else {return "Scissor";}
}

function getPlayerChoice() {
    return prompt("What is your choice?", "Rock,Paper or Scissor")
}

function playGround(playerSelection,computerSelection){

    if ( playerSelection === computerSelection) {console.log(playerSelection,computerSelection,"even") ;  return 0 ; }
    else if ( (playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")  ){ console.log(playerSelection,computerSelection,"you win") ; return 1 ; }
    else { console.log(playerSelection,computerSelection,"you lose") ; return -1; }
}


let playerSelection = getPlayerChoice().toLowerCase();
let computerSelection = getComputerChoice().toLowerCase();

// console.log(getComputerChoice());
// console.log(getPlayerChoice());
console.log(playGround(playerSelection,computerSelection));

function Game() {
    let score = 0 ;
    for (let i=0;i<5;i++){

        let playerSelection = getPlayerChoice().toLowerCase();
        let computerSelection = getComputerChoice().toLowerCase();
        score = score + playGround(playerSelection,computerSelection)
    }

    if (score>0) {console.log(score, "you win");}
    else if (score=0) {console.log(score, "even");}
    else {console.log(score, "you lose");}

}

Game()
