//primim o valoarea reprezentand m/s si returnam k/h

function windToKmPerHour(meterPerSec) {
  return (meterPerSec * 3600) / 1000;
}

//pe baza codului iconitei generam src

function getWeatherIcon(iconCode) {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

//primim o valoare reprezentand m/s si returnam km/h
// function windToKmPerHour(meterPerSec) {
//   return (meterPerSec * 3600) / 1000;
// }

// //pe baza codului iconitei, generam linkul acesteia
// function getWeatherIcon(iconCode) {
//   return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
// }
