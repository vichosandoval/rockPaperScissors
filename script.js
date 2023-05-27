let playerScore = 0;
let machineScore = 0;
let stillPlaying = true;
let choices = ["rock", "papper", "scissors"];

while(stillPlaying != true){
    if (playerScore = 5 || machineScore == 5){
        stillPlaying = false;
    } else {
        let playerChoise = window.prompt('Enter your input:')
        playerChoise = playerChoise.toLowerCase();;
        let randomPlay = numeroAleatorio = Math.floor(Math.random() * 3);
        let machineChoise = choices[randomPlay];
        if ((playerChoise == "rock" && machineChoise == "scissors") || 
            (playerChoise == "papper" && machineChoise == "rock") || 
            (playerChoise == "scissors" && machineChoise == "papper")){
                playerScore++;
                console.log("Player Wins!");
                console.log(`Player score: ${playerScore} || Machine score: ${machineScore}`);
        } else if (playerChoise === machineChoise){
            console.log("TIE!")
            console.log(`Player score: ${playerScore} || Machine score: ${machineScore}`);
        } else {
            machineScore++
            console.log("Machine Wins!");
            console.log(`Player score: ${playerScore} || Machine score: ${machineScore}`);
        }
    }
}


