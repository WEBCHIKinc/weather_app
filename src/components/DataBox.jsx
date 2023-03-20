import React, { useState } from "react";
import { useSelector } from "react-redux";
import MyCurrentWeatherBox from "./UI/Box/CurrentWeatherBox/MyCurrentWeatherBox";
import MyBox from "./UI/Box/MyBox";
import MyForecastWeatherBox from "./UI/Box/MyForecastWeatherBox/MyForecastWeatherBox";
import MyButton from "./UI/Button/MyButton";
import MyCityInput from "./UI/CityInput/MyCityInput";
import MyLoader from "./UI/Loader/MyLoader";
import { useActions } from "../hooks/useActions";

const DataBox = () => {
  const {
    cityName,
    isLoading,
    weatherDescription,
    weatherCityName,
    weatherCityTemp,
  } = useSelector((state) => state.weather);
  const { changeCityName, getWeather, getForecastWeather } = useActions();
  const [current, setCurrent] = useState("daily");

  const handleCityNameChange = (e) => {
    const cityName = e.target.value;
    changeCityName(cityName);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      getWeather(cityName);
      getForecastWeather(cityName);
      changeCityName("");
    }
  };

  if (isLoading) {
    return <MyLoader />;
  }

  return (
    <MyBox>
      <div className="cityNameBox">
        <h1 className="font-size40">{weatherCityName}</h1>
      </div>

      {current === "daily" ? (
        <MyCurrentWeatherBox
          weatherCityTemp={weatherCityTemp}
          weatherDescription={weatherDescription}
        />
      ) : (
        <MyForecastWeatherBox />
      )}

      <MyCityInput
        infoPage={true}
        placeholder="City..."
        value={cityName}
        onChange={handleCityNameChange}
        onKeyDown={handleKeyDown}
        spellCheck="false"
      />

      <MyButton
        infoPage
        current={current === "weekly"}
        onClick={() => setCurrent("weekly")}
      >
        Week
      </MyButton>

      <MyButton
        infoPage
        daily
        current={current === "daily"}
        onClick={() => setCurrent("daily")}
      >
        Now
      </MyButton>
    </MyBox>
  );
};

export default DataBox;
