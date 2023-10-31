const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const results = document.querySelector('.result')
const userImg = document.querySelector('.user-img')
const compImg = document.querySelector('.comp-img')

function rockBtnClick() {
    results.innerText = 'rock clicked'
}
function paperBtnClick() {
    results.innerText = 'paper clicked'
}
function scissorsBtnClick() {
    results.innerText = 'scissors clicked'
}

rockBtn.addEventListener('click', rockBtnClick)
scissorsBtn.addEventListener('click', scissorsBtnClick)
paperBtn.addEventListener('click', paperBtnClick)