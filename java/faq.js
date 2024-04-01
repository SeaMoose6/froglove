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
const city = document.querySelector(".city")
const state = document.querySelector(".state")
const date = document.querySelector(".date")
const time = document.querySelector(".time")
let weatherImg = document.querySelector(".weather_img")
const temperature = document.querySelector(".temperature")
const description = document.querySelector(".description")
const key = '6e177f7d7d0432ab89fc18629151c4ef'
const dateObject = new Date()
const month = dateObject.getMonth() +1
const day = dateObject.getDate()
const year = dateObject.getFullYear()
let hours = dateObject.getHours()
let mins = dateObject.getMinutes()


// if (mins<10) {
//     mins = '0' + mins.toString()
// }
// if (hours>=12) {
//     meridiem = 'pm' 
// }
// if (hours>12) {
//     hours = hours-12
// }



// city.textContent = "Poland"
// state.textContent = 'HW'
// date.textContent = '12:30'
// time.textContent = '4/20/2024'
// weatherImg.src = '../image/snow.png'
// temperature.textContent = "101° C"
// description.textContent = 'heavy snow'

const clouds = ['few clouds', 'scattered clouds', 'broken clouds']
const rain = ['shower rain', 'rain', 'moderate rain', 'light rain']

let lat = 0
let lon = 0
let link = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`
let img


// async function getWeather(url) {
//     try {
//         const responce = await fetch(url)
//         const data = await responce.json()
//         temperature.textContent = `${Math.round(data.main.temp)}° F`
//         let condition = data.weather[0].description
//         description.textContent = condition

//         if (clouds.includes(condition)) {
//             img = 'partly-cloudy.png'
//         } else if (rain.includes(condition)) {
//             img = "rain.png"
//         } else if (condition == 'snow') {
//             img = "snow.png"
//         } else if (condition == 'thunderstorm') {
//             img = "rain-storm.png"
//         } else if (condition == 'mist') {
//             img = "rain.png"
//         } else if (condition == 'clear sky') {
//             img = 'sunny.png'
//         }


//         weatherImg.src = `../image/${img}`

//     } catch (error){
//         console.error(error)
//     }
// }
// getWeather()


const geo_key = '35ae5ddac9d144ffadb585899f9c6d9f'
let geo_url = `https://api.geoapify.com/v1/ipinfo?&apiKey=${geo_key}`

async function getLocation() {
    try {
        const locationResponse = await fetch(geo_url)
        const locationData = await locationResponse.json()
        let geo_lon = `${locationData.location.longitude}`
        let geo_lat = `${locationData.location.latitude}`
        console.log(geo_lat, geo_lon)
        city.textContent = locationData.city.name
        state.textContent = locationData.state.name
        
        async function getWeather() {
            let url = `https://api.openweathermap.org/data/2.5/weather?lat=${geo_lat}&lon=${geo_lon}&appid=${key}&units=imperial`
            try {
                const responce = await fetch(url)
                const data = await responce.json()
                temperature.textContent = `${Math.round(data.main.temp)}° F`
                let condition = data.weather[0].description
                description.textContent = condition
        
                if (clouds.includes(condition)) {
                    img = 'partly-cloudy.png'
                } else if (rain.includes(condition)) {
                    img = "rain.png"
                } else if (condition == 'snow') {
                    img = "snow.png"
                } else if (condition == 'thunderstorm') {
                    img = "rain-storm.png"
                } else if (condition == 'mist') {
                    img = "rain.png"
                } else if (condition == 'clear sky') {
                    img = 'sunny.png'
                }
        
        
                weatherImg.src = `../image/${img}`
        
            } catch (error){
                console.error(error)
            }
        }
        async function getTime() {
            let timeUrl = `https://api.api-ninjas.com/v1/worldtime?lat=${geo_lat}&lon=${geo_lon}`
            const options = {
                headers: {
                    'X-Api-Key': 'o39a9mwGKjoFiRW1DJGS7A==JRtslhR4ropO7OZt'
                }
                
            }
            try {
                const response = await fetch(timeUrl, options);
                const result = await response.json();
                const hours = result.hour
                const mins = result.minute
                const day = result.day
                const month = result.month
                const year = result.year
                let meridiem = 'am'
                if (hours>=12) {
                        meridiem = 'pm' 
                    }

                time.textContent = `${hours}:${mins} ${meridiem}`
                date.textContent = `${day}/${month}/${year}`
            } catch (error) {
                console.log(error)
            }
        }

        getWeather()
        getTime()
    } catch (error){
        console.error(error)
    }
    // return geo_lat, geo_lon
}

getLocation()
console.log(lat, lon)


// getLocation().then(c => getTime(c))
// then pass in C variable into time function
