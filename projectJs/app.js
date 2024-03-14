const apiKey = 'https://api.openweathermap.org/data/2.5/weather?q=';
const apiKey1 = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
const key = 'c4687a0a9842f99dee7796fc3eb8e16d';
let input = document.querySelector('.search input');
let btn = document.querySelector('.search button');




async function getWeather(city) {           
        let data = await fetch(apiKey + city + `&appid=${key}`);
        let response = await data.json();

        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            showData(response);  
            console.log(response);
        } 
}
function showData(response) {      
    document.querySelector('.city').innerHTML = response.name;
    document.querySelector('.temp').innerHTML = Math.round(response.main.temp - 273) + "°C";
    document.querySelector('.humidity').innerHTML = response.main.humidity + "%";
    document.querySelector('.wind').innerHTML = response.wind.speed + " km/h";
    let changeImg = document.querySelector('.weather-icon');

    if (response.weather[0].main == "Clouds") {
        changeImg.src = "images/clouds.png";
    }else if (response.weather[0].main == "clear") {
         changeImg.src = "images/clear.png";    
   }else if (response.weather[0].main == "drizzle") {
         changeImg.src = "images/drizzle.png";    
   }else if (response.weather[0].main == "mist") {
         changeImg.src = "images/mist.png";    
   }else if (response.weather[0].main == "rain") {
         changeImg.src = "images/rain.png";    
   }else if (response.weather[0].main == "snow") {
         changeImg.src = "images/snow.png";    
    } 
    
document.querySelector(".error").style.display = "none";
document.querySelector(".weather").style.display = "block";
}  

btn.addEventListener("click", () => {
    let city =  input.value;    
    getWeather(city);  
    console.log(city);
})
// /new file add