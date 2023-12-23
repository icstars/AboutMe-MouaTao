let playGame = function(){
let number = Math.floor(Math.random() * 100)
console.log(number)
let attempt = 1

while(userChoice != number){
    var userChoice;
userChoice = prompt('Choose a number 1-100')
if (userChoice > number){
    console.log('You are too high.')
    attempt++
} else if (userChoice < number){
    console.log('You are too low')
    attempt++

} else if (isNaN(userChoice)){
    console.log('Invalid Input. Please Try Again')
}else {
    console.log('Good job. You guessed the number.')
    console.log(`You attempted ${attempt} times.`)
        }
    }
    if (attempt > 6){
        console.log(`But you lost. You were supposed to guess it in 6 tries, but you did it in ${attempt} tries.`)
    }
}

function DoYouWantToPlayAgain(){
var playAgain = prompt('Do you want to play again? (Yes or No)')
if (playAgain.toLowerCase() == 'yes') {
    playGame()
} else if (playAgain.toLowerCase() == 'no') {
    console.log('Goodbye.')
    } else{
        console.log('Invalid')
    }
}
playGame()
DoYouWantToPlayAgain()