async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const result = document.getElementById("weatherResult");

  if (!city.trim()) {
    result.innerHTML = "<p>❗ Please enter a city name</p>";
    return;
  }

  const apiKey = "c10c2906f0a09311a9d696a0c88479cb"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const humidity = data.main.humidity;
    const wind = data.wind.speed;

    result.innerHTML = `
      <h3>${data.name}</h3>
      <p>🌡️ Temp: ${temp} °C</p>
      <p>🌥️ Condition: ${desc}</p>
      <p>💧 Humidity: ${humidity}%</p>
      <p>🌬️ Wind: ${wind} km/h</p>
    `;
  } catch (err) {
    result.innerHTML = `<p>❌ Error: ${err.message}</p>`;
  }
}
