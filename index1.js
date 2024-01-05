// let x = 5
// let arr = [[3,10,15],['tao','cha'],[true, false]]




// for (let i = 0; i<arr.length; i++){
//     for (element of arr[i]){
//         if (typeof element == "string"){
//             for (char of element)
//             console.log(char)
//         }
//     }
// }


// let arr = [1,0,7,-3,65,23]
// let sort = arr.sort((a, b) => a-b)
// console.log(sort)




// let twoSum = function(a,b,c,d) {

// if (a + b == d){
//     console.log(`${a} + ${b} = ${d}`)
// } else if (a + c == d){
//     console.log(`${a} + ${c} = ${d}`)
// } else if (b + c == d){
//     console.log(`${b} + ${c} = ${d}`)
// } else{
//     console.log('None exist')
// }

// }

// twoSum(0,1,2,1)





let twoSum = function(...nums) // Allows an infinite amount of parameters
{ 
    const target = nums.pop() // Makes the last "NUM" as the target 

    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          console.log(`${nums[i]} + ${nums[j]} = ${target}`)
        return
        }
      }
    }
    console.log('None exist')
  }
  
  twoSum(5,5,10)
  
