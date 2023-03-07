import React from "react";
import MyBox from "./UI/Box/MyBox";
import { useSelector } from "react-redux";
import MyCurrentWeatherBox from "./UI/Box/CurrentWeatherBox/MyCurrentWeatherBox";
import MyLoader from "./UI/Loader/MyLoader";
import { useActions } from "../hooks/useActions";

const IpCityBox = () => {
  const { ipWeatherData } = useSelector((state) => state.weather);
  const { getWeather, getForecastWeather } = useActions();

  const handleShowOnMainBox = () => {
    getWeather(ipWeatherData.name);
    getForecastWeather(ipWeatherData.name);
  };

  if (ipWeatherData)
    return (
      <MyBox ipBox onClick={handleShowOnMainBox}>
        <h1>{ipWeatherData.name}</h1>
        <MyCurrentWeatherBox
          mini={true}
          weatherCityTemp={Math.round(ipWeatherData.main.temp)}
          weatherDescription={ipWeatherData.weather[0].description}
        />
      </MyBox>
    );
  return (
    <MyBox ipBox>
      <MyLoader />
    </MyBox>
  );
};

export default IpCityBox;
