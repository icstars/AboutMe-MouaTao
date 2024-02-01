const submit = document.getElementById("submit")
const taskList = document.getElementById("taskList")

submit.addEventListener("click", () => {
    const chosenText = document.getElementById('chosenText').value
    const chosenDate = document.getElementById('chosenDate').value

    const result = document.createElement("li") // "li" stands for List Item. It lists the items.   

    result.innerHTML = `${chosenText} by ${chosenDate}`

    // Adds the new item (result) to the task list (taskList)
    taskList.appendChild(result)
})
