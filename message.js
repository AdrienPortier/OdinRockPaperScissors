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
function getHumanChoice(){
    let choice = prompt("Rock ? Paper ? Scissors ?").toLowerCase();
    console.log(choice);
    while (!(choice === "rock") &&  !(choice === "paper") && !(choice === "scissors")){
        choice = prompt("TRY AGAIN, misspelled or invalid, rock ? paper ? scissors ?").toLowerCase();
    }
    return choice.charAt(0).toUpperCase() + choice.slice(1);

}
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        if(humanChoice === computerChoice){
            console.log("Equality ! You both have " + humanChoice + ".");
        }
        else if((humanChoice == "Rock" && computerChoice == "Scissors") || (humanChoice == "Scissors" && computerChoice == "Paper") 
            || (humanChoice == "Paper" && computerChoice == "Rock")){
            console.log("You win ! " + humanChoice + " beats " + computerChoice + ".");
            humanScore++;
        }
        else{
            console.log("You lost ! " + humanChoice + " beats " + computerChoice + ".");
            computerScore++;
        }
    }
    for(let i = 0; i <= 4; i++){
        console.log("Round number " + i)
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore == computerScore){
        console.log("TOTAL : Equality !")
    }
    else if(humanScore > computerScore){
        console.log("TOTAL : Victory !")
    }
    else{
        console.log("TOTAL : Defeat !")
    }
    console.log("You have " + humanScore + " points and the computer has " + computerScore + " points.");

}
playGame();