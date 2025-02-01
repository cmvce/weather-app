import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather app</h1>
        <Weather />
        <footer>
          This porject is created by{" "}
          <a href="https://github.com/cmvce" target="blank_">
            Coleene Acevedo
          </a>{" "}
          and is{" "}
          <a href="https://github.com/cmvce/weather-app" target="blank_">
            open-sourced
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

export default App;
