import React from "react";
import classes from "./MyCurrentWeatherBox.module.css";

const MyCurrentWeatherBox = ({ weatherCityTemp, weatherDescription, mini }) => {
  return (
    <div className={classes.weather}>
      <h1 className={mini ? classes.miniHeader : classes.mainHeader}>
        {`${weatherCityTemp}°`}
      </h1>
      <h2>{weatherDescription}</h2>
    </div>
  );
};

export default MyCurrentWeatherBox;
