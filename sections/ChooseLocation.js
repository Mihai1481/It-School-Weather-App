const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");

function updateCurrentCity(city) {
  const currentCity = document.querySelector(".current-city");
  currentCity.innerHTML = city;
}

function updateWeather(city) {
  //actualizam si localstorage
  localStorage.setItem("city", city);
  updateCurrentCity(city);
  //reafisam vremea curenta pentru noul usor
  displayCurrentWeather(city);
}

//adaugam event listener pe butoane

bucharest.addEventListener("click", () => {
  updateWeather("București");
});

timisoara.addEventListener("click", () => {
  updateWeather("Timișoara");
});

oradea.addEventListener("click", () => {
  updateWeather("Oradea");
});
