import React from "react";
import { useSelector } from "react-redux";
import classes from "./MyForecastWeatherBox.module.css";

const MyForecastWeatherBox = () => {
  const { weatherForecastData } = useSelector((state) => state.weather);
  let weeklyData = weatherForecastData.list.filter((el, index) => !(index % 8));

  return (
    <div className={classes.weather}>
      {weeklyData.map((arr) => (
        <div className={classes.minibox} key={arr.dt}>
          <p
            style={{
              fontSize: "27px",
              marginBottom: "15px",
              marginTop: "10px",
            }}
          >
            {arr.dt_txt.slice(8, 10)}
          </p>
          <h1 style={{ fontSize: "33px" }}>
            {`${Math.round(arr.main.temp)}°`}
          </h1>
          <img
            src={`http://openweathermap.org/img/wn/${arr.weather[0].icon}@2x.png`}
            alt=""
            width={85}
          />
        </div>
      ))}
    </div>
  );
};

export default MyForecastWeatherBox;
