import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "Clear sky",
    "clear-sky-night": "Clear sky",
    "few-clouds-day": "Few Clouds",
    "few-clouds-night": "Few Clouds",
    "scattered-clouds-day": "Scattered clouds",
    "scattered-clouds-night": "Scattered cloudsT",
    "broken-clouds-day": "Broken clouds",
    "broken-clouds-night": "Broken clouds",
    "shower-rain-day": "Shower rain",
    "shower-rain-night": "Shower rain",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "Thunderstorm",
    "thunderstorm-night": "Thunderstorm",
    "snow-day": "Snow",
    "snow-night": "Snow",
    "mist-day": "Mist",
    "mist-night": "Mist",
  };
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color='#1e1e1e'
      size={props.size}
      animate={true}
    />
  );
}
