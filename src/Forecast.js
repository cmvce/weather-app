import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useInsertionEffect,
} from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastDay from "./ForecastDay";
export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState("");

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function getResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className='Forecast'>
        <div className='row'>
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className='col' key={index}>
                  <ForecastDay data={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    const longitude = props.coordinates.longitude;
    const latitude = props.coordinates.latitude;
    let apiKey = "80oc158tb64caae306c6eb4bf7cef14f";
    let url = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    axios.get(url).then(getResponse);
    return null;
  }
}
