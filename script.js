const searchBar = document.getElementById('searchbar')
const searchBtn = document.getElementById('searchbtn')

searchBtn.addEventListener('click', ()=>{
    let cityName = searchBar.value
    
    console.log(cityName);
    GetWeather(cityName)
})



async function GetWeather(searchcityname){
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchcityname}&APPID=7120d90303563c0ae9477bc0bd4e6927`)
    let responseData = await response.json()
    const resultDiv = document.getElementById('result')
    const mainWeatherDiv = document.createElement('div')
    const descriptionWeatherDiv = document.createElement('div')
    const tempDiv = document.createElement('div')
    const tempFeels_likeDiv = document.createElement('div')
    const tempMinDiv = document.createElement('div')
    const tempMaxDiv = document.createElement('div')
    const pressure = document.createElement('div')

    
    mainWeatherDiv.innerHTML = `${responseData.weather[0].main}`
    resultDiv.appendChild(mainWeatherDiv)
    
    descriptionWeatherDiv.innerHTML = `${responseData.weather[0].description}`
    resultDiv.appendChild(descriptionWeatherDiv)

    tempDiv.innerHTML = `${responseData.main.temp}`      // convert
    resultDiv.appendChild(tempDiv)

    tempFeels_likeDiv.innerHTML = `${kelvinToCelsius(responseData.main.feels_like)}`
    resultDiv.appendChild(tempFeels_likeDiv)

    tempMinDiv.innerHTML = `${responseData.main.temp_min}`
    resultDiv.appendChild(tempMinDiv)

    tempMaxDiv.innerHTML = `${responseData.main.temp_max}`
    resultDiv.appendChild(tempMaxDiv)

    pressure.innerHTML = `${responseData.main.pressure}`
    resultDiv.appendChild(pressure)
}



function kelvinToCelsius(num) {
    return Math.round(( num - 273.15) * 100) / 100
}


console.log(kelvinToCelsius(297.14));
