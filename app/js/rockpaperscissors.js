////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput;

}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay;
}

    function getWinner(playerMove,computerMove) {
        var winner;
        // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
        // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
        // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
        
        if (playerMove == computerMove) {
            winner = "tie";
        }

        if (playerMove == "scissors" && computerMove == "paper") {
            winner = "player"    
        }

        if (playerMove == "scissors" && computerMove == "rock") {
            winner = "computer"
        }

        if (playerMove == "paper" && computerMove == "scissors") {
            winner = "computer"
        }


        if (playerMove == "rock" && computerMove == "scissors") {
            winner = "player"
        }

        if (playerMove == "paper" && computerMove == "rock") {
            winner = "player"
        }

        if (playerMove == "rock" && computerMove == "paper") {
            winner = "computer"
        }


        return winner;
    }

function playBestOf(limit) {
    var countWinsByPlayer = 0;
    var countWinsByComputer = 0;

console.log("Playing the game til best of " + limit);

    while(countWinsByPlayer < limit && countWinsByComputer < limit) {
          
       
        var playerChoice;
        playerChoice = getInput();
        console.log("The player chose " + playerChoice);
    
        var computerChoice;
        computerChoice = randomPlay();
        console.log("The computer chose " + computerChoice);
    
        var finalWinner;
        finalWinner = getWinner(playerChoice, computerChoice);
        console.log("The winner is " + finalWinner);
            if (finalWinner == "player") {
                countWinsByPlayer++;
            }  else if (finalWinner == "computer") {
                countWinsByComputer++;
            }
     }

        if (countWinsByPlayer > countWinsByComputer) {
            console.log("The human Won!");
        } else {
            console.log("The robot won!");
        }
      
  }
  
 
playBestOf(3);







