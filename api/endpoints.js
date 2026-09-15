const API_KEY = "d54e45d4f2e58963e8afbf788714891b";

//construim linkurile(endpointurile serverlor de la care vom primii date)

function getCurrentWeatherEndpoint(city) {
  //intotdeauna cand folosim un API , putem obtine informatii extra prin query params
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}

function getForecastEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
