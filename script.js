let playerChoise = window.prompt('Enter your input:');
let choices = ["Rock", "Papper", "Scissors"];
let machineChoice = 0;
let playerScore = 0;
let machineScore = 0;

while (playerScore < 5 || machineScore < 5){
    let randomMove = Math.floor(Math.random() * 2);
    console.log("Choose your move:", playerChoise);
    machineChoice = choices[randomMove];
    if(playerChoise == "rock" && machineChoice == "Scissors"){
        playerScore++;
        console.log("Point for the player!");
        console.log(`Player Score: ${playerScore} / Machine Score: ${machineScore}`);
    } else if(machineChoice == "rock" && playerChoise == "Scissors"){
        machineScore++;
        console.log("Point for the Machine!");
        console.log(`Player Score: ${playerScore} / Machine Score: ${machineScore}`);
    } else if(playerChoise == "Sissors" && machineChoice == "Papper"){
        playerScore++;
        console.log("Point for the player!");
        console.log(`Player Score: ${playerScore} / Machine Score: ${machineScore}`);
    } else if(machineChoice == "Sissors" && playerChoise == "Papper"){
        machineChoice++;
        console.log("Point for the Machine!");
        console.log(`Player Score: ${playerScore} / Machine Score: ${machineScore}`);
    }else if(playerChoise == "Papper" && machineChoice == "Rock"){
        playerScore++;
        console.log("Point for the player!");
        console.log(`Player Score: ${playerScore} / Machine Score: ${machineScore}`);
    } else if(machineChoice == "Papper" && playerChoise == "Rock"){
        machineChoice++;
        console.log("Point for the Machine!");
        console.log(`Player Score: ${playerScore} / Machine Score: ${machineScore}`);
    } else {
        console.log("Tie!");
        console.log(`Player Score: ${playerScore} / Machine Score: ${machineScore}`);
    }
    
}
