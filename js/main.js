const apiKey = '7e583338fd9960bbe1d8e817bc0e46e5\n'
let url='https://api.openweathermap.org/data/2.5';




fetch(`${url}/weather?lat=44.34&lon=10.99&appid=${apiKey}`)
    .then(response => response.json())
    .then(json => console.log(json));