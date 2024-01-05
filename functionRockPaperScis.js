let determineWinner = function (playerOneScore, playerTwoScore) {
    if (playerOneScore === 3) {
        return 'Player 1 wins the game!'
    } else if (playerTwoScore === 3) {
        return 'Player 2 wins the game!'
    } else {
        return 'No winner yet.'
    }
}
  
let playRockPaperScissors = function () { 
    let playerOneScore = 0
    let playerTwoScore = 0
    
    while (playerOneScore < 3 && playerTwoScore < 3) {
        let playerOneChoice = prompt('Player 1: Rock, paper, or scissors').toLowerCase()
        let playerTwoChoice = prompt('Player 2: Rock, paper, or scissors').toLowerCase()
        
        const choices = ['rock', 'paper', 'scissors', 'rock ', 'paper ', 'scissors ']
        
        if (!choices.includes(playerOneChoice) || !choices.includes(playerTwoChoice)) {
            console.log('Invalid try. Wrong input.')
            continue
        }
        
        const p1 = playerOneChoice
        const p2 = playerTwoChoice
        
        if (
            (p1 === 'rock' && p2 === 'scissors') ||
            (p1 === 'paper' && p2 === 'rock') ||
            (p1 === 'scissors' && p2 === 'paper')
            ) {
                playerOneScore++
                console.log(`Player 1 wins this round with ${p1} against ${p2}`)
            } else if (p1 === p2) {
                console.log('Tie')
            } else {
                playerTwoScore++
                console.log(`Player 2 wins this round with ${p2} againts ${p1}`)
            }
        }
        
        // Determine the winner after the game loop
        return determineWinner(playerOneScore, playerTwoScore)
    }
    
    // Call the function to start the game
    console.log(playRockPaperScissors())
    