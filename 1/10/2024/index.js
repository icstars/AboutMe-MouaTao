console.log('Hello World')

const usersDiv = document.querySelector("#d1")
console.log(usersDiv)

const users = [
    {employeeID: 1, name: "Moua Tao"}, 
    {employeeID:2, name: "Cha"}
]



usersDiv.addEventListener("click", (e) => {
    let id = e.target.closest(".user").id // Grabs the element that is being clicked
    let user = users.find((el) => {
        return el.employeeID == id
    }) // Find; finds an element in an array based off of the condition that is set
    console.log(user)
})




