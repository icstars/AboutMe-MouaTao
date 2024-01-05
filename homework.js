// let board = [
// [0,0,0],
// [1,1,1],
// [0,0,0]
// ]

// function threeInARow(a,b,c){
//     if (a == b && a == c && b == c){
//         return true
//     } else{
//         return false
//     }

// }
// console.log(threeInARow(board[1][0], board[1][1], board[1][2]))

playerOnePoints = 0
playerTwoPoints = 0

var playerOneChoiceRow = [0,1,2]
var playerOneChoiceColumn = [0,1,2]
var playerTwoChoiceRow = 0
playerTwoChoiceRow = [0,1,2]
var playerTwoChoiceColumn = 0 
playerTwoChoiceColumn = [0,1,2]

board = [
    [0,0,0],
    [0,0,0],
    [0,0,1]
]

board2 = [
    [0,0,0],
    [0,0,1],
    [0,0,0]
]

let playGame = function(){
while (playerOnePoints == 0 || playerTwoPoints == 0){
playerOneChoiceRow = prompt('Player 1: Choose a row (0-2)')
playerOneChoiceColumn = prompt('Player 1: Choose a column (0-2)') 

if (playerOneChoiceRow == 2 && playerOneChoiceColumn == 2 ) {
    console.log( 'Player 1: Hit! Player 1 Wins!')
    return playerOneChoiceRow =+ 1
    } else{
        console.log('Player 1: You missed!') 
    }

playerTwoChoiceRow = prompt('Player 2: Choose a row')
playerTwoChoiceColumn = prompt('Player 2: Choose a column')

if (playerTwoChoiceRow == 1 && playerTwoChoiceColumn == 2) {
    console.log( 'Player 2: Hit! Player 2 Wins!' )
    return playerTwoChoiceRow =+ 1
} else{
    console.log('Player 2: You missed!')
        }
    }
}
playGame()