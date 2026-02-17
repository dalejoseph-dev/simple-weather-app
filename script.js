//API Key for the weather app: 1edefc1c75e71c66dd00ac1510c3a310

// Declaring the variables
let lon;
let lat;
let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let icon = document.querySelector(".icon");
let loc = document.querySelector(".location");
const Kelvin = 273;

// Adding a weatherLabels object fixes the broken clouds
const weatherLabels = {
  "thunderstorm with light rain": "Thunderstorm",
  "thunderstorm with rain": "Thunderstorm",
  "thunderstorm with heavy rain": "Heavy Thunderstorm",
  "light thunderstorm": "Light Thunderstorm",
  "thunderstorm": "Thunderstorm",
  "heavy thunderstorm": "Heavy Thunderstorm",
  "ragged thunderstorm": "Thunderstorm",
  "light drizzle": "Light Drizzle",
  "drizzle": "Drizzle",
  "heavy intensity drizzle": "Heavy Drizzle",
  "light rain": "Light Rain",
  "moderate rain": "Moderate Rain",
  "heavy intensity rain": "Heavy Rain",
  "very heavy rain": "Heavy Rain",
  "extreme rain": "Heavy Rain",
  "freezing rain": "Freezing Rain",
  "light shower rain": "Light Rain",
  "shower rain": "Rainy",
  "heavy shower rain": "Heavy Rain",
  "light snow": "Light Snow",
  "snow": "Snowy",
  "heavy snow": "Heavy Snow",
  "sleet": "Sleet",
  "shower snow": "Snow Showers",
  "mist": "Misty",
  "smoke": "Smoky",
  "haze": "Hazy",
  "fog": "Foggy",
  "sand": "Sandy",
  "dust": "Dusty",
  "tornado": "Tornado",
  "clear sky": "Sunny",
  "few clouds": "Mostly Sunny",
  "scattered clouds": "Partly Cloudy",
  "broken clouds": "Mostly Cloudy",
  "overcast clouds": "Overcast",
};


window.addEventListener("load", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      
      //API ID
      const api = "1edefc1c75e71c66dd00ac1510c3a310";
      
      //API URL
      const base = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
             `lon=${lon}&appid=1edefc1c75e71c66dd00ac1510c3a310`;
      
      // Calling the API
      fetch(base)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          temperature.textContent =
            Math.floor(data.main.temp - Kelvin) + "°C";
          const desc = data.weather[0].description;
          summary.textContent = desc.charAt(0).toUpperCase() + desc.slice(1);
          loc.textContent = data.name + ", " + data.sys.country;
          let icon1 = data.weather[0].icon;
          icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon1}@2x.png" style="height: 10rem;" />`;
      })
    })
  }
})