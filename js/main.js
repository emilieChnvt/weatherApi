


const apiKey = '7e583338fd9960bbe1d8e817bc0e46e5'
let url='https://api.openweathermap.org/data/2.5';
let cityName = 'lyon'




fetch(`${url}/weather?q=${cityName}&appid=${apiKey}`)
    .then(response => response.json())
    .then(json => {
        console.log(json.weather[0].main)
        console.log(Math.round((json.main.temp)-273.15))
        console.log(json)
    });