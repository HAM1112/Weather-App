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

    console.log(responseData.weather[0].main);
    console.log(responseData.weather[0].description);
    console.log(responseData.main.temp)
    console.log(responseData.main.feels_like)
    console.log(responseData.main.temp_min)
    console.log(responseData.main.temp_max)
    console.log(responseData.main.pressure)
    console.log(responseData);
}

//GetWeather("london")