const questionAns = document.querySelector('.answer')
const plusImgBtn = document.querySelector(".plus")
const minImgBtn = document.querySelector(".minus")
const plusBtn = document.getElementById('plus')
const minBtn = document.getElementById('minus')
const plusBtns = document.querySelectorAll('plus')


plusBtn.addEventListener('click', () =>{
    questionAns.style.display = "block"
    plusImgBtn.style.display = "none"
    minImgBtn.style.display = "block"
})

minImgBtn.addEventListener('click', () =>{
    questionAns.style.display = "none"
    plusImgBtn.style.display = "block"
    minImgBtn.style.display = "none"
})