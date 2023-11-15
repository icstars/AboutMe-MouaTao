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

let userinput1 = prompt('Player 1: Rock, paper, or scissors')
    // if (userinput1 != "Rock, Paper, Scissors"){
    //  alert('Not an option')
//  }

let userinput2 = prompt('Player 2: Rock, paper, or scissors')
    // if (userinput2 != "Rock, Paper, Scissors"){
    // alert('Not an option')
//  }
// -----------------------------------------------------------------------

let playerOneScore = 0
let playerTwoScore = 0 

let game = true
if (userinput1 != 'Rock, paper, scissors'){
    userinput1 = prompt('Player 1: Not an option. Try again.')
    game = false
}
if (userinput2 != 'Rock, paper, scissors'){
    userinput2 = prompt('Player 2: Not an option. Try again.')
    game = false
}

if (userinput1 != 'Rock, paper, scissors'){
    userinput1 = prompt('Player 1: Not an option. Try again.')
}
if (userinput2 != 'Rock, paper, scissors'){
    userinput2 = prompt('Player 2: Not an option. Try again.')
}

if (game = true)
{
    if (userinput1 === 'rock' && userinput2 === 'rock') {
        console.log('Tie')
    } else if (userinput1 === 'rock' && userinput2 === 'paper') {
        console.log(userinput2 + ' wins')
        playerTwoScore += 1
    } else if (userinput1 === 'rock' && userinput2 === 'scissors') {
        console.log(userinput1 + ' wins')
        playerOneScore += 1
    } else if (userinput1 === 'paper' && userinput2 === 'rock') {
        console.log(userinput1 + ' wins', playerOneScore += 1)
        playerOneScore += 1
    } else if (userinput1 === 'paper' && userinput2 === 'paper') {
        console.log('Tie');
    } else if (userinput1 === 'paper' && userinput2 === 'scissors') {
        console.log(userinput2 + ' wins')
        playerTwoScore += 1
    } else if (userinput1 === 'scissors' && userinput2 === 'rock') {
        console.log(userinput2 + ' wins')
        playerTwoScore += 1
    } else if (userinput1 === 'scissors' && userinput2 === 'paper') {
        console.log(userinput1 + ' wins')
        playerOneScore += 1
    } else if (userinput1 === 'scissors' && userinput2 === 'scissors') {
        console.log('Tie')
    }
    if (playerOneScore === 3){
        console.log('Player 1 Wins')
    }
    if (playerTwoScore === 3){
        console.log('Player 2 Wins')
       }
}

if (playerOneScore === 3 || playerTwoScore === 3){
    game = false
    alert('Game Over')
}























































