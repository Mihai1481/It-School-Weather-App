// const currentCityTag = document.querySelector(".current-city");
// let currentCity = localStorage.getItem("city");

// //daca nu avem niciun oras salvat, salvam orasul default, sa zicem bucuresti

// if (!currentCity) {
//   localStorage.setItem("city", "București");
//   currentCity = "București";
// }

// currentCityTag.innerHTML = currentCity;

// displayCurrentWeather(currentCity);

const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

//daca nu avem nici un oras salvat in localStorage, salvam orasul default, sa zicem bucuresti
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

//actualizam orasul afisat pe ecran
currentCityTag.innerHTML = currentCity;
displayCurrentWeather(currentCity);
