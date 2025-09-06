// weather.mjs
// Use the Promise-based readline API
import { stdin as input, stdout as output } from 'node:process';
import readline from 'readline/promises';

// 👉 Put your OpenWeather API key here
const API_KEY = '33d339de88bf298437c159b30b31b509';

// Base API URL
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API_KEY}'

// Create a readline interface for user input/output
const rl = readline.createInterface({ input, output });

// Function: fetch and print weather for a city
async function getWeather(city) {
  // Guard: empty input
  if (!city || !city.trim()) {
    console.log('Please enter a valid city name.');
    return;
  }

  // Build request URL (encode city to handle spaces etc.)
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;

  try {
    // Call the API (Node 18+ has global fetch)
    const response = await fetch(url);

    // Handle common errors cleanly
    if (!response.ok) {
      if (response.status === 401) throw new Error('Invalid API key.');
      if (response.status === 404) throw new Error('City not found. Please check the name.');
      throw new Error(`Request failed: ${response.status} ${response.statusText}`);
    }

    // Read JSON body
    const data = await response.json();

    // Print nice output
    console.log('\nWeather Information');
    console.log(`City: ${data.name}${data.sys?.country ? ', ' + data.sys.country : ''}`);
    console.log(`Temperature: ${data.main?.temp}°C (feels like ${data.main?.feels_like}°C)`);
    console.log(`Humidity: ${data.main?.humidity}%`);
    console.log(`Description: ${data.weather?.[0]?.description ?? 'N/A'}`);
    console.log(`Wind Speed: ${data.wind?.speed} m/s\n`);
  } catch (err) {
    // Show a simple error message
    console.log('Error:', err.message);
  }
}

// Ask the user for a city (await works because we used readline/promises)
const city = await rl.question('Enter a city name to get its weather: ');

// Fetch & display weather
await getWeather(city);

// Close readline
rl.close();
