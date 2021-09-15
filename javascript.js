let searchCity = document.querySelector("#search-city");

function inputTemp(response) {
  let temp = Math.round(response.data.main.temp);
  let tempNew = document.querySelector("#currentTemp");
  tempNew.innerHTML = temp;
  console.log(tempNew);
}

function cityInput(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  cityInput = cityInput.value;
  let cityNew = document.querySelector("#city-new");
  cityNew.innerHTML = cityInput;
  console.log(cityNew);
  let apiKey = "34a4206d301517fba52add27cb8eade5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(inputTemp);
  axios.get(apiUrl).then(showTime);
}
searchCity.addEventListener("submit", cityInput);
console.log(searchCity);

function showTime(timestamp) {
  let currentTime = document.querySelector("#current-time");
  now = new Date();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let month = now.getMonth();
  currentTime.innerHTML = `${day}, ${hour}:${minutes}, ${month}`;
}
searchCity.addEventListener("submit", showTime);

let celsiusButton = document.querySelector("#celsius");
function tempCelsius(event) {
  event.preventDefault();
  let currentTemp = document.querySelector("#currentTemp");
  let tempInCelsius = 19;
  currentTemp.innerHTML = tempInCelsius;
}

let farenheitButton = document.querySelector("#farenheit");
function tempFarenheit(event) {
  event.preventDefault();
  let tempInFarenheit = 66;
  let currentTemp = document.querySelector("#currentTemp");
  currentTemp.innerHTML = tempInFarenheit;
}
farenheitButton.addEventListener("click", tempFarenheit);
console.log(celsius);
celsiusButton.addEventListener("click", tempCelsius);

function showTemp(response) {
  let temp = Math.round(response.data.main.temp);
  console.log(temp);
  let heading = document.querySelector("#currentTemp");
  heading.innerHTML = temp;
}

function showCity(position) {
  let city = position.data.name;
  let currentCity = document.querySelector("#city-new");
  currentCity.innerHTML = city;
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  let units = "metric";
  let apiKey = "427ef53a13859cb2c4cd481cfb94dde0";
  let apiEndPoint = "https://api.openweathermap.org/data/2.5/weather?";
  let apiUrl = `${apiEndPoint}lat=${lat}&lon=${long}&cnt=10&appid=${apiKey}&units=${units}`;

  console.log(apiUrl);
  axios.get(apiUrl).then(showTemp);
  axios.get(apiUrl).then(showCity);
  axios.get(apiUrl).then(showTime);
}

navigator.geolocation.getCurrentPosition(showPosition);
