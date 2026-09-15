//declararea functiei pentru afisarea vremii curenta, apelul se face in alte fisiere !!!

function displayCurrentWeather() {
  //general link ul serverlui pe baza orasului
  const currentWeatherEndpoint = getCurrentWeatherEndpoint("București");

  fetch(currentWeatherEndpoint)
    .then((response) => response.json())
    .then((data) => {
      //extragem doar proprietatile care ne intereseaza

      const { name, dt, main, weather, wind } = data;

      const day = getDayOfTheWeek(dt);

      const hours = getHour(dt);

      //rotunjim

      const temperature = Math.round(main.temp);
      const realFeel = Math.round(main.feels_like);

      const weatherDescription = weather[0].description;

      const weatherIcon = getWeatherIcon(weather[0].icon);

      const windSpeed = Math.round(windToKmPerHour(wind.speed));

      const cityName = name;

      //afisam pe ecran informatiile extrase

      let currentWeatherContainer = document.querySelector(".current-weather");

      currentWeatherContainer.innerHTML = `      <div class="px-3">
  <div class="fs-2 mb-2">
   <strong>${cityName}</strong> 
  </div>
  <div class="fs-4"><strong>${day}</strong>,${hours}</div>
  <div class="d-flex align-items-center justify-content-center">
    <strong class="fs-1">${temperature}°C</strong>
    <img src="${weatherIcon}"/>
  </div>
</div>
<div class="px-3">
  <p class="fs-5">Real feel:<strong>${realFeel}°C</strong></p>
  <p class="fs-5 text-capitalize">${weatherDescription}</p>
  <p class="fs-5">Vant: <strong>${windSpeed}</strong></p>
</div>`;
    });
}
