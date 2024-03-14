const plusBtns = document.querySelectorAll('.plus')
const minBtns = document.querySelectorAll('.minus')
const questionsAns = document.querySelectorAll('.answer')
const plusImgBtns = document.querySelectorAll(".plus")
const minImgBtns = document.querySelectorAll(".minus")
const header = document.querySelector('.header')
const hamburger = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')
const theJoke = document.querySelector('.output')
const newJoke = document.querySelector('.button')

// console.log(plusBtns)
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

// const url = 'https://yahoo-finance127.p.rapidapi.com/price/eth-usd';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c1b72f0077msh29be9f1886b4f8cp11e832jsnd9f07cf7806e',
// 		'X-RapidAPI-Host': 'yahoo-finance127.p.rapidapi.com'
// 	}
// };
// async function getPrice(){
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         // put a dot to access a key word
//         console.log(result.symbol);
//     } catch (error) {
//         console.error(error);
//     }
// }

// const url = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'c1b72f0077msh29be9f1886b4f8cp11e832jsnd9f07cf7806e',
// 		'X-RapidAPI-Host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// newJoke.addEventListener('click', () =>{
//     getJoke()
// })

// async function getJoke() {
//     try {
//         const response = await fetch(url, options);
//         const result = await response.json();
//         const joke = result[0].joke;
//         theJoke.textContent = joke
//     } catch (error) {
//         theJoke.textContent = "something aint right here.."
//     }
// }
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
const city = document.querySelector(".city")
const state = document.querySelector(".state")
const date = document.querySelector(".date")
const time = document.querySelector(".time")
const weatherImg = document.querySelector(".weather_img")
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description")
const key = '6e177f7d7d0432ab89fc18629151c4ef'
const dateObject = new Date()
const month = dateObject.getMonth() +1
const day = dateObject.getDate()
const year = dateObject.getFullYear()
let hours = dateObject.getHours()
let mins = dateObject.getMinutes()
let meridiem = 'am'


if (mins<10) {
    mins = '0' + mins.toString()
}
if (hours>=12) {
    meridiem = 'pm' 
}
if (hours>12) {
    hours = hours-12
}
let ow_time = `${hours}:${mins}${meridiem}`
let ow_date = `${month}/${day}/${year}`

console.log(month, day, year, ow_time)

city.textContent = "Portland"
state.textContent = 'ME'
date.textContent = ow_date
time.textContent = ow_time
weatherImg.src = '../image/snow.png'
temperature.textContent = "101° C"
description.textContent = 'heavy snow'


