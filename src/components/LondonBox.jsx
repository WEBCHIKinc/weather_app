import React from "react";
import MyBox from "./UI/Box/MyBox";
import { useSelector } from "react-redux";
import MyCurrentWeatherBox from "./UI/Box/CurrentWeatherBox/MyCurrentWeatherBox";
import MyLoader from "./UI/Loader/MyLoader";
import { useActions } from "../hooks/useActions";

const LondonBox = () => {
  const { londonWeatherData } = useSelector((state) => state.weather);
  const { getWeather, getForecastWeather } = useActions();

  const handleShowOnMainBox = () => {
    getWeather("london");
    getForecastWeather("london");
  };

  if (londonWeatherData)
    return (
      <MyBox londonBox onClick={handleShowOnMainBox}>
        <h1>London</h1>
        <MyCurrentWeatherBox
          mini={true}
          weatherCityTemp={Math.round(londonWeatherData.main.temp)}
          weatherDescription={londonWeatherData.weather[0].description}
        />
      </MyBox>
    );
  return (
    <MyBox londonBox>
      <MyLoader />
    </MyBox>
  );
};

export default LondonBox;
