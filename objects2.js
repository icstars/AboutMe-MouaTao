let list = []
let addingToList = true

function creds(user, email, password) {
    return {
        enterUsername: user,
        enterEmail: email,
        enterPassword: password,
    }
}

while (addingToList) {
    let enterUsername = prompt("What is your username?")
    let enterEmail
    let enterPassword

    do { // Executes the block of code until the condition is met 
        enterEmail = prompt("What is your email?");
        if (!doesEmailHave(enterEmail)) {
            alert("Invalid email. Please include '@' in your email.");
        }
    } while (!doesEmailHave(enterEmail)) // This is the condition it has to meet in order to stop the loop

    do { // Executes the block of code until the condition is met
        enterPassword = prompt('What is your password?')
        if (!isStrongPassword(enterPassword)) {
            alert('Weak password. Your password needs more than 8 characters.')
        }
    } while (!isStrongPassword(enterPassword)) // This is the condition it has to meet in order to stop the loop

    list.push(creds(enterUsername, enterEmail, enterPassword))

    if (confirm("Do you want to add another chore?")) {
        continue
    } else {
        addingToList = false
    }
    if (confirm("Do you want to find someone's credentials?")){
        search()
    } else {
        addingToList = false
    }
}

console.table(list)

function isStrongPassword(enterPassword) {
    if (enterPassword.length < 8) {
        return false
    }

    return true
}

function doesEmailHave(enterEmail){
    return enterEmail.includes('@')
}


function search() {
    let searchingFor = prompt("Whose credentials do you want to retrieve? Enter their username:")

    let foundUser
  
    for (let i = 0; i < list.length; i++) {
        if (list[i].enterUsername.toLowerCase() === searchingFor) { // This loop will keep on going until searchingFor matches the enterUsername 
            foundUser = list[i]
            break // Exit the loop once a match is found
        }
    }

    if (foundUser) {
        console.log("Credentials found:")
        console.table([foundUser])
    } else {
        console.log("Credentials not found for the given username. Please try again")
        search()

    }
}







