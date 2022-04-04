function getWeather() {
  let temperature = document.getElementById("temperature");
  let description = document.getElementById("description");
  let location = document.getElementById("location");
  let api = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "f65251cd52495c46462b5c7782b56114";

navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let url = api + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial";
  fetch(url)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        let temp = data.main.temp;
        temperature.innerHTML = temp + "° F";
        location.innerHTML =
        data.name + " (" + latitude + "°, " + longitude + "°)";
        description.innerHTML = data.weather[0].main;
      });
}
function error() {
  //console.log(error);
  location.innerHTML = "Unable to retrieve your location";
}


}


getWeather();