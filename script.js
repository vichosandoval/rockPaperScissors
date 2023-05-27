let playerScore = 0;
let machineScore = 0;
let stillPlaying = true;
let choices = ["rock", "papper", "scissors"];

while(stillPlaying){
    if (playerScore === 5 || machineScore === 5){
        if(playerScore === 5){
            console.log("PLAYER WINS THE GAME!");
            console.log(`Player score: ${playerScore} || Machine score: ${machineScore}`);
        }else{
            console.log("MACHINE WINS THE GAME!");
            console.log(`Player score: ${playerScore} || Machine score: ${machineScore}`);
        }
        stillPlaying = false;
    } else {
        let playerChoise = window.prompt('Enter your input:');
        playerChoise = playerChoise.toLowerCase();
        let randomPlay = Math.floor(Math.random() * 3);
        let machineChoise = choices[randomPlay];
        if ((playerChoise == "rock" && machineChoise == "scissors") || 
            (playerChoise == "papper" && machineChoise == "rock") || 
            (playerChoise == "scissors" && machineChoise == "papper")){
                playerScore++;
                console.log(`Player use: ${playerChoise} || Machine use: ${machineChoise}`);
                console.log("Player Wins!");
                console.log(`Player score: ${playerScore} || Machine score: ${machineScore}`);
        } else if (playerChoise === machineChoise){
            console.log(`Player use: ${playerChoise} || Machine use: ${machineChoise}`);
            console.log("TIE!");
            console.log(`Player score: ${playerScore} || Machine score: ${machineScore}`);
        } else {
            machineScore++
            console.log(`Player use: ${playerChoise} || Machine use: ${machineChoise}`);
            console.log("Machine Wins!");
            console.log(`Player score: ${playerScore} || Machine score: ${machineScore}`);
        }
    }
}


