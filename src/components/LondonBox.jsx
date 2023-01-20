import React from "react";
import MyBox from "./UI/Box/MyBox";
import { useSelector } from "react-redux";
import MyCurrentWeatherBox from "./UI/Box/CurrentWeatherBox/MyCurrentWeatherBox";
import MyLoader from "./UI/Loader/MyLoader";

const LondonBox = () => {
  const { londonWeatherData } = useSelector((state) => state.weather);

  if (londonWeatherData)
    return (
      <MyBox londonBox>
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
