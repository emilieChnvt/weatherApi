
const weatherInfo = document.querySelector('.weatherInfo');

const apiKey = '7e583338fd9960bbe1d8e817bc0e46e5'
let url='https://api.openweathermap.org/data/2.5';
let cityName = 'lyon'




fetch(`${url}/weather?q=${cityName}&appid=${apiKey}`)
    .then(response => response.json())
    .then(json => {
        console.log(json);
        let temp =Math.round((json.main.temp)-273.15);
        let sky = json.weather[0].main.toLocaleLowerCase();
        let name =  json.name

        switch (sky) {
            case 'clouds':
                sky = '☁️'
                break;
                case 'rain':
                    sky ='⛆'
                    break;
                    case 'sun':
                            sky='☀'
                            break;

        }
        weatherInfo.innerHTML = `
            <h2>${name}</h2>
            <h1>${sky}</h1>
            <h3>${temp}°C</h3>
            
        `


    });

