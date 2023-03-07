import React from "react";
import MyBox from "./UI/Box/MyBox";
import { useSelector } from "react-redux";
import MyCurrentWeatherBox from "./UI/Box/CurrentWeatherBox/MyCurrentWeatherBox";
import MyLoader from "./UI/Loader/MyLoader";
import { useActions } from "../hooks/useActions";

const NewYorkBox = () => {
  const { newYorkWeatherData } = useSelector((state) => state.weather);
  const { getWeather, getForecastWeather } = useActions();

  const handleShowOnMainBox = () => {
    getWeather("new york");
    getForecastWeather("new york");
  };

  if (newYorkWeatherData)
    return (
      <MyBox newYorkBox onClick={handleShowOnMainBox}>
        <h1>New York</h1>
        <MyCurrentWeatherBox
          mini={true}
          weatherCityTemp={Math.round(newYorkWeatherData.main.temp)}
          weatherDescription={newYorkWeatherData.weather[0].description}
        />
      </MyBox>
    );
  return (
    <MyBox newYorkBox>
      <MyLoader />
    </MyBox>
  );
};

export default NewYorkBox;
