import React from "react";
import MyBox from "./UI/Box/MyBox";
import { useSelector } from "react-redux";
import MyCurrentWeatherBox from "./UI/Box/CurrentWeatherBox/MyCurrentWeatherBox";
import MyLoader from "./UI/Loader/MyLoader";
import { useActions } from "../hooks/useActions";

const TorontoBox = () => {
  const { torontoWeatherData } = useSelector((state) => state.weather);
  const { getWeather, getForecastWeather } = useActions();

  const handleShowOnMainBox = () => {
    getWeather("toronto");
    getForecastWeather("toronto");
  };

  if (torontoWeatherData)
    return (
      <MyBox torontoBox onClick={handleShowOnMainBox}>
        <h1>Toronto</h1>
        <MyCurrentWeatherBox
          mini={true}
          weatherCityTemp={Math.round(torontoWeatherData.main.temp)}
          weatherDescription={torontoWeatherData.weather[0].description}
        />
      </MyBox>
    );
  return (
    <MyBox torontoBox>
      <MyLoader />
    </MyBox>
  );
};

export default TorontoBox;
