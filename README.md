# Simple Weather App

> A browser-based weather application that detects your location and displays real-time weather data.

---

## 1. Project Overview

This is a browser-based weather application that detects the user's location via the Geolocation API and displays real-time weather data including temperature, weather condition, and city name. It fetches live data from the OpenWeatherMap API.

---

## 2. Features

- Automatic location detection using the browser's Geolocation API
- Live weather data fetched from OpenWeatherMap
- Displays current temperature in Celsius
- Shows a friendly weather condition label (e.g. Mostly Cloudy, Sunny)
- Displays matching weather icon from OpenWeatherMap
- Shows the user's city and country

---

## 3. File Structure

| File | Description |
|------|-------------|
| `index.html` | Main HTML file — defines the app layout and links styles and script |
| `script.js` | Core JavaScript — handles geolocation, API calls, and DOM updates |
| `styles.css` | Stylesheet — controls layout, colors, and the card design |

---

## 4. How It Works

### 4.1 Geolocation

When the page loads, the app requests the user's location via `navigator.geolocation.getCurrentPosition()`. The browser will prompt the user to allow or deny location access. If granted, the latitude and longitude are stored and passed to the API call.

### 4.2 API Call

The app calls the OpenWeatherMap Current Weather endpoint:

```
http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_KEY}
```

The response is in JSON format and contains temperature (in Kelvin), weather description, icon code, city name, and country code.

### 4.3 Temperature Conversion

The OpenWeatherMap API returns temperature in Kelvin. The app converts it to Celsius by subtracting 273:

```js
Math.floor(data.main.temp - 273) + "°C"
```

### 4.4 Weather Label Mapping

The app maps OpenWeatherMap's raw description strings to friendlier display labels. For example:

| API Description | Displayed As |
|-----------------|--------------|
| `broken clouds` | Mostly Cloudy |
| `clear sky` | Sunny |
| `scattered clouds` | Partly Cloudy |
| `overcast clouds` | Overcast |

If a description is not in the mapping table, the app falls back to capitalizing the first letter of the raw string.

### 4.5 Weather Icon

The icon code returned by the API (e.g. `03d`) is used to load the matching icon image directly from OpenWeatherMap's CDN:

```
https://openweathermap.org/img/wn/{icon}@2x.png
```

---

## 5. API Key

The app uses the following OpenWeatherMap API key:

```
********************************
```

To use a different key, replace the `appid` value in the base URL inside `script.js`. You can obtain a free API key by registering at [openweathermap.org](https://openweathermap.org).

---

## 6. Setup & Usage

1. Download or clone the project files (`index.html`, `script.js`, `styles.css`).
2. Open `index.html` in a modern web browser (Chrome, Firefox, Edge, Safari).
3. When prompted, allow location access.
4. The app will automatically load and display current weather for your location.

> **Note:** The app requires an internet connection to fetch weather data. The Geolocation API requires the page to be served over HTTPS or localhost in some browsers.

---

## 7. Browser Support

- Google Chrome *(recommended)*
- Mozilla Firefox
- Microsoft Edge
- Safari (iOS & macOS)

---

## 8. Known Limitations

- The app does not work if the user denies location permission.
- No offline/fallback mode — requires internet access.
- Temperature unit is fixed to Celsius (no toggle to Fahrenheit).
- Only displays current weather — no hourly or weekly forecast.