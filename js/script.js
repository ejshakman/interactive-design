
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
    
    var weather = ["flood.png", "drought.png", "freezing.png", "tsunami.png", "wildfire.png", "acid-rain.png"];

    var location = ['Mumbai', 'New York', 'Mars', 'Galesburg, MI', 'The Moon'];
    
    weatherImage.src = "images/" + chooseRandom(weather);
    locationElement.textContent = chooseRandom(location);

}
