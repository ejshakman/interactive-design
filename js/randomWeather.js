
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const weatherImage = document.getElementById('weatherimg');

const getWeather = document.getElementById('getWeather');


getWeather.addEventListener('click', () => {
    go();
});

function toBinary(number) {
    return (number >>> 0).toString(2);
}

function toHex(number) {
    return number.toString(16);
}

function chooseRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function go()
{
    var temperature = Math.floor(Math.random() * 100);
    temperatureElement.textContent = toHex(temperature) + "°C";
    
    var weather = ["clear-cloudy.svg", "cloudy.svg", "drizzle.svg", "showers.svg", "sunny.svg", "windy.svg", "clear-cloudy.svg"];

    var location = ['Idiotville, OR', 'Dinkytown, MN', 'Left Hand, WV', 'Okay, OK', 'Why, AZ', 'Whynot, NC'];
    
    weatherImage.src = "images/weatherIcon/" + chooseRandom(weather);
    locationElement.textContent = chooseRandom(location);

}
