import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import Forecast from "./Forecast.js";
import { TailSpin } from "react-loader-spinner";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinated,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
      coordinates: response.data.coordinates,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "80oc158tb64caae306c6eb4bf7cef14f";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className='Weather'>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col-9'>
              <input
                type='search'
                placeholder='Enter a city..'
                className='form-control'
                autoFocus='on'
                onChange={handleCityChange}
              />
            </div>
            <div className='col-3'>
              <input type='submit' value='Search' className='btn  w-100' />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return (
      <div className='loader' style={{ padding: "80px" }}>
        <div style={{ minHeight: "100px", minWidth: "100px" }}>
          <TailSpin
            visible={true}
            color='#4fa94d'
            ariaLabel='tail-spin-loading'
            radius='1'
            wrapperStyle={{ justifyContent: "center" }}
          />
        </div>
      </div>
    );
  }
}
