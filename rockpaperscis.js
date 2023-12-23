// x+=2 (will count by 2) 

// Logical Operators 
// != means "Not Equal To"
// > means "Greater Than"
// < means "Less Than"
// >= means "Greater Than or Equal To"
// <= means "Less Than or Equal To"

// Loose Equals: == 
'1' == 1
// TRUE because they are same character


// Strict Equals: ===
'1' === 1
// FALSE because they are different data types




// let playerOneScore = 0
// let playerTwoScore = 0 
// let userinput1 = prompt('Rock, paper, or scissors')
// let userinput2 = prompt('Rock, paper, or scissors')

// if (userinput1 === 'rock', 'scissors', 'paper')
//         {
//             console.log('You have chosen ' + userinput1)
//         } else {
//            userinput1 = prompt('Wrong input, try again')
//         }
// if (userinput2 === 'rock', 'scissors', 'paper')
//         {
//             console.log('You have chosen ' + userinput2)
//         } 


// if (userinput1 === 'rock' && userinput2 === 'rock')
//         {
//             console.log(' tie')
//         }   
// if (userinput1 === 'rock' && userinput2 === 'paper') 
//         {
//             console.log(userinput2 + ' wins')
//         }
// if (userinput1 === 'rock' && userinput2 === 'scissors')
//         {
//             console.log(userinput1 + ' wins')
//         }
  

// if (userinput1 === 'paper' && userinput2 === 'rock')
//         {
//             console.log(userinput1 + ' wins')
//         }
// if (userinput1 === 'paper' && userinput2 === 'paper')
//         {
//             console.log(' tie')
//         }
// if (userinput1 === 'paper' && userinput2 === 'scissors')
//         {
//             console.log(userinput2 + ' wins')
//         }

// if (userinput1 === 'scissors' && userinput2 === 'rock')
//         {
//             console.log(userinput2 + ' wins')
//         }
// if (userinput1 === 'scissors' && userinput2 === 'paper')
//         {
//             console.log(userinput1 + ' wins')
//         }
// if (userinput1 === 'scissors' && userinput2 === 'scissors')
//         {
//             console.log(' tie')
//         }

// if (playerOneScore === 3 || playerTwoScore === 3){
//         game = false    
//         alert('Game Over')
            
// }

// f


// let playerOneScore = 0
// let playerTwoScore = 0
// while (playerOneScore < 3 && playerTwoScore < 3) {
//     const playerOneChoice = prompt('Player 1: Rock, paper, or scissors')
//     const playerTwoChoice = prompt('Player 2: Rock, paper, or scissors')
//     // User Inputs
//     const choices = ['rock', 'paper', 'scissors', 'rock ', 'paper ', 'scissors ']
//     if (!choices.includes(playerOneChoice) || !choices.includes(playerTwoChoice)){
//         console.log('Invalid try. Wrong input.')
//         continue
//     }

//     const p1 = playerOneChoice
//     const p2 = playerTwoChoice

//     // Declaring the winner
//     if (
//         (p1 === 'rock' && p2 === 'scissors') || 
//         (p1 === 'paper' && p2 === 'rock') || 
//         (p1 === 'scissors' && p2 === 'paper')
//     ) {
//         playerOneScore++
//         console.log(`Player 1 wins this round with ${p1} against ${p2}`)
//     } else if (p1 === p2) {
//         console.log('Tie')
//     } else {
//         playerTwoScore++ 
//         console.log(`Player 2 wins this round with ${p2} againts ${p1}`)
//     }
// }

// Determining the winner
// if (playerOneScore === 3){
//     console.log('Player 1 wins the game!')
// } else {
//     console.log('Player 2 wins the game!')
// }

let playerOneScore = 0
let playerTwoScore = 0
while (playerOneScore < 3 && playerTwoScore < 3) {
    const playerOneChoice = prompt('Player 1: Rock, paper, or scissors')
    const playerTwoChoice = prompt('Player 2: Rock, paper, or scissors')
    // User Inputs
    const choices = ['rock', 'paper', 'scissors', 'rock ', 'paper ', 'scissors ']
    if (!choices.includes(playerOneChoice) || !choices.includes(playerTwoChoice)){
        console.log('Invalid try. Wrong input.')
        continue
    }

    const p1 = playerOneChoice
    const p2 = playerTwoChoice

    // Declaring the winner
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

let playerScores = function(playerOneScore, playerTwoScore){
    if (playerOneScore === 3){
        // console.log('Player 1 wins the game!')
        return 'Player 1 wins the game!'
    }  
    
    if (playerTwoScore === 3){
        // console.log('Player 2 wins the game!')
        return 'Player 2 wins the game!'
    }
}


// playerOne and playerTwo scores are not block scoped variables because the function determineWinner is being called in the function playRockPapperScissors 
// aka Variable Scoping
































































































