//import { GetWeather } from "./weather"



const searchBar = document.getElementById('searchbar')
const searchBtn = document.getElementById('searchbtn')
const resultDiv = document.getElementById('result')

searchBtn.addEventListener('click', ()=>{
    let cityName = searchBar.value
    resultDiv.innerHTML = ""
    
    console.log(cityName);

    if (cityName) {
        GetWeather(cityName).catch(function(){return alert("Oops!!! City noy found.")})
    }
    else{
        alert("Search bar is empty")
    }
})


function kelvinToCelsius(num) {
    return Math.round(( num - 273.15) * 100) / 100
}


async function GetWeather(searchcityname){
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchcityname}&APPID=7120d90303563c0ae9477bc0bd4e6927`)
    let responseData = await response.json()

    resultDiv.classList.add('results')
    
    const mainContents = document.createElement('div')
    mainContents.classList.add('display')
    resultDiv.appendChild(mainContents)

    const tempAndCity = document.createElement('div')
    mainContents.appendChild(tempAndCity)
    
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = `${kelvinToCelsius(responseData.main.temp)} °C`      // convert
    tempDiv.classList.add('highlight')
    tempAndCity.appendChild(tempDiv) 
    
    const cityName = document.createElement('div')
    cityName.innerHTML = `${searchcityname}`
    tempAndCity.appendChild(cityName)

    const cloudMainAndDes = document.createElement('div')
    mainContents.appendChild(cloudMainAndDes)

    const mainWeatherDiv = document.createElement('div')
    mainWeatherDiv.innerHTML = `${responseData.weather[0].main}`
    mainWeatherDiv.classList.add('highlight')
    cloudMainAndDes.appendChild(mainWeatherDiv)

    const descriptionWeatherDiv = document.createElement('div')
    descriptionWeatherDiv.innerHTML = `${responseData.weather[0].description}`
    cloudMainAndDes.appendChild(descriptionWeatherDiv)

    const otherDetailsDiv = document.createElement('div')
    otherDetailsDiv.classList.add('othercontents')
    resultDiv.appendChild(otherDetailsDiv)

    const tempFeels_likeDiv = document.createElement('div')
    otherDetailsDiv.appendChild(tempFeels_likeDiv)

    const tempFeelLikeHeading = document.createElement('h3')
    tempFeelLikeHeading.innerHTML = "Feels Like"
    tempFeels_likeDiv.appendChild(tempFeelLikeHeading)

    const tempfeelsLike = document.createElement('p')
    tempfeelsLike.innerHTML = `${kelvinToCelsius(responseData.main.feels_like)} °C`
    tempFeels_likeDiv.appendChild(tempfeelsLike)

    const tempMinDiv = document.createElement('div')
    otherDetailsDiv.appendChild(tempMinDiv)
    const tempMinHeading = document.createElement('h3')
    tempMinHeading.innerHTML = " Min Temp"
    tempMinDiv.appendChild(tempMinHeading)

    const tempMin = document.createElement('p')
    tempMin.innerHTML = `${kelvinToCelsius(responseData.main.temp_min)} °C`
    tempMinDiv.appendChild(tempMin)

    const tempMaxDiv = document.createElement('div')
    otherDetailsDiv.appendChild(tempMaxDiv)
    const tempMaxHeading = document.createElement('h3')
    tempMaxHeading.innerHTML = "Max Temp"
    tempMaxDiv.appendChild(tempMaxHeading)

    const tempMax = document.createElement('p')
    tempMax.innerHTML = `${kelvinToCelsius(responseData.main.temp_max)} °C`
    tempMaxDiv.appendChild(tempMax)

    const pressureDiv = document.createElement('div')
    otherDetailsDiv.appendChild(pressureDiv)
    const pressureHeading = document.createElement('h3')
    pressureHeading.innerHTML = "Pressure"
    pressureDiv.appendChild(pressureHeading)

    const pressure = document.createElement('p')
    pressure.innerHTML = `${responseData.main.pressure} mb`
    pressureDiv.appendChild(pressure)
    console.log("hello")
}



