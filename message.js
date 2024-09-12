function getComputerChoice(){
    const choice = Math.floor(Math.random()*3);
    if(choice == 0){
        return "Rock";
    }
    else if(choice == 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }

}

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice){
    const actround = document.createElement("p");
    if(humanScore == 5 || computerScore == 5){
        humanScore = 0;
        computerScore = 0;
    }
    if(humanChoice === computerChoice){
        actround.textContent =  "Equality for this round ! You both have " + humanChoice + ".";
    }
    else if((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Paper") 
        || (humanChoice == "Paper" && computerChoice == "Rock")){
        if(humanScore+1 != 5){
            actround.textContent = "You win the round! " + humanChoice + " beats " + computerChoice + ".";
        }
        else{
            actround.textContent = "You're the winner of the game thanks to your victory this round !"
        }
        humanScore++;
    }
    else{
        if(computerScore+1 != 5){
        actround.textContent = "You lost the round! " + humanChoice + " is beaten by " + computerChoice + ".";
        }
        else{
            actround.textContent = "You lost the game due to your defeat this round !"
        }
        computerScore++;
    }
    const res = document.querySelector("#result");
    res.textContent = "YOUR SCORE : " + humanScore + " / " + "AI SCORE : " + computerScore ;
    res.appendChild(actround);
}
const buttons = document.querySelectorAll("button");
buttons[0].addEventListener("click",() => playRound("Rock", getComputerChoice()));
buttons[1].addEventListener("click",() => playRound("Paper", getComputerChoice()));
buttons[2].addEventListener("click",() => playRound("Scissors", getComputerChoice()));