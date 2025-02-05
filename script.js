let playerScore = 0;
let computerScore = 0;

let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");

let message = document.getElementById("msg-screen");
let computerScoreElement = document.querySelector(".computer-score")
let playerScoreElement = document.querySelector(".player-score")

let resetButton = document.querySelector("button");
let audio = new Audio("soft-suspense-music-28126.mp3");


const choices = ["rock", "paper", "scissor"];

function computerChoice(){
    let index = Math.floor(Math.random()*3);
    return choices[index];
}

rock.addEventListener("click", ()=>{
  playGame("rock");
});

paper.addEventListener("click",()=>{
    playGame("paper");
});

scissor.addEventListener("click",()=>{
    playGame("scissor");
})

function playGame(userChoice){
    let user = userChoice;
    let computer = computerChoice();
    audio.play();


    if (user === computer){
        message.innerText = `Match Draw`;
        console.log("Game is Draw");
    } else if(user === "rock" && computer === "scissor"){
        playerScore++;
        message.innerText = `User: ${user} Computer: ${computer} Result: Rock Win`;
        playerScoreElement.innerText = playerScore;
    } 
    else if (computer === "rock" && user === "scissor") {
        computerScore++;
        message.innerText = `User: ${user} Computer: ${computer} Result: Rock Win`;
        computerScoreElement.innerText = computerScore;
    }
    else if (user === "paper" && computer === "rock"){
        playerScore++;
        message.innerText = `User: ${user} Computer: ${computer} Result: Paper Win`;
        playerScoreElement.innerText = playerScore;
    } else if (computer === "paper" && user === "rock"){
        computerScore++;
        message.innerText = `User: ${user} Computer: ${computer} Result: Paper Win`;
        computerScoreElement.innerText = computerScore;
    }
    else if (user === "scissor" && computer === "paper"){
        playerScore++;
        message.innerText = `User: ${user} Computer: ${computer} Result: Scissor Win`;
        playerScoreElement.innerText = playerScore;
    } else if(computer === "scissor" && user === "paper"){
        computerScore++;
        message.innerText = `User: ${user} Computer: ${computer} Result: Scissor Win`;
        computerScoreElement.innerText = computerScore;
    }

}

resetButton.addEventListener("click",()=>{
    playerScore=0;
    computerScore=0;
    computerScoreElement.innerText="0";
    playerScoreElement.innerText="0";
    audio.pause();
    message.innerText="Result";
})