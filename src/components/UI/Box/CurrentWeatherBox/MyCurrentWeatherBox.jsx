import React from "react";
import classes from "./MyCurrentWeatherBox.module.css";

const MyCurrentWeatherBox = ({ weatherCityTemp, weatherDescription }) => {
  return (
    <div className={classes.weather}>
      <h1 style={{ fontSize: "77px", marginLeft: "20px" }}>
        {`${weatherCityTemp}°`}
      </h1>
      <h2>{weatherDescription}</h2>
    </div>
  );
};

export default MyCurrentWeatherBox;
