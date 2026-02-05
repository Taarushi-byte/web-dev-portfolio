const apiKey = "b21487a6091c85b64d8ab53c22ef0cc1";

const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const result = document.getElementById("weatherResult");

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    const data = await response.json();

    if (data.cod !== 200) {
      result.innerHTML = `<p style="color:red;">City not found</p>`;
      return;
    }

    result.innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡 Temperature: ${data.main.temp}°C</p>
      <p>🌥 Weather: ${data.weather[0].main}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    result.innerHTML = `<p style="color:red;">Error loading data</p>`;
  }
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) getWeather(city);
});

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const city = cityInput.value.trim();
    if (city) getWeather(city);
  }
});

