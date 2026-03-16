

const apiKey = "a9199d8df3e49c7a0c8742c818214663";

const lat = 33.89;
const lon = -117.82;

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function getWeather() {
    try {
        const currentResponse = await fetch(currentUrl);
        const currentData = await currentResponse.json();

        document.getElementById("current-temp").textContent = Math.round(currentData.main.temp);

        document.getElementById("condition").textContent = currentData.weather[0].description;


        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        const forecastList = document.getElementById("forecast");

        for (let i = 8; i <= 24; i += 8) {
            const date = new Date(forecastData.list[i].dt_txt);
            const temp = Math.round(forecastData.list[i].main.temp);
            const day = date.toLocaleDateString("en-US", {weekday: "long"});

            const li = document.createElement("li");
            li.textContent = `${day}: ${temp} °F`;

            forecastList.appendChild(li);
        }

    }   catch (error) {
        console.error("Weather fetch error: ", error);
    }
}
getWeather();