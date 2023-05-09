console.log("Oyun başlasın");

// function getComputerChoice() {

//     let randomNumber = Math.random();
//     console.log(randomNumber);
// if (randomNumber < 0.33 ){ return "Rock" ;} 
// else if (randomNumber < 0.66 ){ return "Paper" ;} 
// else {return "Scissor";}
// }

// function getPlayerChoice() {
//     return prompt("What is your choice?", "Rock,Paper or Scissor")
// }

// function playGround(playerSelection,computerSelection){

//     if ( playerSelection === computerSelection) {console.log(playerSelection,computerSelection,"even") ;  return 0 ; }
//     else if ( (playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")  ){ console.log(playerSelection,computerSelection,"you win") ; return 1 ; }
//     else { console.log(playerSelection,computerSelection,"you lose") ; return -1; }
// }


// let playerSelection = getPlayerChoice().toLowerCase();
// let computerSelection = getComputerChoice().toLowerCase();

// console.log(getComputerChoice());
// console.log(getPlayerChoice());
// console.log(playGround(playerSelection,computerSelection));

// function Game() {
//     let score = 0 ;
//     // for (let i=0;i<5;i++){

//         let playerSelection = getPlayerChoice().toLowerCase();
//         let computerSelection = getComputerChoice().toLowerCase();
//         score = score + playGround(playerSelection,computerSelection)
//     // }

//     if (score>0) {console.log(score, "you win");}
//     else if (score=0) {console.log(score, "even");}
//     else {console.log(score, "you lose");}

// }

// const buttons = document.querySelectorAll('button');
// buttons.forEach((button) => { 
//     button.addEventListener('click', () => {
//         const playerSelection = button.id ;
//         const computerSelection = getComputerChoice()
//         playGround(playerSelection,computerSelection);
//         console.log(playerSelection,computerSelection, playGround)
//     })
// })



// Game()


let playerSelection ;
let computerSelection;
let score = 0 ;
const button1 = document.getElementById('rock');
const button2 = document.getElementById('paper');
const button3 = document.getElementById('scissor');
const actualScore = document.querySelector('.actualScore')
const winner = document.querySelector('.winner')

function getComputerChoice() {
    let randomNumber = Math.random();
    console.log(randomNumber);
    if (randomNumber < 0.33 ){ return "rock" ;} 
    else if (randomNumber < 0.66 ){ return "paper" ;} 
    else {return "scissor";}}

function handleClick(event) {
    playerSelection = event.target.id;
    console.log(event.target.id);
    console.log("player choice:", playerSelection, typeof playerSelection);

    computerSelection = getComputerChoice()
    console.log("computer choice:", computerSelection, typeof computerSelection);

    GameScore()
    }

function playGround(playerSelection,computerSelection){

    if ( playerSelection === computerSelection) {console.log(playerSelection,computerSelection,"even") ;  return 0 ; }
    else if ( (playerSelection === "rock" && computerSelection === "scissor") || (playerSelection === "scissor" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "rock")  ){ console.log(playerSelection,computerSelection,"you win") ; return 1 ; }
    else { console.log(playerSelection,computerSelection,"you lose") ; return -1; }
}


function GameScore() {

    score = score + playGround(playerSelection,computerSelection);    
    console.log(score);
    actualScore.textContent = score;
      
    if(score===5){
        console.log("You Win THE GAME");
        winner.textContent = "You Win THE GAME" ;
        score = 0}
    else if (score === -5) {
        console.log("You Lose THE GAME");
        winner.textContent = "You lose THE GAME" ;
         score = 0;
        }
    else { 
        console.log("Keep going)");
        winner.textContent = "Keep Going" ;
    };

}


button1.addEventListener('click', handleClick);
button2.addEventListener('click', handleClick);
button3.addEventListener('click', handleClick);
