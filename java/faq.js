const plusBtns = document.querySelectorAll('.plus')
const minBtns = document.querySelectorAll('.minus')
const questionsAns = document.querySelectorAll('.answer')
const plusImgBtns = document.querySelectorAll(".plus")
const minImgBtns = document.querySelectorAll(".minus")
const header = document.querySelector('.header')
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

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

hamburger.addEventListener('click', ()=>{
    console.log("clicked")
    if (menu.style.display == "none"){
        menu.style.display = "block"
    }else{
        menu.style.display = "none"
    }
})