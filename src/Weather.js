import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });
  const city = "New York";
  function getWeather(response) {
    setWeather({
      ready: true,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      city: response.data.city,
      feelsLike: response.data.temperature.feels_like,
    });
  }
  if (weather.ready) {
    return (
      <div className='Weather'>
        <form>
          <div className='row'>
            <div className='col-9'>
              <input
                type='text'
                placeholder='Enter a city...'
                className='form-control'
                autoFocus='on'
              />
            </div>
            <div className='col-3'>
              <input
                type='button'
                value='Search'
                className='btn btn-warning w-100'
              />
            </div>
          </div>
        </form>
        <h1>{weather.city}</h1>
        <ul>
          <li>Monday 07:07</li>
          <li className='text-capitalize'>{weather.description}</li>
        </ul>
        <div className='row mt-3 '>
          <div className='col-6'>
            <div className='clearfix'>
              <img
                src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'
                alt='Mostly Cloudy'
                className='float-left'
              />

              <span className='temperature'>
                {Math.round(weather.temperature)}
              </span>
              <span className='unit'>°C</span>
            </div>
          </div>

          <div className='col-6'>
            <ul>
              <li>Feels-like: {weather.feelsLike}°C</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {Math.round(weather.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "80oc158tb64caae306c6eb4bf7cef14f";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(getWeather);
    return "Loading...";
  }
}
