let arr = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

let playerX = 2
let playerY = 3
let score = 0

let coinRow = 0
let coinColumn = 0

function render() {
    console.clear()

    // Reset the entire array to 0
    for (var row = 0; row < arr.length; row++) {
        for (var column = 0; column < arr[row].length; column++) {
            arr[row][column] = 0
        }
    }

    // Set the position of 'X'
    arr[playerY][playerX] = 'X'

    // Set the position of '1'
    arr[coinRow][coinColumn] = '1'

    // Display the updated array
    console.table(arr);
}

function placeCoin() {
    coinRow = Math.floor(Math.random() * arr.length)
    coinColumn = Math.floor(Math.random() * arr[0].length)
}

placeCoin()
render()

window.addEventListener("keydown", function (e) {
    if (e.key == 'w') {
        if (playerY > 0) {
            playerY--
        } else {
            playerY = arr.length - 1
        }
        render()
    } else if (e.key == 's') {
        if (playerY < arr.length - 1) {
            playerY++
        } else {
            playerY = 0
        }
        render()
    } else if (e.key == 'd') {
        if (playerX < arr[0].length - 1) {
            playerX++
        } else {
            playerX = 0
        }
        render()
    } else if (e.key == 'a') {
        if (playerX > 0) {
            playerX--
        } else {
            playerX = arr[0].length - 1
        }
        render()
    }

    // Check if 'X' collected the '1'
    if (playerY === coinRow && playerX === coinColumn) {
        score++
        placeCoin(); // Place the '1' in a new random position
    }
})
