const apiKey = 'eda8dcc0ca.......';
const searchButton = document.getElementById('search-btn');
const cityInput = document.getElementById('city');
const weatherInfoDiv = document.getElementById('weather-info');

searchButton.addEventListener('click', () => {
    const city = cityInput.value;
    if (city) {
        getWeatherData(city);
    } else {
        alert('Please enter a city name.');
    }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.cod === 200) {
            displayWeatherData(data);
        } else {
            alert('City not found');
        }
    } catch (error) {
        alert('Error fetching weather data');
        console.error(error);
    }
}

function displayWeatherData(data) {
    document.getElementById('city-name').textContent = `City: ${data.name}, ${data.sys.country}`;
    document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
    document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
}
