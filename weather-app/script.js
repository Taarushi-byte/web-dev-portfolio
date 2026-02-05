async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "b21487a6091c85b64d8ab53c22ef0cc1";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("weather").innerHTML =
            `Temperature: ${data.main.temp}°C <br> Condition: ${data.weather[0].main}`;
    } catch (error) {
        document.getElementById("weather").innerText = error.message;
    }
}

