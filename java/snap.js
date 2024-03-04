const header = document.querySelector('.header')
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')

hamburger.addEventListener('click', ()=>{
    console.log("clicked")
    if (menu.style.display == "none"){
        menu.style.display = "block"
    }else{
        menu.style.display = "none"
    }
})

close.addEventListener('click', ()=>{
   menu.style.display = "none"
})