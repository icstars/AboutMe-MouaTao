const userChoice = document.querySelector('select')
const pScore = document.querySelector('#pScore')
const cScore = document.querySelector('#cScore')
const pResult = document.querySelector('#pResult')
const cResult = document.querySelector('#cResult')
const result = document.querySelector('#Result')
const submit = document.querySelector('#Submit')

let userPoints = 0 
let cpuPoints = 0 
let choices = ['rock', 'paper', 'scissors']
let cpuChoice = choices[Math.floor(Math.random() * choices.length)]




submit.addEventListener("click", () => {
    cpuChoice = choices[Math.floor(Math.random() * choices.length )]

    if (userChoice.value == cpuChoice){
        pScore.innerHTML = `Player Points: ${userPoints}`
        cScore.innerHTML = `CPU Points: ${cpuPoints}`
        pResult.innerHTML = `Player Choice: ${userChoice.value}`
        cResult.innerHTML = `CPU Choice: ${cpuChoice}`
        result.innerHTML = 'TIE'
    } else if (userChoice.value == 'rock' && cpuChoice == 'paper'){
        cpuPoints++
        pScore.innerHTML = `Player Points: ${userPoints}`
        cScore.innerHTML = `CPU Points: ${cpuPoints}`
        pResult.innerHTML = `Player Choice: ${userChoice.value}`
        cResult.innerHTML = `CPU Choice: ${cpuChoice}`
        result.innerHTML = `${cpuChoice} beats ${userChoice.value}. CPU gains a point.`
    } else if (userChoice.value == 'rock' && cpuChoice == 'scissors'){
        userPoints++
        pScore.innerHTML = `Player Points: ${userPoints}`
        cScore.innerHTML = `CPU Points: ${cpuPoints}`
        pResult.innerHTML = `Player Choice: ${userChoice.value}`
        cResult.innerHTML = `CPU Choice: ${cpuChoice}`
        result.innerHTML = `${userChoice.value} beats ${cpuChoice}. Player gains a point.`
    } else if (userChoice.value == 'paper' && cpuChoice == 'rock'){
        userPoints++
        pScore.innerHTML = `Player Points: ${userPoints}`
        cScore.innerHTML = `CPU Points: ${cpuPoints}`
        pResult.innerHTML = `Player Choice: ${userChoice.value}`
        cResult.innerHTML = `CPU Choice: ${cpuChoice}`
        result.innerHTML = `${userChoice.value} beats ${cpuChoice}. Player gains a point.`
    } else if (userChoice.value == 'paper' && cpuChoice == 'scissors'){
        cpuPoints++
        pScore.innerHTML = `Player Points: ${userPoints}`
        cScore.innerHTML = `CPU Points: ${cpuPoints}`
        pResult.innerHTML = `Player Choice: ${userChoice.value}`
        cResult.innerHTML = `CPU Choice: ${cpuChoice}`
        result.innerHTML = `${cpuChoice} beats ${userChoice.value}. CPU gains a point.`
    } else if(userChoice.value == 'scissors' && cpuChoice == 'rock'){
        cpuPoints++
        pScore.innerHTML = `Player Points: ${userPoints}`
        cScore.innerHTML = `CPU Points: ${cpuPoints}`
        pResult.innerHTML = `Player Choice: ${userChoice.value}`
        cResult.innerHTML = `CPU Choice: ${cpuChoice}`
        result.innerHTML = `${cpuChoice} beats ${userChoice.value}. CPU gains a point.`
    } else if (userChoice.value == 'scissors' && cpuChoice == 'paper'){
        userPoints++
        pScore.innerHTML = `Player Points: ${userPoints}`
        cScore.innerHTML = `CPU Points: ${cpuPoints}`
        pResult.innerHTML = `Player Choice: ${userChoice.value}`
        cResult.innerHTML = `CPU Choice: ${cpuChoice}`
        result.innerHTML = `${userChoice.value} beats ${cpuChoice}. Player gains a point.`
    }

    if (userPoints === 5 || cpuPoints === 5){
        if (userPoints === 5){
            result.innerHTML = `Player Wins`
        } else{
            result.innerHTML = `CPU Wins`
        }
    submit.disabled = true // Makes the submit button not work anymore. The disabled attribute in HTML is used to disable or enable an element.
    }



})




// if (userChoice = )
// console.log(userChoice)
