const plusBtns = document.querySelectorAll('.plus')
const minBtns = document.querySelectorAll('.minus')
const questionsAns = document.querySelectorAll('.answer')
const plusImgBtns = document.querySelectorAll(".plus")
const minImgBtns = document.querySelectorAll(".minus")
const header = document.querySelector('.header')
const hamburger = document.querySelector('.hamburger')

console.log(plusBtns)
plusBtns.forEach(plus => {
    plus.addEventListener('click', () =>{
        let index = plus.id
        questionsAns[index].style.display='block'
        plusImgBtns[index].style.display='none'
        minImgBtns[index].style.display='block'
    })
});
minBtns.forEach(min => {
    min.addEventListener('click', () =>{
        let index = min.id
        questionsAns[index].style.display='none'
        plusImgBtns[index].style.display='block'
        minImgBtns[index].style.display='none'
    })
});
