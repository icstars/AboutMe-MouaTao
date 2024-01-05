// let input = prompt('What is your name')
// let input2 = prompt('What is your age?')
// alert(`I am ${input} and I am ${input2} years old `)

// let guess = prompt('Guess a number')
// while (guess != '3'){
//     guess = prompt('Guess a number')
// }
// alert('You guessed correctly')

// -------------------------------------------------------------

// Conditonals
// allows you to specify different actions based on whether a certain thing is met

// let y = 'hello world'
// console.log(y)
// y = 'hello icstars'
// console.log(y)
// console.log(y === 'hello icstars')

// y = true
// let ranNum = Math.floor(Math.random() * 3)
// console.log(ranNum)

// if (ranNum === 0 && y ){
//     console.log('Both these expressions are true')
// } else {console.log('false')}


// // block scope
// if(ranNum === 0){
//     staff0 = 'Lucy'
//     console.log('Lucy')
// } else if (ranNum === 1){
//     staff0 = 'Collin'
//     console.log('Collin')
// } else if (ranNum === 2) {
//     staff0 = 'Mark'
//     console.log('Mark')
// }

// // if a variable is declared IN a block, then you cannot use it globally



// let xx = 'Hello world'

// if (xx === 'Hello world'){
//     let yy = 5;
//     console.log(xx)
// }
// console.log(y)

// Ternary
    // let idk = 2
    // idk === 2 ? console.log('yes') : console.log('no')

// let dudes = ["Lucycan", "Collin", "Mark", "Cortez"]


// for (let j = 0; j < dudes.length; j++){

//     if (dudes[j] === 'Collin'){
//         console.log(`Hello ${dudes[j]}, how are you?`)
//         break // stops when this happens 
//     } else {
//         console.log(`Goodnye ${dudes[j]}`)
//     }   
// } 


//---------------------------------------------------------------------------------------------------------
// 11-17-2023 
// funciton = reusuable code that is designed to run a specific code

function addNumber(a,b){
    return `The answer is ${a + b}`
}
let result = addNumber(30,10)
console.log(result)

// parameters are placeholders in the function defintion (so the a,b)
// arguments are the INPUT VALUE that you put into the parameters (so 30, 10)



// ----------------------------------------------------------------------------------------- //

// Objects
const car = {
    brand: "Honda",
    model: "S2000",
    year: "2003",
}

for (prop in car){
    console.log(car[prop])
}
console.log(`I own a ${car.brand} ${car.model}`)


// ---------------------------------------------------------------------------------------- //

// Regular function
function log(text){
    console.log(text)
}
log("Collin")


// Return saves the output into a value
function log2(text1){
    return text1
}
answer123 = log2('icstars')
console.log(answer123)

// Function expression
let name = function (a, b){
    return a + b
}
name(1,5)
console.log(name(1,5))

// Arrow function
let name3 = (a,b) => {return a + b} 
name3(5,20)


// Making a function to loop arrays
function loopArray(arr){
    for (char of arr){
        console.log(char)
    }
}
let numbs = [1,2,3,4]
let names = ['Tao', 'Cha', 'Moua']
loopArray(numbs)
loopArray(names)


let vendingMachine = function (money,item){
    let snacks = ["Pepsi", "Hersheys", "Snickers", "Reeses", "Cheetos", "Coke", "Water"]
    if (money === '$2.00'){
        for (food of snacks){
            if (item === food){
                return `You choose ${food}... Vending now`
            }
        }
        return `${item} does not exist`
    }
}
vendingMachine("$2.00", "Coke")
console.log(vendingMachine("$2.00", "Cheetos"))





let wrongInput = function(playerOneChoice, playerTwoChoice){
    if (!choices.includes(playerOneChoice) || !choices.includes(playerTwoChoice)){
        console.log('Invalid try. Wrong input.')
        // continue
    }
}


































