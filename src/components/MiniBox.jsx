import React from "react";
import MyBox from "./UI/Box/MyBox";
import MyCurrentWeatherBox from "./UI/Box/CurrentWeatherBox/MyCurrentWeatherBox";
import MyLoader from "./UI/Loader/MyLoader";
import { useActions } from "../hooks/useActions";

const MiniBox = ({ cityName, weatherData, type = "default" }) => {
  const { getWeather, getForecastWeather } = useActions();

  const handleShowOnMainBox = () => {
    getWeather(cityName);
    getForecastWeather(cityName);
  };

  if (weatherData)
    return (
      <MyBox cityName={cityName} type={type} onClick={handleShowOnMainBox}>
        <h1>{cityName}</h1>
        <MyCurrentWeatherBox
          mini={true}
          weatherCityTemp={Math.round(weatherData.main.temp)}
          weatherDescription={weatherData.weather[0].description}
        />
      </MyBox>
    );
  return (
    <MyBox cityName={cityName} type={type}>
      <MyLoader />
    </MyBox>
  );
};

export default MiniBox;
