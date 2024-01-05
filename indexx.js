document.addEventListener("submit", (e) => {
    e.preventDefault()
    // console.log(`First Name: ${grabFirstName.value}`)
    // console.log(`Last Name: ${grabLastName.value}`)
    // console.log(`Thank you, ${grabFirstName.value} ${grabLastName.value}, for submitting the form.`)
    
    const paragraphElement = document.getElementById("paragraph")
    paragraphElement.innerHTML = `Hello, ${grabFirstName.value}. Your hobby(s) are: ${grabLastName.value}.`;

    // .innerHTML modifies what is inside the <p>  
    
//     if (grabFirstName.value == Text && grabLastName.value == Text){
//         paragraphElement.innerHTML = `Thank you, ${grabFirstName.value} ${grabLastName.value}, for visiting my site.`;
//     } else if 
    
   })

const grabFirstName = document.getElementById('firstNameInput')
console.log(grabFirstName)

const grabLastName = document.getElementById('lastNameInput')
console.log(grabLastName)

const grabSubmitBtn = document.getElementById('submitBtn')
console.log(grabSubmitBtn)

const grabParagraph = document.getElementById('paragraph')
console.log(grabParagraph)