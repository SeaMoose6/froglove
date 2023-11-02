// DOM = document object model

const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const results = document.querySelector('.result')
const userImg = document.querySelector('.user-img')
const compImg = document.querySelector('.comp-img')

const choices = ['rock', 'paper', 'scissors']
let comp
// function rockBtnClick() {
//     changes text of the result object
//     results.innerText = 'rock clicked'
// }


// takes event and preforms function
rockBtn.addEventListener('click', () => {
    userImg.src = "../image/" + rockBtn.id + ".png"
    // can style result with result.style.color = "red"
    compChoice()
    results.innerText = comp
})
scissorsBtn.addEventListener('click', () => {
    userImg.src = "../image/" + scissorsBtn.id + ".png"
    compChoice()
})
paperBtn.addEventListener('click', () => {
    userImg.src = "../image/" + paperBtn.id + ".png"
    compChoice()
})

function compChoice () {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    compImg.src = "../image/" + comp + ".png"
}

function winLose (userChoice) {
    
}
