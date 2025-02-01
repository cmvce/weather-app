import React from "react";
import "./Weather.css";
export default function Weather() {
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
      <h1>New York</h1>
      <ul>
        <li>Monday 07:07</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className='row mt-3 '>
        <div className='col-6'>
          <div className='clearfix'>
            <img
              src='https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png'
              alt='Mostly Cloudy'
              className='float-left'
            />

            <span className='temperature'>6</span>
            <span className='unit'>°C</span>
          </div>
        </div>

        <div className='col-6'>
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 75%</li>
            <li>Wind: 15 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
