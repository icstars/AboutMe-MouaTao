function addNumbers(a,b){
    return a + b
}
let result = addNumbers(0,0)
console.log(addNumbers(1,2))
// ---------------------------------------------------------------------------------------

const person = {
    firstName: "Tao",
    lastName: "Cha",
    age: 20
}

const personArr = [Object.values(person)]
console.log(personArr)

for (i = 0; i < personArr.length; i++){
    console.log(personArr[i])
}
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(`Hello my name is ${person.firstName} ${person.lastName} and I am ${person.age}`)

