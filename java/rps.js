// DOM = document object model

const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const results = document.querySelector('.result')
const userImg = document.querySelector('.user-img')
const compImg = document.querySelector('.comp-img')
const userWins = document.querySelector(".user-score")
const compWins = document.querySelector(".comp-score")
const resetBtn = document.getElementById('reset')


const choices = ['rock', 'paper', 'scissors']
let comp
let comp_score = 0
let user_score = 0
// function rockBtnClick() {
//     changes text of the result object
//     results.innerText = 'rock clicked'
// }


// takes event and preforms function
rockBtn.addEventListener('click', () => {
    userImg.src = "../image/" + rockBtn.id + ".png"
    // can style result with result.style.color = "red"
    compChoice()
    winLose(rockBtn.id)
    // console.log(comp_score)
})
scissorsBtn.addEventListener('click', () => {
    userImg.src = "../image/" + scissorsBtn.id + ".png"
    compChoice()
    winLose(scissorsBtn.id)
})
paperBtn.addEventListener('click', () => {
    userImg.src = "../image/" + paperBtn.id + ".png"
    compChoice()
    winLose(paperBtn.id)
})
resetBtn.addEventListener('click', () => {
    console.log(comp_score, user_score)
    comp_score = 0
    user_score = 0
    compWins.innerText = comp_score.toString()
    userWins.innerText = user_score.toString()
    console.log(comp_score, user_score)
})

function compChoice () {
    const randNum = Math.floor(Math.random()*3)
    comp = choices[randNum]
    compImg.src = "../image/" + comp + ".png"
}

function winLose (userChoice) {
    if (userChoice == "rock" && comp == "paper"){
        results.innerText = 'Computer Wins'
        comp_score = comp_score+1
        compWins.innerText = comp_score.toString()
    } else if (userChoice == "scissors" && comp == "rock") {
        results.innerText = 'Computer Wins'
        comp_score = comp_score+1
        compWins.innerText = comp_score.toString()
    } else if (userChoice == "paper" && comp == "scissors") {
        results.innerText = 'Computer Wins'
        comp_score = comp_score+1
        compWins.innerText = comp_score.toString()
    } else if (userChoice == "rock" && comp == "scissors"){
        results.innerText = 'User Wins'
        user_score = user_score+1
        userWins.innerText = user_score.toString()
    } else if (userChoice == "scissors" && comp == "paper") {
        results.innerText = 'User Wins'
        user_score = user_score+1
        userWins.innerText = user_score.toString()
    } else if (userChoice == "paper" && comp == "rock") {
        results.innerText = 'User Wins'
        user_score = user_score+1
        userWins.innerText = user_score.toString()
    } else {
        results.innerText = "Tie Game"
    }
    if (user_score == 3){
        results.inner
    }
}
