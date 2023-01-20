import React from "react";
import MyBox from "./UI/Box/MyBox";
import MyCurrentWeatherBox from "./UI/Box/CurrentWeatherBox/MyCurrentWeatherBox";
import { useSelector } from "react-redux";
import MyLoader from "./UI/Loader/MyLoader";

const KyivBox = () => {
  const { kyivWeatherData } = useSelector((state) => state.weather);

  if (kyivWeatherData)
    return (
      <MyBox kyivBox>
        <h1>Kyiv</h1>
        <MyCurrentWeatherBox
          mini={true}
          weatherCityTemp={Math.round(kyivWeatherData.main.temp)}
          weatherDescription={kyivWeatherData.weather[0].description}
        />
      </MyBox>
    );
  return (
    <MyBox kyivBox>
      <MyLoader />
    </MyBox>
  );
};

export default KyivBox;
