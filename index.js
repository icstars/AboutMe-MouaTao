let input = prompt('What is your name')
let input2 = prompt('What is your age?')
// alert(`I am ${input} and I am ${input2} years old `)

let guess = prompt('Guess a number')
while (guess != '3'){
    guess = prompt('Guess a number')
}
alert('You guessed correctly')