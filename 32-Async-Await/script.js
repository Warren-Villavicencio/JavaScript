// API Key de OpenWeatherMap
const API_KEY = 'TU_API_KEY_AQUI'; // Reemplaza con tu API Key

// Clase para manejar la obtención del clima
class Weather {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    // Método para obtener la ubicación del usuario
    async getLocation() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            } else {
                reject(new Error("Geolocalización no es soportada por este navegador."));
            }
        });
    }

    // Método para obtener el clima basado en la latitud y longitud
    async getWeather(lat, lon) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}&lang=es&units=metric`);
        if (!response.ok) {
            throw new Error("Error al obtener el clima.");
        }
        return await response.json();
    }

    // Método principal para obtener la ubicación y el clima
    async fetchWeather() {
        try {
            const position = await this.getLocation();
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const weatherData = await this.getWeather(lat, lon);
            return weatherData;
        } catch (error) {
            console.error(error);
            alert("No se pudo obtener la ubicación o el clima.");
        }
    }
}

// Función para mostrar el clima en la interfaz
async function displayWeather() {
    const weather = new Weather(API_KEY);
    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.innerHTML = 'Cargando...';

    const weatherData = await weather.fetchWeather();
    if (weatherData) {
        weatherInfoDiv.innerHTML = `
            <h2>${weatherData.name}</h2>
            <p>Temperatura: ${weatherData.main.temp} °C</p>
            <p>Descripción: ${weatherData.weather[0].description}</p>
        `;
    }
}

// Evento para el botón
document.getElementById('getWeatherBtn').addEventListener('click', displayWeather);